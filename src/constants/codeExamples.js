const example_code_1 = `\ndef mean_absolute_deviation(numbers):
  """ For a given list of input numbers, calculate Mean Absolute Deviation
  around the mean of this dataset.
  Mean Absolute Deviation is the average absolute difference between each
  element and a centerpoint (mean in this case):
  MAD = average | x - x_mean |
  >>> mean_absolute_deviation([1.0, 2.0, 3.0, 4.0])
  1.0
  """
  mean = sum(numbers) / len(numbers)
  sum_abs_diff = 0
  for x in numbers:
      sum_abs_diff += abs(x - mean)
  return sum_abs_diff / len(numbers)
`;

const example_code_2 = `\ndef fib(n: int):
  """Return n-th Fibonacci number.
  >>> fib(10)
  55
  >>> fib(1)
  1
  >>> fib(8)
  21
  """`;

const example_code_3 = `\ndef mean_absolute_deviation(numbers: List[float]) -> float:
  """ For a given list of input numbers, calculate Mean Absolute Deviation
  around the mean of this dataset.
  Mean Absolute Deviation is the average absolute difference between each
  element and a centerpoint (mean in this case):
  MAD = average | x - x_mean |
  >>> mean_absolute_deviation([1.0, 2.0, 3.0, 4.0])
  1.0
  """`;

const example_code_4 = `\ndef fib(n: int):
  """Return n-th Fibonacci number.
  >>> fib(10)
  55
  >>> fib(1)
  1
  >>> fib(8)
  21
  """`;

export const codeExamples = [
  example_code_1,
  example_code_2,
  example_code_3,
  example_code_4,
];
