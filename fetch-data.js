// nitialize the Async Function:
async function fetchUserData () {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
// Select the Data Container Element
    const dataContainer = document.getElementById("api-data");
// Fetch Data Using try-catch:
 try {
    const response = await fetch(apiUrl);              // Fetch from API
    const users = await response.json();               // Convert response to JSON

    // Step 5: Clear the Loading Message
    dataContainer.innerHTML = '';

    // Step 6: Create and Append User List
    const userList = document.createElement('ul');     // Create <ul> element

    users.forEach(user => {
      const listItem = document.createElement('li');   // Create <li> for each user
      listItem.textContent = user.name;                // Set the text to user's name
      userList.appendChild(listItem);                  // Append <li> to <ul>
    });

    dataContainer.appendChild(userList);               // Append <ul> to the container

  } catch (error) {
    // Step 7: Error Handling
    dataContainer.innerHTML = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}

// Step 8: Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
