#Dockerfile myfirstapp (First Service)
# Use an official Node.js runtime as a parent image
FROM node:19-alpine

# Set the working directory
WORKDIR /usr/app

# Copy the package.json and package-lock.json files
COPY src/package*.json /usr/app/

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY src /usr/app/

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["node", "myfirstapp.js"]
