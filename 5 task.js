function showWithDelay(arr) {
    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
          console.log(arr[i]);
        }, 1000 * (i + 1));
    }
}

showWithDelay([1, 'привет', 10, 'что-то']);