/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
    CREATE TABLE judge (
      team_id VARCHAR(60) NOT NULL,
      name VARCHAR(100) NOT NULL,
      question_1_1 INTEGER DEFAULT 0,
      question_1_2 INTEGER DEFAULT 0,
      question_1_3 INTEGER DEFAULT 0,
      question_1_4 INTEGER DEFAULT 0,
      question_1_5 INTEGER DEFAULT 0,
      question_1_6 INTEGER DEFAULT 0,
      question_1_7 INTEGER DEFAULT 0,
      question_2_1 INTEGER DEFAULT 0,
      question_2_2 INTEGER DEFAULT 0,
      question_2_3 INTEGER DEFAULT 0,
      question_2_4 INTEGER DEFAULT 0,
      question_2_5 INTEGER DEFAULT 0,
      question_2_6 INTEGER DEFAULT 0,
      question_2_7 INTEGER DEFAULT 0,
      question_2_8 INTEGER DEFAULT 0,
      question_3_1 INTEGER DEFAULT 0,
      question_3_2 INTEGER DEFAULT 0,
      question_3_3 INTEGER DEFAULT 0,
      question_3_4 INTEGER DEFAULT 0,
      question_3_5 INTEGER DEFAULT 0,
      question_3_6 INTEGER DEFAULT 0,
      question_3_7 INTEGER DEFAULT 0,
      question_3_8 INTEGER DEFAULT 0,
      question_3_9 INTEGER DEFAULT 0,
      question_3_10 INTEGER DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
};

exports.down = (pgm) => {
  pgm.sql(`
    DROP TABLE judge;
  `);
};
