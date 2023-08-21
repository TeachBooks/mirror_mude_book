from grading import check
from math import isclose

tolerance = 0.001

# Using rel_tol is more reliable in the face of aliasing, but to fit the instructions give we use abs_total
check_float = lambda a, b: isclose(a, b, rel_tol=0, abs_tol=tolerance)

# We have to pass in the globals object since we need to have access to changes as well
@check
def check_example(glob):
	mu, beta = glob["mu"], glob["beta"]
	if (check_float(mu, 5.0) and check_float(beta, 3.0)):
		print(f"You got the parameters right, well done! (checked with tolerance {tolerance})")
	else:
		print(f"Your parameters are incorrect, your inverse won't be graded until these are right. (checked with tolerance {tolerance})")
		return 

	function = glob["find_x_with_probability_p"]
	
	test_inputs = [(0.1, 2.49790266426), (0.2, 3.57234501402), (0.9, 11.7511019819)]
	failed = []

	for x, out in test_inputs:
		result = function(x)
		if not check_float(result, out):
			failed.append((x, out, result))

	if len(failed) == 0:
		print(f"Well done, your inverse function is correct! (checked with tolerance {tolerance})")	
	else:
		print(f"Your function failed some tests. Keep in mind the tolerance is {tolerance}")
		print("Failed inputs:")
		for case in failed:
			print(f"{case[0]} gave {case[2]}, expected {case[1]}")