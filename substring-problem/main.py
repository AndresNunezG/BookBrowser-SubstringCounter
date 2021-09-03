from time import perf_counter

def substring_counter(string: str)->dict:
    """ Count the number of appearances of substrings in the input string
    Args:
        string (str): string target to identify substrings
    Returns:
        dict: dictionary with substring as key and number of appereances as value (if there is more than one)
    """
    string_length = len(string)
    substring_length = 4
    substring_dict = {}
    for i in range(string_length):
        if (string_length - i) < substring_length:
            break
        substring = string[i: i + substring_length]
        if substring in substring_dict:
            substring_dict[substring] += 1
        else:
            substring_dict[substring] = 1
    for key in list(substring_dict.keys()):
        if substring_dict[key] == 1:
            substring_dict.pop(key)
    return substring_dict

if __name__ == "__main__":
    #Ask input string
    input_string = input("Substring: ")
    #Timer to meause performance
    start_timer = perf_counter()
    substrings = substring_counter(input_string)
    end_timer = perf_counter()
    print(f'Time spend: {end_timer-start_timer} [seconds]')

    #Result formatting in table
    row_width = 12
    print(''.center(2*row_width, '-'), end="\n")
    print('Substring'.center(row_width), end="")
    print('Appearences'.center(row_width), end="\n")
    print(''.center(2*row_width, '-'), end="\n")
    for key, value in substrings.items():
        print(key.center(row_width), end="")
        print(str(value).center(row_width), end="\n")
        print(''.center(2*row_width, '-'), end="\n")