var { program } = require('commander');
program
  .option('-f, --foo <i>', 'Integer value for foo', parseInt, 0)
  .option('-b, --bar [j]', 'Integer value for bar', parseInt, 0)
  .option('-z, --baz', 'Boolean argument baz')
  .parse(process.argv);

console.log(program.opts());
