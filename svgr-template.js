const template = (variables, { tpl }) => {
  const IconComponentName = variables.componentName.slice(3);
  return tpl`
    ${variables.imports};

    const ${IconComponentName} = (
      { size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string },
      ref: Ref<SVGSVGElement>
    ) => (
      ${variables.jsx}
    );
    
    const ForwardRef = forwardRef(${IconComponentName});
    export default ForwardRef;
  `;
};

module.exports = template;
