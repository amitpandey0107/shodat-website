// API credentials for Mailjet service
const apiKey = "557d12bc18266bba2069c62b21a6ae35"; // Your Mailjet API key
const apiSecret = "edbdc4876bba71c7dd427034514a94f6"; // Your Mailjet API secret

/**
 * Generates a common HTML email template.
 * @param {any} formData - The data to be included in the email.
 * @returns {string} The generated HTML template as a string.
 *
 * @author Sanjeev Kumar
 */
export const htmlTemplate = (formData: any) => {
  return `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6;">
        <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://shodat.ai/img/shodatLogo.svg" alt="Shodat Logo" style="max-height: 50px;">
          </div>
          <h2 style="color: #333; text-align: center;">New Meeting Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Name:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${formData.yourname}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${formData.emailaddress}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${formData.phoneNumber}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Company:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${formData.companyName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Message:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${formData.message}</td>
            </tr>
          </table>
        </div>
      </body>
    </html>
  `;
};

/**
 * Sends an email using the Mailjet API.
 * @param {any} formData - The data to be included in the email.
 * @param {string} subject - The subject of the email.
 * @returns {Promise<{ success: boolean; error?: any }>} A promise that resolves with the result of the email sending operation.
 *
 * @author Sanjeev Kumar
 */
export const sendEmail = async (formData: any, subject: string) => {
  // Preparing the email data with the necessary fields for Mailjet
  const emailData = {
    Messages: [
      {
        From: {
          Email: "contact-us@shodat.com",
          Name: `Contact from ${formData.yourname}`, // Sender's name
        },
        To: [
          {
            Email: "support@shodat.freshdesk.com",
            Name: "Shodat Support Team", // Recipient's name
          },
        ],
        ReplyTo: {
          Email: formData.emailaddress, // Reply-to email address
          Name: formData.yourname, // Reply-to name
        },
        Subject: subject, // Email subject
        TextPart: `Name: ${formData.yourname}\nEmail: ${formData.emailaddress}\nPhone: ${formData.phoneNumber}\nCompany: ${formData.companyName}\nMessage: ${formData.message}`, // Plain text part of the email
        HTMLPart: htmlTemplate(formData), // HTML part of the email generated using the htmlTemplate function
      },
    ],
  };

  // Setting up the API endpoint and CORS proxy for Mailjet
  const CORS_PROXY = "https://proxy.cors.sh/";
  const MAILJET_API_URL = `${CORS_PROXY}https://api.mailjet.com/v3.1/send`;

  try {
    // Sending the email via fetch API
    const response = await fetch(MAILJET_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Content type for JSON data
        "x-cors-api-key": "temp_dc5923c5cd8d1e7b77afae40d3eb413f", // Temporary CORS API key
        Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString(
          "base64"
        )}`, // Basic authentication with API key and secret
      },
      body: JSON.stringify(emailData), // Converting email data to JSON
    });

    // Checking if the response indicates success
    if (response.ok) {
      return { success: true }; // Email sent successfully
    } else {
      // If response is not ok, parse error data
      const errorData = await response.json();
      return { success: false, error: errorData }; // Return error details
    }
  } catch (error) {
    // Handling any errors that occur during the fetch
    return { success: false, error }; // Return error
  }
};
