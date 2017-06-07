function FVPresentSum(PV, n, i)
//Returns the Future Value of a Present Sum
//PV = Present Value
//n = Number of Periods
//i = Interest Rate
//https://en.wikipedia.org/wiki/Time_value_of_money#Future_value_of_a_present_sum
{
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

function PresentValueOfAnnuityDue(A, n, i)
//http://en.wikipedia.org/wiki/Time_value_of_money#Present_value_of_an_annuity_for_n_payments
{
	return A / i * (1-1/Math.pow(1+i,n)) * (1+i);
}

function PresentValueOfGrowingAnnuityDue(A, n, i, g)
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
	
function AnnuityFromPVGrowingAnnuityDue(PV, n, i, g)
//http://en.wikipedia.org/wiki/Time_value_of_money#Present_value_of_a_growing_annuity
//returns the initial annuity payment when the present value of a growing annuity due is known
//('A' from the formula on the wikipedia page)
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

function FutureValueOfGrowingAnnuity(A, n, i, g)
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