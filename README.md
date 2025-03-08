# CustomButton Component

A flexible and reusable button component built with Material-UI that supports icons, tooltips, and various customization options.

## Features

- Multiple button variants (text, outlined, contained)
- Color options (success, error, warning, info, primary, secondary)
- Size variations (small, medium, large)
- Icon support with position control (left/right)
- Optional tooltip with customizable position
- Fully customizable styling through MUI's sx prop

## Installation

Make sure you have @mui/material installed in your project:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

## Usage Examples

```
// Basic usage
<CustomButton variant="contained" backgroundColor="primary">
  Click Me
</CustomButton>

// With icon
<CustomButton 
  variant="outlined" 
  backgroundColor="success"
  iconSrc="/path/to/icon.svg"
  iconPosition="left"
>
  Button with Icon
</CustomButton>

// With tooltip
<CustomButton 
  variant="contained"
  backgroundColor="warning"
  enableTooltip
  tooltipText="This is a tooltip"
  tooltipPosition="top"
>
  Hover Me
</CustomButton>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'text'` \| `'outlined'` \| `'contained'` | - | The variant of the button |
| backgroundColor | `'success'` \| `'error'` \| `'warning'` \| `'info'` \| `'primary'` \| `'secondary'` | - | The color of the button |
| size | `'small'` \| `'medium'` \| `'large'` | - | The size of the button |
| iconSrc | `string` | - | URL/path to the icon image |
| iconPosition | `'left'` \| `'right'` | `'left'` | Position of the icon relative to text |
| enableTooltip | `boolean` | `false` | Enable/disable tooltip |
| tooltipText | `string` | `''` | Text to display in tooltip |
| tooltipPosition | `'top'` \| `'bottom'` \| `'left'` \| `'right'` | `'top'` | Position of the tooltip |
| sx | `SxProps` | - | MUI's sx prop for custom styling |
| children | `React.ReactNode` | - | Button content |
| onClick | `() => void` | - | Click handler function |

## Styling

The component can be styled using MUI's sx prop:

```
<CustomButton 
  sx={{
    borderRadius: 2,
    padding: 2,
    '&:hover': {
      backgroundColor: 'secondary.light'
    }
  }}
>
  Styled Button
</CustomButton>
```
