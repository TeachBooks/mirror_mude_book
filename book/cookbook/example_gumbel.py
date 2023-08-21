from grading import check
from math import isclose

tolerance = 0.001

# Using rel_tol is more reliable in the face of aliasing, but to fit the instructions give we use abs_total
check_float = lambda a, b: isclose(a, b, rel_tol=0, abs_tol=tolerance)

# We have to pass in the globals object since we need to have access to changes as well
@check
def check_example(glob):
	mu, beta = glob["mu"], glob["beta"]
	if (check_float(mu, -3.21953) and check_float(beta, -8.65617)):
		print(f"You got the parameters right (Part 1), well done! (checked with tolerance {tolerance})")
	else:
		print(f"Your parameters (Part 1) are incorrect, your inverse (Part 2) won't be graded until these are right. (checked with tolerance {tolerance})")
		return 

	function = glob["find_x_with_probability_p"]
	
	test_inputs = [(0.001, 13.50977500432694), (0.2, 0.8998147005530068), (0.9, -22.699089535951632)]
	failed = []

	for x, out in test_inputs:
		result = function(x)
		if not check_float(result, out):
			failed.append((x, out, result))

	if len(failed) == 0:
		print(f"Well done, your inverse function is correct! (checked with tolerance {tolerance})")	
	else:
		print(f"Your function (Part 2) failed some tests. Keep in mind the tolerance is {tolerance}")
		print("Failed inputs:")
		for case in failed:
			print(f"{case[0]} gave {case[2]}, expected {case[1]}")
"""
Task 0:
x_1 = 4
p_e_1 = 1-.9
x_2 = 10
p_e_2 = 1-.99

Task 1:
beta = -(x_2 - x_1) / log(log(p_e_2) / log(p_e_1))
mu = x_1 + beta * log(-log(p_e_1))

Task 2:
x = mu - beta * log(-log(p))
"""