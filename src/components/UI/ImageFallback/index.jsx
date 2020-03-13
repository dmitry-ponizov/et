import ReactImageFallback from "react-image-fallback";

const UNSAFE_LIFECYCLE_METHOD_NAMES = [
    'componentWillMount',
    'componentWillReceiveProps',
    'componentWillUpdate',
  ]
  
  function renameUnsafeLifecycleMethods (Component) {
    const { prototype } = Component
  
    UNSAFE_LIFECYCLE_METHOD_NAMES.forEach((methodName) => {
      if (!prototype[methodName]) return
  
      Object.defineProperty(prototype, `UNSAFE_${methodName}`, {
        configurable: true,
        value: prototype[methodName],
        writable: true,
      })
      Reflect.deleteProperty(prototype, methodName)
    })
  
    return Component
  }
  
  const ImageFallback = renameUnsafeLifecycleMethods(ReactImageFallback)
  
  export default ImageFallback;