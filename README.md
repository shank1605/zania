Communication and Thought Process
Throughout the development of this project, I focused on breaking down the problem into structured, modular tasks while keeping the user experience and maintainability at the forefront. The process started by thoroughly analyzing the requirements and then planning how to implement the necessary features step by step.

Frontend Architecture:
From the outset, I opted for a component-based architecture with React, using Material-UI to ensure a clean and consistent user interface. My design decisions revolved around creating modular, reusable components that could be easily extended in the future. For example, the DocumentCard component was built to encapsulate all the details of a document (title, description, image), making it reusable across different parts of the UI without code duplication. Additionally, by incorporating a grid system using Material-UI, I ensured that the application remained responsive across different screen sizes.

Data Handling and Persistence:
Handling the documents' data was a key part of the project. I initially implemented a static JSON data structure, and later expanded it to be more dynamic by interacting with an API and incorporating browser storage for data permanence. I ensured that the data was managed properly by using the useEffect hook for fetching and updating the state asynchronously, maintaining a smooth and efficient flow of data across the application.

Drag-and-Drop Functionality:
For the drag-and-drop feature, I initially explored popular libraries like react-beautiful-dnd, but due to limitations, I shifted to another library that better suited the requirements. The goal was to make the functionality intuitive for the user while ensuring the codebase remained modular. By keeping the drag-and-drop logic separate from the UI components, I maintained clean separation of concerns, enhancing both readability and maintainability.

API and Data Syncing:
One of the final challenges involved syncing the frontend state with a mock server using msw for realistic API interactions. I ensured that data was saved periodically using a timer (every five seconds) while avoiding unnecessary saves if no changes were detected. Additionally, I integrated a loading spinner and a timestamp to indicate when the last save occurred, providing a clear UX indicator of ongoing background operations.

Testing and Error Handling:
Finally, I added error handling around data fetching and saving operations to account for potential API failures. I also ensured that the application provided meaningful feedback to the user in case of network issues or data processing errors. This helped create a more resilient and user-friendly application.

In conclusion, the project's primary focus was to build a robust and scalable frontend system while maintaining code quality through modular design patterns. Communication of key concepts such as component reusability, state management, and efficient API interaction was key to ensuring smooth progress and future scalability.


# React + Vite Application

This is a React application bootstrapped with Vite.

## Getting Started

Follow the steps below to set up and run the project.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   npm install
   npm run dev



