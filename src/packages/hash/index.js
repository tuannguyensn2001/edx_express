import * as bcrypt from 'bcrypt';

const hash = {
  generate(text) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(text, salt);
  },
  compare(plainText, hashText) {
    return bcrypt.compareSync(plainText, hashText);
  },
};

export default hash;
