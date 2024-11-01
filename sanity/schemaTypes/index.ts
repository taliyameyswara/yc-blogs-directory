import { type SchemaTypeDefinition } from "sanity";

// import { blockContentType } from "./blockContentType";
// import { categoryType } from "./categoryType";
// import { postType } from "./postType";
// import { authorType } from "./authorType";
import { author } from "./author";
import { startup } from "./startup";

export const schema: { types: SchemaTypeDefinition[] } = {
  // types: [blockContentType, categoryType, postType, authorType, author],
  types: [author, startup],
};
