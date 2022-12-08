const example_code_1 = `\ndef toList(string):
  li = list(string[1:-1].split(","))
  numbers = [int(i) for i in li]
  return numbers

def mean_absolute_deviation(numbers):
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

ans = mean_absolute_deviation(toList(input()))
print (ans)

`;

const example_code_2 = `\ndef fib(n: int):
  """Return n-th Fibonacci number.
  >>> fib(10)
  55
  >>> fib(1)
  1
  >>> fib(8)
  21
  """
  if n < 2:
    return n
  return fib(n-1) + fib(n-2)

ans = fib(int(input()))
print (ans)
`;

const example_code_3 = `\ndef toList(string):
  li = list(string[1:-1].split(","))
  numbers = [int(i) for i in li]
  return numbers

def mean_absolute_deviation(numbers):
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

ans = mean_absolute_deviation(toList(input()))
print (ans)

`;

const example_code_4 = `\ndef fib(n: int):
  """Return n-th Fibonacci number.
  >>> fib(10)
  55
  >>> fib(1)
  1
  >>> fib(8)
  21
  """
  if n < 2:
    return n
  return fib(n-1) + fib(n-2)

ans = fib(int(input()))
print (ans)
`;

const completeCodeExamples = [
  example_code_1,
  example_code_2,
  example_code_3,
  example_code_4,
];
