const studentsURL = "https://din-projekt-ref.supabase.co/rest/v1/students?select=id,first_name,last_name,class_name";
const apiKey = "din-publishable-key";

fetch(studentsURL, {
  headers: {
    apikey: apiKey,
  },
})
  .then((res) => res.json())
  .then((data) => console.log("Students JSON:", data))
  .catch((error) => console.error("Fejl:", error));
