const template = (variables, { tpl }) => {
  const IconComponentName = variables.componentName.slice(3);
  return tpl`
    ${variables.imports};
    // prettier-ignore
    type Props = { size?: number | string; }

    const ${IconComponentName} = (
      { 
        size = 24, ...props
      }: SVGProps<SVGSVGElement> & Props,
      ref: Ref<SVGSVGElement>
    ) => (
      ${variables.jsx}
    );
    
    const ForwardRef = forwardRef(${IconComponentName});
    export default ForwardRef;
  `;
};

module.exports = template;
