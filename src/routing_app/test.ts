export const helperFunction = function <T>(
  restCall: (data: T) => void
): (data: T) => void {
  const restCallWrapper = function (requestData: T) {
    restCall(requestData);
  };
  return restCallWrapper;
};

const timesTwo = (amount: number) => {
    amount*2
};

const test = helperFunction<number>(timesTwo);
test(3)