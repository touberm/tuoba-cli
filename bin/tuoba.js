#!/usr/bin/env node

const program = require('commander')  // npm i commander -D

program.version('1.0.0')
    .usage('<command> [项目名称]')
    .command('init <projectName>', '创建新项目')
    .action(async (projectName) => {
      console.log(projectName);
    })
    .parse(process.argv)