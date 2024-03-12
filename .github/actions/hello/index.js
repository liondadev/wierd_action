const core = require("@actions/core");
const github = require("@actions/github");

try {
  core.debug("Debug");
  core.warning("Warning");
  core.error("Error");

  const name = core.getInput("who_to_greet");
  console.log(`Hello, ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  core.exportVariable("HELLO_TIME", time);

  core.startGroup("Logging Github Context");
  console.log(JSON.stringify(github.context, null, 2));
  core.endGroup();
} catch (e) {
  core.setFailed(e);
}
