set -e

CLEAR='\033c'
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# init the process
if [[ -z $1 ]]; then
    printf $CLEAR
    echo -e "${RED}REMEMBER TO UPDATE PACKAGE VERSION!"
    echo -e "${BLUE}Enter version: ${NC}"
    read VERSION
else
  VERSION=$1
fi

read -p "Releasing $VERSION - are you sure? (y/n) " -n 1 -r

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${CLEAR}Releasing Spatial Beta - ${GREEN}Version $VERSION${NC}"

    # echo -e "\n${YELLOW}Linting code... ${NC}"
    # npm run lint

    echo -e "\n${YELLOW}Linting stylesheets... ${NC}"
    npm run lint:css

    echo -e "\n${YELLOW}Generating build... ${NC}"
    npm run build

    echo -e "\n${YELLOW}GIT ${BLUE}Adding files ... ${NC}"
    git add .

    echo -e "\n${YELLOW}GIT ${BLUE}Adding commit ... ${NC}"
    git commit -m "build: $VERSION"

    echo -e "\n${YELLOW}Publishing a new release... ${NC}"
    git push -u origin master
    npm publish

    echo -e "\n${GREEN}GOT EM!${NC}"

fi
#   echo "\n${YELLOW}Checking for errors... ${NC}"
#   yarn lint


#   # echo "\n${YELLOW}Running all tests... ${NC}"
#   # yarn test


#   echo "\n${YELLOW}Generating build... ${NC}"
#   VERSION=$VERSION yarn build


#   echo "\n${YELLOW}Commiting... ${NC}"
#   git add -A
#   git commit -m "build: $VERSION"
#   npm version $VERSION --message "build: release $version"


#   echo "\n${YELLOW}Publishing a new release... ${NC}"
#   git push origin refs/tags/v$VERSION
#   git push
#   npm publish


#   echo "\n${GREEN}BUILD FINISHED WITH SUCCESS!${NC}"
# fi
