module.exports = function toReadable(number) {
    number = "" + number;
    let numbers = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    let str = "";

    for (let i = 0; i <= number.length - 1; i++) {
        if (number.length <= 2) {
            if (number <= 20) {
                str = number != 0 ? numbers[number] : "zero";
            } else if (i === 0) {
                str +=
                    numbers[number[i] + 0] + (number[i + 1] !== "0" ? " " : "");
            } else {
                str += numbers[number[i]];
            }
        }
        if (number.length === 3) {
            if (i === 0) {
                str += numbers[number[i]] + " hundred";
            }
            if (i === 1) {
                if (number.slice(1) <= 20 && number.slice(1) >= 10) {
                    str += " " + numbers[number.slice(1)];
                    break;
                } else if (number.slice(1) <= 10) {
                    str =
                        str +
                        (number[2] !== "0" ? " " + numbers[number[2]] : "");
                }
            }

            if (i === 2 && number.slice(1) > 20) {
                str +=
                    " " +
                    numbers[number[1] + 0] +
                    (number[i] !== "0" ? " " + numbers[number[i]] : "");
            }
        }
    }
    return str;
};
