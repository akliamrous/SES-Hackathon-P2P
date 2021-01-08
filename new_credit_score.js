function calculateNewCreditScore(transaction_result, transaction, current_credit, total_previous_transactions, 
    total_failed_transactions, total_successful_transactions, amount_failed, amount_succeed) {   
    //GET DATA FROM DATABASE

    var FR = total_failed_transactions / total_previous_transactions
    var SR = total_successful_transactions / total_previous_transactions

    var SHR = ((amount_succeed*SR)  -  (amount_failed* FR)) / Math.pow(10, (Math.log(Math.max(amount_succeed, amount_failed)) + 1))
    var FHR = ((amount_failed* FR) - (amount_succeed*SR)) / Math.pow(10, (Math.log(Math.max(amount_succeed, amount_failed)) + 1))

    if(transaction_result == true){

        return current_credit + (Math.min(transaction / 33.33, 3) * (SHR + 1))

    }

    else
    {
        return current_credit - (Math.min(transaction / 12.2, 8) * (FHR + 1))
    }

}


