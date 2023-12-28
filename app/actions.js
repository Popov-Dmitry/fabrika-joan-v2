"use server";
const Airtable = require("airtable");

export async function getDemoEndpoint() {
  return { endpoint: process.env.DEMO_ENDPOINT };
}

export async function addToWaitlist(prevState, formData) {
  try {
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
      process.env.AIRTABLE_BASE_ID
    );

    await base(process.env.AIRTABLE_TABLE_NAME).create([
      {
        fields: {
          "User email": formData.get("email"),
          Timestamp: Date.now()
        }
      }
    ]);

    return { status: "success", message: "Successfully added to waitlist" };
  } catch (error) {
    return { status: "error", message: error.message };
  }
}
