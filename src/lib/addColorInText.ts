export const addColorInText = (text: string, colors: string) => {
    const title = text.split(" ");
    const indexes = colors.split(",").map((index) => parseInt(index) - 1);

    indexes.forEach((index) => {
      title[index] = `<span class="inline text-blue-600 dark:text-blue-400">${title[index]}</span>`;
    });

    return title.join(" ");
  };