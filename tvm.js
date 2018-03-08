// FUNDAMENTAL TVM FORMULAS

function FVPresentSum(PV, n, i) {
//Returns the Future Value of a Present Sum
//PV = Present Value
//n = Number of Periods
//i = Interest Rate
//https://en.wikipedia.org/wiki/Time_value_of_money#Future_value_of_a_present_sum
	return PV * Math.pow(1+i, n);
}

function PVFutureSum(FV, n, i)
//Returns the Present Value of a Future Sum
//FV = Future Value
//n = Number of Periods
//i = Interest Rate
//http://en.wikipedia.org/wiki/Time_value_of_money#Present_value_of_a_future_sum
{
	return FV / Math.pow(1+i, n);
}

function PVAnnuity(A, n, i)
//Returns the Present Value of an Annuity
//A = Annuity
//n = Number of Periods
//i = Interest Rate
//https://en.wikipedia.org/wiki/Time_value_of_money#Present_value_of_an_annuity_for_n_payment_periods
{
	return A / i * (1-1/Math.pow(1+i,n));
}

function PVAnnuityDue(A, n, i)
//Returns the Present Value of an Annuity Due
//A = Annuity
//n = Number of Periods
//i = Interest Rate
//https://en.wikipedia.org/wiki/Time_value_of_money#Present_value_of_an_annuity_for_n_payment_periods
{
	return A / i * (1-1/Math.pow(1+i,n)) * (1+i);
}

function PVGrowingAnnuity(A, n, i, g)
//Returns the Present Value of a Growing Annuity
//A = Annuity
//n = Number of Periods
//i - Interest Rate
//g = Growth Rate
//http://en.wikipedia.org/wiki/Time_value_of_money#Present_value_of_a_growing_annuity
{
	if (i != g)
	{
		return A / (i-g) * (1-Math.pow((1+g)/(1+i),n));
	}
	else
	{
		return A * n / (1+i);
	}
}

function PVGrowingAnnuityDue(A, n, i, g)
//Returns the Present Value of a Growing Annuity Due
//A = Annuity
//n = Number of Periods
//i - Interest Rate
//g = Growth Rate
//http://en.wikipedia.org/wiki/Time_value_of_money#Present_value_of_a_growing_annuity
{
	if (i != g)
	{
		return A / (i-g) * (1-Math.pow((1+g)/(1+i),n)) * (1+i);
	}
	else
	{
		return A * n;
	}
}
	
function PVGrowingAnnuityDue1stPmt(PV, n, i, g)
//returns the first annuity payment when the present value of a growing annuity due is known
//A = Annuity
//n = Number of Periods
//i - Interest Rate
//g = Growth Rate
//http://en.wikipedia.org/wiki/Time_value_of_money#Present_value_of_a_growing_annuity
{
	if (i != g)
	{
		return PV * (i-g) / (1-Math.pow((1+g)/(1+i),n)) / (1+i);
	}
	else
	{
		return PV / n;
	}
}

function PVPerpetuity(A, i)
//returns the Present Value of a Perpetuity
//A = Annuity Payment
//i = Interest Rate
//https://en.wikipedia.org/wiki/Time_value_of_money#Present_value_of_a_perpetuity
{
	return A / i;
}

function PVGrowingPerpetuity(A, i, g)
//returns the Present Value of a Growing Perpetuity
//A = Annuity Payment
//i = Interest Rate
//g = Growth Rate
//http://financeformulas.net/Present_Value_of_Growing_Perpetuity.html
{
	return A / (i - g);
}

function PVGrowingPerpetuityDue(A, i, g)
//returns the Present Value of a Growing Perpetuity Due
//A = Annuity Payment
//i = Interest Rate
//g = Growth Rate
{
	return A / (i - g) * (1 + i);
}

function PVGrowingPerpetuityDue1stPmt(PV, i, g)
//returns the 1st Annuity Payment of a Growing Perpetuity Due with given Present Value
//PV = Present Value
//i = Interest Rate
//g = Growth Rate
{
	return PV * (i - g) / (1 + i);
}

function FVAnnuity(A, n, i)
//returns the Future Value of an Annuity
//A = Annuity Payment
//n = Number of Periods
//i = Interest Rate
//https://en.wikipedia.org/wiki/Time_value_of_money#Future_value_of_an_annuity
{
	return A * (Math.pow(1+i, n) - 1) / i;
}

