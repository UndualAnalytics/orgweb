# Step 1: Use Node.js as the base image
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Step 4: Copy the entire project into the container
COPY . .

# Step 5: Build the application for production
RUN npm run build

# Step 6: Expose the port on which the app will run
EXPOSE 3000

# Step 7: Start the Next.js app
CMD ["npm", "start"]
