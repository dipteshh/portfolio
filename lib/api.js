export const sendContactForm = async (data) =>
  fetch("/api/submit", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) console.log("Error");
    return res.json();
  });
