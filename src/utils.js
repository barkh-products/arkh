export const separateFirstWord = input => {
    const parts = (input ? input : "").split(" ");
    return [
      parts.length > 0 ? parts[0] : "",
      parts.slice(1).reduce((prev, curr) => prev + " " + curr, "")
    ];
  };
  
  