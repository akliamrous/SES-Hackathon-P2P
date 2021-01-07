function calculateNewCreditScore(transaction_result)
{   
    //GET DATA FROM DATABASE
    var transaction = 50
    var current_credit = 65
    var total_previous_transactions = 20
    var total_failed_transactions = 2
    var total_successful_transactions = 18
    var FR = total_failed_transaction / total_previous_transactions
    var SR = total_successful_transactions / total_previous_transactions
    var amount_failed = 10
    var amount_succeed = 20
    var SHR = ((amount_succeed*SR)  -  (amount_failed* FR)) / 10^(Math.log(Math.max(amount_succeed, amount_failed) + 1))
    var FHR = ((amount_failed* FR)- (amount_succeed*SR)) / 10^(Math.log(Math.max(amount_succeed, amount_failed) + 1))

    if(transaction_result == true){

        return current_credit + (Math.min(transaction / 100 * 5, 5) * (SHR + 1))

    }

    else
    {
        return current_credit - (Math.min(transaction / 100 * 5, 5) * (FHR + 1))
    }

}