function FVAnnuityDue(A, n, i)
//returns the Future Value of an Annuity Due
//A = Annuity Payment
//n = Number of Periods
//i = Interest Rate
//https://en.wikipedia.org/wiki/Time_value_of_money#Future_value_of_an_annuity
{
	return A * (Math.pow(1+i, n) - 1) / i * (1 + i);
}

function FVGrowingAnnuity(A, n, i, g)
//Returns the Future Value of a Growing Annuity
//A = Annuity Payment
//n = Number of Periods
//i = Interest Rate
//g = Growth Rate
//http://en.wikipedia.org/wiki/Time_value_of_money#Future_value_of_a_growing_annuity
{
	if (i != g)
	{
		return A * (Math.pow(1+i, n) - Math.pow(1+g, n))/(i-g);
	}
	else
	{
		return A * n * Math.pow(1+i , n-1);
	}
}

function FVGrowingAnnuityDue(A, n, i, g)
//Returns the Future Value of a Growing Annuity Due
//A = Annuity Payment
//n = Number of Periods
//i = Interest Rate
//g = Growth Rate
//http://en.wikipedia.org/wiki/Time_value_of_money#Future_value_of_a_growing_annuity
{
	if (i != g)
	{
		return A * (Math.pow(1+i, n) - Math.pow(1+g, n))/(i-g) * (1 + i);
	}
	else
	{
		return A * n * Math.pow(1+i , n);
	}
}

// APPLIED TVM FORMULAS

// Retirement Income Functions

function RICapitalPreservation(S, r)
//Returns the first year income from retirement savings using the Capital Preservation Method
//S = Savings available for retirement income at retirement
//r = Investment return
{
	//return S * r / (1 + r); //Alternate calculation that provides same result with no dependencies
	return S - PVFutureSum(S, 1, r);
}

function RIGrowingPerpetuity(S, r, i)
//Returns the first year income from retirement savings using the Growing Perpetuity Method
//S = Savings available for retirement income at retirement
//r = Investment return
//i = Inflation rate (annuity payment growth rate)
{
	return PVGrowingPerpetuityDue1stPmt(S, r, i);
}

function RIGrowingAnnuity(S, y, r, i)
//Returns the first year income from retirement savings using the Growing Annuity Method
//S = Savings available for retirement income at retirement
//y = Years in Retirement
//r = Investment return
//i = Inflation rate (annuity payment growth rate)
{
	return PVGrowingAnnuityDue1stPmt(S, y, r, i);
}

function RISpecifiedDB(S, y, r, i, DB)
//Returns the first year income from retirement savings using the Specified Death Benefit Method, or 0 if no funds available for income
//S = Savings available for retirement income at retirement
//y = Years in Retirement
//r = Investment return
//i = Inflation rate (annuity payment growth rate)
//DB = Death Benefit amount at Death in Future Value
{
	var SavingsForIncome = S - PVFutureSum(DB, y, r);
	if (SavingsForIncome <= 0)
	{
		return 0;
	}
	else
	{
		return PVGrowingAnnuityDue1stPmt(SavingsForIncome, y, r, i);
	}
}

function RIFixedDollar(S, y, r, i, w)
//Returns the first year income from retirement savings using the Fixed Dollar Withdrawal Method, or 0 if insufficient funds
//S = Savings available for retirement income at retirement
//y = Years in Retirement
//r = Investment return
//i = Inflation rate (annuity payment growth rate)
//w = Initial withdrawal rate as percentage of S
{
	var PVIncome = PVGrowingAnnuityDue(S * w, y, r, i);
	if (PVIncome > S)
	{
		return 0;
	}
	else
	{
		return S * w;
	}
}

function RIFixedPercentage(S, w)
//Returns the first year income from retirement savings using the Fixed Percentage Withdrawal Method
//S = Savings available for retirement income at retirement
//w = Withdrawal rate
{
	return S * w;
}

// OTHER FORUMULAS

function annualToMonthly(Rate)
//Converts an annual rate to a monthly rate
{
  return Math.pow((1+Rate),(1/12))-1;
}