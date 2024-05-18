#Dockerfile mywebapp (Service created for the first part)
# Use an official Node.js runtime as a parent image
FROM node:19-alpine

# Set the working directory
WORKDIR /app

# Copy the application files
COPY src /app/

# Install dependencies
RUN npm install

# Define the command to run the application
CMD ["node","myWebApp.js"]
