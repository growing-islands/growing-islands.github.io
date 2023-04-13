/**
 * フォーム用の型
 */
declare namespace Form {
  type Item =
    | {
        tag: 'input'
        data: Input
      }
    | {
        tag: 'select'
        data: Select
      }
    | {
        tag: 'textarea'
        data: TextArea
      }

  type Input = React.InputHTMLAttributes<HTMLInputElement> & {
    // 除外対象：hidden,search,datetime,reset,button,submit
    type:
      | 'text'
      | 'tel'
      | 'url'
      | 'email'
      | 'password'
      | 'date'
      | 'month'
      | 'week'
      | 'time'
      | 'datetime-local'
      | 'number'
      | 'range'
      | 'color'
      | 'checkbox'
      | 'radio'
      | 'file'
      | 'image'
  }

  type InputType = Input & {
    value?: React.InputHTMLAttributes<HTMLInputElement>['value']
    attributes?: Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'name' | 'label' | 'value'
    >
  }

  type Select = React.SelectHTMLAttributes<HTMLSelectElement> & {
    options?: React.OptionHTMLAttributes<HTMLOptionElement>[]
  }

  type SelectType = Select & {
    type: 'selectbox'
    value?: React.SelectHTMLAttributes<HTMLSelectElement>['value']
    attributes?: Omit<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      'name' | 'value'
    >
    options: (Omit<
      React.OptionHTMLAttributes<HTMLOptionElement>,
      'value' | 'label'
    > &
      Required<
        Pick<React.OptionHTMLAttributes<HTMLOptionElement>, 'value' | 'label'>
      >)[]
  }

  type TextArea = React.TextareaHTMLAttributes<HTMLTextAreaElement>

  type TextAreaType = {
    type: 'textarea'
    value?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['value']
    attributes?: Omit<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      'name' | 'value'
    >
  }
}
