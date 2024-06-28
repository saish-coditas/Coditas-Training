#!/bin/bash
echo this is gaurav sharma
echo 'this is our first                 shellscript'
echo -e "\033[0;31mfail message"
echo -e "\033[0;32msuccess message"
echo -e "\033[0;33mwarning message here"

#This is a comment
: '
This is
multiline comment
in shellscript
'

: <<'END_COMMENT'
This is
multiline comment
in shellscript
END_COMMENT

echo "my \
name is \
Saish\
"

TEST_VARIABLE = 10
NAME="Saish"
AGE="22"
echo "${NAME}, ${AGE}"
echo $NAME
echo $NAMEvidhya
echo "${NAME}"

#System Variables
echo "${USER}" #<Blank>
echo "${HOME}" #/c/Users/Coditas-Admin
echo "${EDITOR}" #<Blank>
echo "${SHELL}" #/usr/bin/bash
echo "${LOGNAME}" #<Blank>
echo "${PATH}" #
echo "${LANG}" #en_US.UTF-8
echo "${TERM}" #xterm
echo "${OSTYPE}" #msys
echo "${PPID}" #Parent Process ID
echo "${$}" #Process ID
echo "${HOSTNAME}" #5597-LAP-0578
echo "${PWD}" #/c/Users/Coditas-Admin/Desktop/Coditas-Training/Shell Scripting
echo "${UID}" #197611
echo "${SECONDS}" #0
