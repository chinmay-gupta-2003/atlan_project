const GEMINI_API_KEY = "AIzaSyCgiQPIQezJKz9izgQGOlpEizonB3PjTGw"; // test api key

export const getSQLQueryFromGemini = async (userInput, setLoading) => {
  try {
    setLoading(true);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Return only the SQL query without explanation, markdown, or extra text: "${userInput}"`,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) throw new Error("Failed to fetch SQL query");

    const data = await response.json();
    let sqlQuery =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Error generating SQL";

    sqlQuery = sqlQuery.replace(/```sql|```/g, "").trim();

    return sqlQuery;
  } catch (error) {
    console.error("Error generating SQL:", error);
    return "Error generating SQL";
  } finally {
    setLoading(false);
  }
};
