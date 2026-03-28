import argparse
from data_parser import parser

def main():
    parser.add_argument('-f', '--file', help='Input file path', required=True)
    parser.add_argument('-o', '--output', help='Output file path', required=True)

    args = parser.parse_args()

    try:
        with open(args.file, 'r') as f:
            data = f.read()
    except FileNotFoundError:
        parser.error(f'File {args.file} not found')

    parsed_data = parser.parse(data)

    try:
        with open(args.output, 'w') as f:
            f.write(str(parsed_data))
    except PermissionError:
        parser.error('Permission denied to write to output file')

if __name__ == '__main__':
    main()