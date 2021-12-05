import princess, { range } from "./princess-client.js";

Deno.test("too big range", async () => {
  try {
    const logs = await princess.rankings.logs({
      eventId: 70,
      type: "eventPoint",
      ranks: range(1, 100),
    });
    console.log(logs);
  } catch (e) {
    console.error(e.message);
    console.error(e.cause.message);
  }
});
