// Attributes

export type Attribute = {
  key: string;
  name: string;
  type: AttributeType;

  expressions?: expression[];
  nullable?: boolean;
  protected?: boolean;
};

export enum AttributeType {
  boolean = "boolean",
  string = "string",
  number = "number",
  enum = "enum",
  date = "date",
  reference = "reference",
  list = "list",
}

export type expression = {
  key: string;
  name: string;
};

// Attribute Operators

export type AttributeOperator = {
  key: string;
  name: string;
  applicableTo: AttributeType[];
}

export const AttributeOperators: AttributeOperator[] = [
  {
    key: 'is',
    name: 'is',
    applicableTo: [
      AttributeType.boolean,
      AttributeType.string,
      AttributeType.number,
      AttributeType.enum,
      AttributeType.date,
      AttributeType.reference,
    ],
  },
  {
    key: 'isNot',
    name: 'is not',
    applicableTo: [
      AttributeType.boolean,
      AttributeType.string,
      AttributeType.number,
      AttributeType.enum,
      AttributeType.date,
      AttributeType.reference,
    ],
  },
  {
    key: 'contains',
    name: 'contains',
    applicableTo: [AttributeType.string, AttributeType.list],
  },
  {
    key: 'containsNot',
    name: 'contains not',
    applicableTo: [AttributeType.string, AttributeType.list],
  },
  {
    key: 'startsWith',
    name: 'starts with',
    applicableTo: [AttributeType.string],
  },
  { key: 'endsWith', name: 'ends with', applicableTo: [AttributeType.string] },
  {
    key: 'isSmaller',
    name: 'is smaller than',
    applicableTo: [AttributeType.number],
  },
  {
    key: 'isSmallerEquals',
    name: 'is smaller or equals',
    applicableTo: [AttributeType.number],
  },
  {
    key: 'isLarger',
    name: 'is larger than',
    applicableTo: [AttributeType.number],
  },
  {
    key: 'isLargerEquals',
    name: 'is larger or equals',
    applicableTo: [AttributeType.number],
  },
  {
    key: 'isBetween',
    name: 'is between',
    applicableTo: [AttributeType.number, AttributeType.date],
  },
  { key: 'isBefore', name: 'is before', applicableTo: [AttributeType.date] },
  {
    key: 'isBeforeOn',
    name: 'is before or on',
    applicableTo: [AttributeType.date],
  },
  { key: 'isAfter', name: 'is after', applicableTo: [AttributeType.date] },
  {
    key: 'isAfterOn',
    name: 'is after or on',
    applicableTo: [AttributeType.date],
  },
];

export function getOperatorsForAttribute(attribute: Attribute) {
  return AttributeOperators.filter((operator) => {
    operator.applicableTo.includes(attribute.type);
  });
}

// Attribute Fields

export type AttributeField = {
  attribute: Attribute;
  value: any;
};

export type AttributeFields = Map<string, AttributeField>;
