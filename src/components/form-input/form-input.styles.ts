const styles = {
  kind: {
    primary: {
      inputContainer: `
        w-full
        rounded-lg
        border-2
        py-3.5
        px-4
        outline-none
        text-indigo-700
        focus:shadow-shadow-md
      `,
      input: `
        flex-1
        w-full
        outline-none
        bg-transparent
        placeholder-slate-400
      `,
    },
  },
  border: {
    errorState: 'border-red-500',
    normalState: 'border-indigo-500/100',
  },
  textAlign: {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  },
  theme: {
    dark: `
      bg-slate-900
    `,
    light: `
      bg-white
    `,
  }
};

export default styles;