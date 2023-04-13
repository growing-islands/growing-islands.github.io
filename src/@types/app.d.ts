/**
 * アプリケーションにおける特有の型
 */
declare namespace App {
  type DeviceSize = 'sp' | 'pc'

  type FormItemProps = (
    | Form.InputType
    | Form.SelectType
    | Form.TextAreaType
  ) & {
    name: string
    label: string
  }
}
