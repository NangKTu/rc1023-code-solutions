function waitTwoSeconds(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Done Waiting!');
    }, 2000);
  });
}

async function performWait(): Promise<void> {
  try {
    const result = await waitTwoSeconds();
    console.log(result);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

performWait();
