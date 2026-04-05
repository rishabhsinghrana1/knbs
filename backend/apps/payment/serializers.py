# from rest_framework import serializers
# from .models import PaymentAuthorization, PaymentAuthorizationLine


# class PaymentAuthorizationLineSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = PaymentAuthorizationLine
#         fields = [
#             'debtor_code',
#             'debtor_name',
#             'gl_account',
#             'account_name',
#             'amount',
#             'request_no',
#             'request_line',
#         ]


# class PaymentAuthorizationSerializer(serializers.ModelSerializer):
#     lines = PaymentAuthorizationLineSerializer(many=True)

#     class Meta:
#         model = PaymentAuthorization
#         fields = [
#             'id',
#             'payment_number',
#             'bank_in_sage',
#             'status',
#             'created_at',
#             'lines'
#         ]
#         read_only_fields = ['payment_number']

#     def create(self, validated_data):
#         lines_data = validated_data.pop('lines')
#         payment = PaymentAuthorization.objects.create(**validated_data)

#         for line in lines_data:
#             PaymentAuthorizationLine.objects.create(
#                 payment=payment,
#                 **line
#             )

#         return payment


from rest_framework import serializers
from .models import PaymentAuthorization, PaymentAuthorizationLine
from apps.account.models import Accounts   # <-- import correct path

class PaymentAuthorizationLineSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentAuthorizationLine
        fields = [
            'debtor_code',
            'debtor_name',
            'gl_account',
            'account_name',
            'amount',
            'request_no',
            'request_line',
        ]


class PaymentAuthorizationSerializer(serializers.ModelSerializer):
    lines = PaymentAuthorizationLineSerializer(many=True)
    bank_description = serializers.SerializerMethodField()   # 👈 ADD THIS

    class Meta:
        model = PaymentAuthorization
        fields = [
            'id',
            'payment_number',
            'bank_in_sage',
            'bank_description',   # 👈 ADD THIS
            'status',
            'created_at',
            'lines'
        ]
        read_only_fields = ['payment_number']

    # ================= BANK DESCRIPTION LOGIC =================
    def get_bank_description(self, obj):
        try:
            account = Accounts.objects.get(AccountLink=obj.bank_in_sage)
            return account.Description
        except Accounts.DoesNotExist:
            return None

    # ================= CREATE LOGIC =================
    def create(self, validated_data):
        lines_data = validated_data.pop('lines')
        payment = PaymentAuthorization.objects.create(**validated_data)

        for line in lines_data:
            PaymentAuthorizationLine.objects.create(
                payment=payment,
                **line
            )

        return payment
    
    
