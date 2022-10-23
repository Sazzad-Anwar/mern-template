export default function capitalLetterWord(word: string): string {
    if (word?.split(' ').length > 1) {
        return word
            .split(' ')
            .map((word) => capitalLetterWord(word))
            .join(' ');
    } else {
        return (
            word?.split('')[0].toUpperCase() +
            word
                ?.split('')
                .filter((letter, i) => i !== 0)
                .join('')
        );
    }
}
