import { Component, Input } from '@angular/core';
import { AttributeField, AttributeType } from 'src/app/models/attribute';

@Component({
  selector: 'app-attribute-field',
  templateUrl: './attribute-field.component.html',
  styleUrls: ['./attribute-field.component.css'],
})
export class AttributeFieldComponent {
  @Input() renderWithTitle?: boolean;
  @Input() attributeField!: AttributeField;
  @Input() editable = false;

  attributeFieldA = {
    attribute: {
      key: 'enumAttrKey',
      name: 'Enum Attr',
      type: AttributeType.enum,
      expressions: [
        { key: 'valueA', name: 'Value A' },
        { key: 'valueB', name: 'Value B' },
        { key: 'valueC', name: 'Value C' },
      ],
    },
    value: 'valueC',
  };

  attributeFieldB = {
    attribute: {
      key: 'stringAttrKey',
      name: 'String Attr',
      type: AttributeType.string,
    },
    value: 'Hello, I am a string',
  };

  constructor() {
    this.renderWithTitle = true;
    if (this.attributeField === undefined) {
      this.attributeField = {
        attribute: {
          key: 'arbitraryAttr',
          name: 'Arbitrary Attribute',
          type: AttributeType.date,
        },
        value: '2000-02-10',
      };
    }
  }

  public setEditable(editable: boolean): void {
    if (!this.attributeField.attribute.protected) {
      this.editable = editable;
    }
  }

  public getData(): AttributeField {
    return this.attributeField;
  }
}
