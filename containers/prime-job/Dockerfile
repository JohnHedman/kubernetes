FROM node:13

# Create app directory
WORKDIR /usr/src/app

# Copy the package files into the WORKDIR
# Install all the dependencies from the package file
# COPY package*.json ./
# RUN npm install

# Put all the non-installed files in the directory
COPY . ./

CMD ["node", "job.js", "100"]
