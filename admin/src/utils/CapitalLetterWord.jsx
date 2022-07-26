export default function CapitalLetterWord(word) {
  if (word?.split(" ").length > 1) {
    return word
      .split(" ")
      .map((word) => CapitalLetterWord(word))
      .join(" ");
  } else {
    return (
      word?.split("")[0].toUpperCase() +
      word
        ?.split("")
        .filter((letter) => letter !== word.split("")[0])
        .join("")
    );
  }
}
