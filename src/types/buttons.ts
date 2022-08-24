export interface IButtonType {
  buttonText: String;
  variant?: String;
  size?: String;
  color?: String;
  disabled?: Boolean;
  onClick?: any;
  href?: String;
  intent: String;
  identifier: String;
}

export interface IButtonPressEvent {
  intent: 'func' | 'link';
  identifier?: string;
  action?: string;
}