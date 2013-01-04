interface qStatic {
	$attach(module: any): void;
	$attachInit(init: qx_lang_Function): void;
	$attachStatic(module: any): void;
	$init(arg: any): q;
	define(name: string, config: any): qx_lang_Function;
	firstUp(str: string): string;
	getDocument(node: qx_dom_Node): qx_xml_Document;
	includeStylesheet(uri: string, doc: qx_xml_Document): void;
	isNode(node: any): bool;
	camelCase(str: string): string;
	set(key: string, value: string, expires: number, path: string, domain: string, secure: bool): void;
	removeAll(arr: any[]): any[];
	$getRegistry(): any;
	ready(callback: qx_lang_Function): void;
	fromArguments(args: any, offset: number): any[];
	startsWith(fullstr: string, substr: string): bool;
	get(key: string): any;
	getWindow(node: qx_dom_Node): qx_ui_window_Window;
	getWindow(node: qx_xml_Document): qx_ui_window_Window;
	getWindow(node: qx_ui_window_Window): qx_ui_window_Window;
	get(value: any): string;
	render(template: string, view: any, partials: any): string;
	$registerEventHook(types: string, registerHook: qx_lang_Function, unregisterHook: qx_lang_Function): void;
	endsWith(fullstr: string, substr: string): bool;
	firstLow(str: string): string;
	isDocument(node: any): bool;
	get(key: string): string;
	create(html: string): q;
	create(html: Element): q;
	$unregisterNormalization(types: string, normalizer: qx_lang_Function): void;
	isElement(element: any): bool;
	equals(arr1: any[], arr2: any[]): bool;
	remove(arr: any[], obj: any): any;
	escapeRegexpChars(str: string): string;
	del(key: string, path: string, domain: string): void;
	max(arr: any[]): number;
	script(url: string): qx_bom_request_Script;
	exclude(arr1: any[], arr2: any[]): any[];
	get(id: string, view: any, partials: any): q;
	$registerNormalization(types: string, normalizer: qx_lang_Function): void;
	cast(object: any, constructor: qx_lang_Function, offset: number): any[];
	hyphenate(str: string): string;
	unique(arr: any[]): any[];
	xhr(url: string, settings: any): qx_bom_request_Xhr;
	add(key: string, value: any): q;
	insertBefore(arr: any[], obj: any, obj2: any): any[];
	min(arr: any[]): number;
	insertAfter(arr: any[], obj: any, obj2: any): any[];
	$getHookRegistry(): any;
	jsonp(url: string, settings: any): qx_bom_request_Jsonp;
	$unregisterEventHook(types: string, registerHook: qx_lang_Function, unregisterHook: qx_lang_Function): void;
	new(selector: string, context: Element): q;
	new(selector: Element, context: Element): q;
	new(selector: any[], context: Element): q;
}
interface q extends qx_type_BaseArray {
	getOffsetParent(): q;
	setTransformStyle(value: string): q;
	setTransformPerspectiveOrigin(value: string): q;
	setStyle(name: string, value: any): q;
	getChildren(selector: string): q;
	unblock(): q;
	getTransformBackfaceVisibility(): bool;
	find(selector: string): q;
	before(args: string): q;
	before(args: Element): q;
	pause(): q;
	getPrevUntil(selector: string): q;
	getClosest(selector: string): q;
	getContentHeight(): number;
	getStyles(names: string): any;
	replaceClass(oldName: string, newName: string): q;
	add(el: Element): q;
	__getElementArray(arg: string): Element;
	__getElementArray(arg: Element): Element;
	getAncestors(filter: string): q;
	has(selector: string): q;
	addClass(name: string): q;
	fadeOut(duration: number): q;
	removeClass(name: string): q;
	stop(): q;
	getScrollLeft(): number;
	focus(): q;
	forEach(fn: qx_lang_Function, ctx: any): q;
	not(selector: string): q;
	not(selector: qx_lang_Function): q;
	getNextUntil(selector: string): q;
	setAttributes(attributes: any): q;
	animateReverse(desc: any, duration: number): q;
	remove(): q;
	getTransformPerspective(): string;
	getAttributes(names: string): any;
	getPrev(selector: string): q;
	addClasses(names: string): q;
	getContentWidth(): number;
	getClass(): string;
	setHtml(html: string): q;
	animate(desc: any, duration: number): q;
	eq(index: number): q;
	append(html: string): q;
	append(html: Element): q;
	getContents(): q;
	slice(begin: number, end: number): q;
	setTransformBackfaceVisibility(value: bool): q;
	blur(): q;
	setValue(value: string): q;
	setValue(value: number): q;
	setValue(value: any[]): q;
	getSiblings(selector: string): q;
	toggleClasses(names: string): q;
	isPlaying(): bool;
	on(type: string, listener: qx_lang_Function, context: any): q;
	filter(selector: string): q;
	filter(selector: qx_lang_Function): q;
	getStyle(name: string): any;
	block(color: string, opacity: number, zIndex: number): q;
	setTransformPerspective(value: number): q;
	removeAttribute(name: string): q;
	getAttribute(name: string): any;
	hasListener(type: string): bool;
	getWidth(): number;
	wrap(wrapper: any): q;
	skew(value: string): q;
	skew(value: any[]): q;
	transform(transforms: any): q;
	getTransformStyle(): string;
	toggleClass(name: string): q;
	insertAfter(target: string): q;
	insertAfter(target: Element): q;
	translate(value: string): q;
	translate(value: any[]): q;
	getTransformOrigin(): string;
	getParents(selector: string): q;
	empty(): q;
	__getAncestors(selector: string, filter: string): q;
	getPrevAll(selector: string): q;
	setTransformOrigin(value: string): q;
	removeClasses(names: string): q;
	setScrollTop(value: number): q;
	setProperty(name: string, value: any): q;
	getPosition(): any;
	getProperty(name: string): any;
	setScrollLeft(value: number): q;
	setAttribute(name: string, value: any): q;
	getValue(): string;
	getTransformPerspectiveOrigin(): string;
	__hierarchyHelper(collection: any[], method: string, selector: string): any[];
	getProperties(names: string): any;
	removeAttributes(attributes: string): q;
	emit(type: string, data: any): q;
	getAncestorsUntil(selector: string, filter: string): q;
	getNext(selector: string): q;
	getScrollTop(): number;
	is(selector: string): bool;
	is(selector: qx_lang_Function): bool;
	getNextAll(selector: string): q;
	getHtml(): string;
	getOffset(): any;
	getHeight(): number;
	setStyles(styles: any): q;
	appendTo(parent: string): q;
	appendTo(parent: Element): q;
	fadeIn(duration: number): q;
	setProperties(properties: any): q;
	play(): q;
	getLast(): q;
	insertBefore(target: string): q;
	insertBefore(target: Element): q;
	clone(events: bool): q;
	after(args: string): q;
	after(args: Element): q;
	scale(value: number): q;
	scale(value: any[]): q;
	getFirst(): q;
	off(type: string, listener: qx_lang_Function, context: any): q;
	hasClass(name: string): bool;
	isEnded(): bool;
	placeTo(target: Element, position: string, offsets: any, modeX: string, modeY: string): q;
	once(type: string, listener: qx_lang_Function, context: any): q;
}
interface qx_application_AbstractGuiStatic {
}
interface qx_application_AbstractGui extends qx_core_Object {
	_createRootWidget(): qx_ui_core_Widget;
	close(val: any): void;
	finalize(): void;
	getRoot(): qx_ui_core_Widget;
	main(): void;
	render(): void;
	terminate(): void;
}
interface qx_application_BasicStatic {
}
interface qx_application_Basic extends qx_core_Object {
	close(): void;
	finalize(): void;
	main(): void;
	terminate(): void;
}
interface qx_application_IApplicationStatic {
}
interface qx_application_IApplication {
	close(): string;
	finalize(): void;
	main(): void;
	terminate(): void;
}
interface qx_application_InlineStatic {
}
interface qx_application_Inline extends qx_application_AbstractGui {
	_createRootWidget(): void;
}
interface qx_application_MobileStatic {
	new(): qx_application_Mobile;
}
interface qx_application_Mobile extends qx_core_Object {
	_createRootWidget(): qx_ui_mobile_core_Widget;
	close(): void;
	finalize(): void;
	getRoot(): qx_ui_mobile_core_Widget;
	main(): void;
	terminate(): void;
}
interface qx_application_NativeStatic {
}
interface qx_application_Native extends qx_core_Object {
	close(): void;
	finalize(): void;
	main(): void;
	terminate(): void;
}
interface qx_application_RoutingStatic {
	new(): qx_application_Routing;
}
interface qx_application_Routing {
	__addToHistory(path: string, customData: any): void;
	__getFromHistory(path: string): any;
	__onChangeHash(evt: qx_event_type_Data): void;
	_executeGet(path: string, customData: any, fromEvent: any): void;
	dispose(): void;
	execute(path: string, customData: any): void;
	executeDelete(path: string, params: any, customData: any): void;
	executeGet(path: string, customData: any): void;
	executePost(path: string, params: any, customData: any): void;
	executePut(path: string, params: any, customData: any): void;
	init(): void;
	on(route: string, handler: qx_lang_Function, scope: any): void;
	on(route: RegExp, handler: qx_lang_Function, scope: any): void;
	onAny(route: string, handler: qx_lang_Function, scope: any): void;
	onAny(route: RegExp, handler: qx_lang_Function, scope: any): void;
	onDelete(route: string, handler: qx_lang_Function, scope: any): void;
	onDelete(route: RegExp, handler: qx_lang_Function, scope: any): void;
	onGet(route: string, handler: qx_lang_Function, scope: any): void;
	onGet(route: RegExp, handler: qx_lang_Function, scope: any): void;
	onPost(route: string, handler: qx_lang_Function, scope: any): void;
	onPost(route: RegExp, handler: qx_lang_Function, scope: any): void;
	onPut(route: string, handler: qx_lang_Function, scope: any): void;
	onPut(route: RegExp, handler: qx_lang_Function, scope: any): void;
	remove(id: string): void;
}
interface qx_application_StandaloneStatic {
}
interface qx_application_Standalone extends qx_application_AbstractGui {
	_createRootWidget(): void;
}
interface qx_bom_BlockerStatic {
	new(): qx_bom_Blocker;
}
interface qx_bom_Blocker extends qx_core_Object {
	__calculateStyles(): any;
	__init(): void;
	__isWholeDocumentBlockTarget(): bool;
	__onResize(e: qx_event_type_Event): void;
	__removeBlocker(): void;
	__resizeBlocker(dimension: any): void;
	__setupBlockerElement(): void;
	__setupIframeElement(): void;
	__styleAndInsertBlocker(styles: any): void;
	block(element: Element): void;
	getBlockerColor(): string;
	getBlockerElement(): Element;
	getBlockerOpacity(): number;
	getBlockerZIndex(): number;
	isBlocked(): bool;
	setBlockerColor(color: string): void;
	setBlockerOpacity(opacity: string): void;
	setBlockerZIndex(zIndex: number): void;
	unblock(): void;
}
interface qx_bom_client_BrowserStatic {
	getDocumentMode(): number;
	getName(): string;
	getQuirksMode(): bool;
	getVersion(): string;
}
interface qx_bom_client_Browser {
}
interface qx_bom_client_CssStatic {
	__isFilterSupported(filterClass: string, initParams: string): bool;
	getAppearance(): string;
	getBorderImage(): string;
	getBorderImageSyntax(): bool;
	getBorderRadius(): string;
	getBoxModel(): string;
	getBoxShadow(): string;
	getBoxSizing(): string;
	getFilterGradient(): bool;
	getFilterTextShadow(): bool;
	getFloat(): string;
	getInlineBlock(): string;
	getLegacyWebkitGradient(): bool;
	getLinearGradient(): string;
	getOpacity(): bool;
	getOverflowXY(): bool;
	getPlaceholder(): bool;
	getRadialGradient(): string;
	getRgba(): bool;
	getTextOverflow(): string;
	getTextShadow(): bool;
	getTranslate3d(): bool;
	getUserModify(): string;
	getUserSelect(): string;
	getUserSelectNone(): string;
}
interface qx_bom_client_Css {
}
interface qx_bom_client_CssAnimationStatic {
	getAnimationEnd(): string;
	getKeyFrames(): string;
	getName(): string;
	getPlayState(): string;
	getSupport(): any;
}
interface qx_bom_client_CssAnimation {
}
interface qx_bom_client_CssTransformStatic {
	get3D(): bool;
	getBackFaceVisibility(): string;
	getName(): string;
	getOrigin(): string;
	getPerspective(): string;
	getPerspectiveOrigin(): string;
	getStyle(): string;
	getSupport(): any;
}
interface qx_bom_client_CssTransform {
}
interface qx_bom_client_DeviceStatic {
	detectDeviceType(userAgentString: string): string;
	detectMobileDevice(userAgentString: string): bool;
	detectTabletDevice(userAgentString: string): bool;
	getName(): string;
	getType(): string;
}
interface qx_bom_client_Device {
}
interface qx_bom_client_EcmaScriptStatic {
	getStackTrace(): string;
}
interface qx_bom_client_EcmaScript {
}
interface qx_bom_client_EngineStatic {
	__isGecko(): bool;
	__isMaple(): bool;
	__isMshtml(): bool;
	__isOpera(): bool;
	__isWebkit(): bool;
	getName(): string;
	getVersion(): string;
}
interface qx_bom_client_Engine {
}
interface qx_bom_client_EventStatic {
	getHashChange(): bool;
	getHelp(): bool;
	getPointer(): bool;
	getTouch(): bool;
}
interface qx_bom_client_Event {
}
interface qx_bom_client_FlashStatic {
	__supportsVersion(input: string, availableVersion: string): bool;
	getExpressInstall(): bool;
	getStrictSecurityModel(): bool;
	getVersion(): string;
	isAvailable(): bool;
}
interface qx_bom_client_Flash {
}
interface qx_bom_client_HtmlStatic {
	getAudio(): bool;
	getAudioAif(): string;
	getAudioAu(): string;
	getAudioMp3(): string;
	getAudioOgg(): string;
	getAudioWav(): string;
	getCanvas(): bool;
	getClassList(): bool;
	getCompareDocumentPosition(): bool;
	getConsole(): bool;
	getContains(): bool;
	getDataset(): bool;
	getDataUrl(callback: qx_lang_Function): void;
	getFileReader(): bool;
	getGeoLocation(): bool;
	getLocalStorage(): bool;
	getNaturalDimensions(): bool;
	getSessionStorage(): bool;
	getSvg(): bool;
	getTextContent(): bool;
	getUserDataStorage(): bool;
	getVideo(): bool;
	getVideoH264(): string;
	getVideoOgg(): string;
	getVideoWebm(): string;
	getVml(): bool;
	getWebWorker(): bool;
	getXPath(): bool;
	getXul(): bool;
}
interface qx_bom_client_Html {
}
interface qx_bom_client_JsonStatic {
	getJson(): bool;
}
interface qx_bom_client_Json {
}
interface qx_bom_client_LocaleStatic {
	__getNavigatorLocale(): string;
	getLocale(): string;
	getVariant(): string;
}
interface qx_bom_client_Locale {
}
interface qx_bom_client_OperatingSystemStatic {
	getName(): string;
	getVersion(): string;
}
interface qx_bom_client_OperatingSystem {
}
interface qx_bom_client_PhoneGapStatic {
	getNotification(): bool;
	getPhoneGap(): bool;
}
interface qx_bom_client_PhoneGap {
}
interface qx_bom_client_PluginStatic {
	__getVersion(activeXName: string, pluginNames: any[]): string;
	__isAvailable(activeXName: string, pluginNames: any[]): bool;
	getActiveX(): bool;
	getDivX(): bool;
	getDivXVersion(): string;
	getGears(): bool;
	getPdf(): bool;
	getPdfVersion(): string;
	getQuicktime(): bool;
	getQuicktimeVersion(): string;
	getSilverlight(): bool;
	getSilverlightVersion(): string;
	getWindowsMedia(): bool;
	getWindowsMediaVersion(): string;
}
interface qx_bom_client_Plugin {
}
interface qx_bom_client_RuntimeStatic {
	getName(): string;
}
interface qx_bom_client_Runtime {
}
interface qx_bom_client_ScrollStatic {
	scrollBarOverlayed(): bool;
}
interface qx_bom_client_Scroll {
}
interface qx_bom_client_StylesheetStatic {
	__getStylesheet(): qx_bom_client_Stylesheet;
	getAddImport(): bool;
	getCreateStyleSheet(): bool;
	getDeleteRule(): bool;
	getInsertRule(): bool;
	getRemoveImport(): bool;
}
interface qx_bom_client_Stylesheet {
}
interface qx_bom_client_TransportStatic {
	getMaxConcurrentRequestCount(): void;
	getSsl(): bool;
	getXmlHttpRequest(): string;
}
interface qx_bom_client_Transport {
}
interface qx_bom_client_XmlStatic {
	getAttributeNS(): bool;
	getCreateElementNS(): bool;
	getCreateNode(): bool;
	getDomParser(): bool;
	getDomProperties(): bool;
	getElementsByTagNameNS(): bool;
	getImplementation(): bool;
	getQualifiedItem(): bool;
	getSelectNodes(): bool;
	getSelectSingleNode(): bool;
}
interface qx_bom_client_Xml {
}
interface qx_bom_CollectionStatic {
	create(input: Element, context: Element): qx_bom_Collection;
	create(input: Element, context: qx_bom_Document): qx_bom_Collection;
	create(input: string, context: Element): qx_bom_Collection;
	create(input: string, context: qx_bom_Document): qx_bom_Collection;
	html(html: string, context: Element): qx_bom_Collection;
	html(html: string, context: qx_bom_Document): qx_bom_Collection;
	id(id: string): qx_bom_Collection;
	query(selector: string, context: Element): qx_bom_Collection;
	query(selector: string, context: qx_bom_Document): qx_bom_Collection;
	new(length_or_items: number): qx_bom_Collection;
	new(length_or_items: any): qx_bom_Collection;
}
interface qx_bom_Collection extends qx_type_BaseArray {
	__afterCallback(rel: Element, child: Element): void;
	__appendCallback(rel: Element, child: Element): void;
	__beforeCallback(rel: Element, child: Element): void;
	__getInnerHelper(elem: Element): Element;
	__hierarchyHelper(method: string, selector: string): qx_bom_Collection;
	__manipulate(args: Element, callback: qx_lang_Function): qx_bom_Collection;
	__manipulate(args: string, callback: qx_lang_Function): qx_bom_Collection;
	__manipulateTo(args: string, original: string): qx_bom_Collection;
	__prependCallback(rel: Element, child: Element): void;
	__pushStack(arr: any[]): qx_bom_Collection;
	add(selector: string, context: Element): qx_bom_Collection;
	addClass(name: string): qx_bom_Collection;
	addListener(type: string, listener: qx_lang_Function, self: any, capture: bool): qx_bom_Collection;
	after(varargs: Element): qx_bom_Collection;
	after(varargs: string): qx_bom_Collection;
	andSelf(): qx_bom_Collection;
	append(varargs: Element): qx_bom_Collection;
	append(varargs: string): qx_bom_Collection;
	appendTo(varargs: string): qx_bom_Collection;
	before(varargs: Element): qx_bom_Collection;
	before(varargs: string): qx_bom_Collection;
	children(selector: string): qx_bom_Collection;
	clone(events: bool): qx_bom_Collection;
	closest(selector: string): qx_bom_Collection;
	contents(): qx_bom_Collection;
	destroy(selector: string): qx_bom_Collection;
	empty(): qx_bom_Collection;
	end(): qx_bom_Collection;
	eq(index: number): qx_bom_Collection;
	filter(selector: string, context: any): qx_bom_Collection;
	filter(selector: qx_lang_Function, context: any): qx_bom_Collection;
	find(selector: string): qx_bom_Collection;
	getAttribute(name: string): any;
	getClass(): string;
	getContentHeight(): number;
	getContentWidth(): number;
	getCss(): string;
	getHeight(): number;
	getOffset(mode: string): any;
	getOffsetParent(): qx_bom_Collection;
	getScrollLeft(): number;
	getScrollTop(): number;
	getStyle(name: string, mode: number): any;
	getValue(): string;
	getWidth(): number;
	hasClass(name: string): bool;
	insertAfter(varargs: string): qx_bom_Collection;
	insertBefore(varargs: string): qx_bom_Collection;
	is(selector: string): bool;
	next(selector: string): qx_bom_Collection;
	nextAll(selector: string): qx_bom_Collection;
	not(selector: string): qx_bom_Collection;
	parent(selector: string): qx_bom_Collection;
	parents(selector: string): qx_bom_Collection;
	prepend(varargs: Element): qx_bom_Collection;
	prepend(varargs: string): qx_bom_Collection;
	prependTo(varargs: string): qx_bom_Collection;
	prev(selector: string): qx_bom_Collection;
	prevAll(selector: string): qx_bom_Collection;
	remove(selector: string): qx_bom_Collection;
	removeClass(name: string): qx_bom_Collection;
	removeListener(type: string, listener: qx_lang_Function, self: any, capture: bool): qx_bom_Collection;
	replaceAll(varargs: string): qx_bom_Collection;
	replaceClass(oldName: string, newName: string): qx_bom_Collection;
	replaceWith(content: Element): qx_bom_Collection;
	replaceWith(content: string): qx_bom_Collection;
	resetAttribute(name: string): qx_bom_Collection;
	resetStyle(name: string): qx_bom_Collection;
	setAttribute(name: string, value: any): qx_bom_Collection;
	setCss(value: string): qx_bom_Collection;
	setScrollLeft(value: number): qx_bom_Collection;
	setScrollTop(value: number): qx_bom_Collection;
	setStyle(name: string, value: any): qx_bom_Collection;
	setStyles(styles: any): qx_bom_Collection;
	setValue(value: string): qx_bom_Collection;
	setValue(value: number): qx_bom_Collection;
	setValue(value: any[]): qx_bom_Collection;
	siblings(selector: string): qx_bom_Collection;
	toggleClass(name: string): qx_bom_Collection;
	wrap(content: string): qx_bom_Collection;
	wrap(content: Element): qx_bom_Collection;
	wrapAll(content: string): qx_bom_Collection;
	wrapAll(content: Element): qx_bom_Collection;
	wrapInner(content: string): qx_bom_Collection;
	wrapInner(content: Element): qx_bom_Collection;
}
interface qx_bom_CookieStatic {
	del(key: string, path: string, domain: string): void;
	get(key: string): any;
	set(key: string, value: string, expires: number, path: string, domain: string, secure: bool): void;
}
interface qx_bom_Cookie {
}
interface qx_bom_DocumentStatic {
	getHeight(win: qx_bom_Window): number;
	getWidth(win: qx_bom_Window): number;
	isQuirksMode(win: qx_bom_Window): bool;
	isStandardMode(win: qx_bom_Window): bool;
}
interface qx_bom_Document {
}
interface qx_bom_element_AnimationStatic {
	animate(el: Element, desc: any, duration: number): qx_bom_element_AnimationHandle;
	animateReverse(el: Element, desc: any, duration: number): qx_bom_element_AnimationHandle;
}
interface qx_bom_element_Animation {
}
interface qx_bom_element_AnimationCssStatic {
	__addKeyFrames(frames: any, reverse: bool): void;
	__keepFrame(el: Element, endFrame: any): void;
	__normalizeDesc(desc: any): void;
	__onAnimationEnd(e: qx_bom_client_Event): void;
	__validateDesc(desc: any): void;
	_animate(el: Element, desc: any, duration: number, reverse: bool): qx_bom_element_AnimationHandle;
	animate(el: Element, desc: any, duration: number): qx_bom_element_AnimationHandle;
	animateReverse(el: Element, desc: any, duration: number): qx_bom_element_AnimationHandle;
}
interface qx_bom_element_AnimationCss {
}
interface qx_bom_element_AnimationHandleStatic {
	new(): qx_bom_element_AnimationHandle;
}
interface qx_bom_element_AnimationHandle extends qx_event_Emitter {
	isEnded(): bool;
	isPlaying(): bool;
	pause(): void;
	play(): void;
	stop(): void;
}
interface qx_bom_element_AnimationJsStatic {
	__applyRepeat(steps: number, repeat: number): number;
	__applyRepeat(steps: number, repeat: string): number;
	__applyStyles(el: Element, styles: any): void;
	__calculateDelta(steps: number, stepTime: number, keys: any[], keyFrames: any, duration: number, timing: string): any[];
	__calculateTiming(func: string, x: number): void;
	__getOrderedKeys(keyFrames: any): any[];
	__getStepTime(duration: number, keys: any[]): number;
	__normalizeKeyFrames(keyFrames: any, el: Element): void;
	_animate(el: Element, desc: any, duration: number, reverse: bool): qx_bom_element_AnimationHandle;
	animate(el: Element, desc: any, duration: number): qx_bom_element_AnimationHandle;
	animateReverse(el: Element, desc: any, duration: number): qx_bom_element_AnimationHandle;
	pause(handle: qx_bom_element_AnimationHandle): qx_bom_element_AnimationHandle;
	play(handle: qx_bom_element_AnimationHandle): qx_bom_element_AnimationHandle;
	stop(handle: qx_bom_element_AnimationHandle): qx_bom_element_AnimationHandle;
}
interface qx_bom_element_AnimationJs {
}
interface qx_bom_element_AttributeStatic {
	compile(map: any): string;
	get(element: Element, name: string): any;
	reset(element: Element, name: string): void;
	set(element: Element, name: string, value: any): void;
}
interface qx_bom_element_Attribute {
}
interface qx_bom_element_BackgroundStatic {
	__computePosition(left: number, top: number): string;
	__computePosition(left: number, top: string): string;
	__computePosition(left: string, top: number): string;
	__computePosition(left: string, top: string): string;
	__isBase64EncodedImage(url: string): bool;
	compile(source: string, repeat: string, left: number, top: number): string;
	compile(source: string, repeat: string, left: number, top: string): string;
	compile(source: string, repeat: string, left: string, top: number): string;
	compile(source: string, repeat: string, left: string, top: string): string;
	getStyles(source: string, repeat: string, left: number, top: number): any;
	getStyles(source: string, repeat: string, left: number, top: string): any;
	getStyles(source: string, repeat: string, left: string, top: number): any;
	getStyles(source: string, repeat: string, left: string, top: string): any;
	set(element: Element, source: string, repeat: string, left: number, top: number): void;
}
interface qx_bom_element_Background {
}
interface qx_bom_element_BoxSizingStatic {
	__usesNativeBorderBox(element: Element): bool;
	compile(value: string): string;
	get(element: Element): string;
	reset(element: Element): void;
	set(element: Element, value: string): void;
}
interface qx_bom_element_BoxSizing {
}
interface qx_bom_element_ClassStatic {
	add(element: Element, name: string): string;
	addClasses(element: Element, classes: string): string;
	get(element: Element): string;
	has(element: Element, name: string): bool;
	remove(element: Element, name: string): string;
	removeClasses(element: Element, classes: string): string;
	replace(element: Element, oldName: string, newName: string): string;
	toggle(element: Element, name: string, toggle: bool): string;
}
interface qx_bom_element_Class {
}
interface qx_bom_element_ClipStatic {
	compile(map: any): string;
	get(element: Element, mode: number): any;
	reset(element: Element): void;
	set(element: Element, map: any): void;
}
interface qx_bom_element_Clip {
}
interface qx_bom_element_CursorStatic {
	compile(cursor: string): string;
	get(element: Element, mode: number): string;
	reset(element: Element): void;
	set(element: Element, value: string): void;
}
interface qx_bom_element_Cursor {
}
interface qx_bom_element_DatasetStatic {
	get(element: Element, name: string): any;
	remove(element: Element, name: string): void;
	set(element: Element, name: string, value: any): void;
}
interface qx_bom_element_Dataset {
}
interface qx_bom_element_DecorationStatic {
	__checkForPotentialClippedImage(source: string): void;
	__getDimension(source: string): any;
	__getStylesForClippedScaleX(style: any, data: any[], height: number): any;
	__getStylesForClippedScaleY(style: any, data: any[], width: number): any;
	__getStylesForSingleRepeat(style: any, source: string, repeat: string): any;
	__normalizeWidthHeight(style: any, width: number, height: number): void;
	__processAlphaFix(style: any, repeat: string, source: string): any;
	__processRepeats(style: any, repeat: string, sourceid: string): any;
	__processScale(style: any, repeat: string, source: string): any;
	__processScaleXScaleY(style: any, repeat: string, sourceid: string): any;
	create(source: string, repeat: string, style: any): void;
	getAttributes(source: string, repeat: string, style: any): string;
	getTagName(repeat: string, source: string): string;
	isAlphaImageLoaderEnabled(): bool;
	update(element: Element, source: string, repeat: string, style: any): void;
}
interface qx_bom_element_Decoration {
}
interface qx_bom_element_DimensionStatic {
	getContentHeight(element: Element): number;
	getContentSize(element: Element): any;
	getContentWidth(element: Element): number;
	getHeight(element: Element): number;
	getSize(element: Element): any;
	getWidth(element: Element): number;
}
interface qx_bom_element_Dimension {
}
interface qx_bom_ElementStatic {
	activate(element: Element): void;
	addListener(element: Element, type: string, listener: qx_lang_Function, self: any, capture: bool): string;
	allowCreationWithMarkup(win: qx_bom_Window): bool;
	blur(element: Element): void;
	capture(element: Element, containerCapture: bool): void;
	clone(element: Element, events: bool): Element;
	create(name: string, attributes: any, win: qx_bom_Window): Element;
	deactivate(element: Element): void;
	empty(element: Element): string;
	focus(element: Element): void;
	getHelperElement(win: qx_bom_Window): Element;
	hasListener(element: Element, type: string, capture: bool): bool;
	matchesSelector(element: Element, selector: string): bool;
	releaseCapture(element: Element): void;
	removeListener(element: Element, type: string, listener: qx_lang_Function, self: any, capture: bool): void;
	removeListenerById(target: any, id: string): void;
}
interface qx_bom_Element {
}
interface qx_bom_element_LocationStatic {
	__computeOffset(elem: Element): any;
	__computeScroll(elem: Element): any;
	__getBodyLocation(body: Element): void;
	__num(elem: Element, style: string): number;
	__style(elem: Element, style: string): string;
	get(elem: Element, mode: string): any;
	getBottom(elem: Element, mode: string): number;
	getLeft(elem: Element, mode: string): number;
	getOffsetParent(element: Element): Element;
	getPosition(elem: Element): any;
	getRelative(elem1: Element, elem2: Element, mode1: string, mode2: string): any;
	getRight(elem: Element, mode: string): number;
	getTop(elem: Element, mode: string): number;
}
interface qx_bom_element_Location {
}
interface qx_bom_element_OpacityStatic {
	compile(opacity: number): string;
	get(element: Element, mode: number): number;
	reset(element: Element): void;
	set(element: Element, opacity: number): void;
}
interface qx_bom_element_Opacity {
}
interface qx_bom_element_OverflowStatic {
	_compile(prop: string, value: string): string;
	compileX(value: string): string;
	compileY(value: string): string;
	getScrollbarWidth(): number;
	getX(element: Element, mode: number): string;
	getY(element: Element, mode: number): string;
	resetX(element: Element): void;
	resetY(element: Element): void;
	setX(element: Element, value: string): void;
	setY(element: Element, value: string): void;
}
interface qx_bom_element_Overflow {
}
interface qx_bom_element_ScrollStatic {
	intoView(element: Element, stop: Element, alignX: string, alignY: string): void;
	intoViewX(element: Element, stop: Element, align: string): void;
	intoViewY(element: Element, stop: Element, align: string): void;
}
interface qx_bom_element_Scroll {
}
interface qx_bom_element_StyleStatic {
	__detectVendorProperties(): void;
	__getStyleName(name: string): string;
	compile(map: any): string;
	get(element: Element, name: string, mode: number, smart: bool): any;
	getCss(element: Element): string;
	isPropertySupported(propertyName: string): bool;
	reset(element: Element, name: string, smart: bool): void;
	set(element: Element, name: string, value: any, smart: bool): void;
	setCss(element: Element, value: string): void;
	setStyles(element: Element, styles: any, smart: bool): void;
}
interface qx_bom_element_Style {
}
interface qx_bom_element_TransformStatic {
	__mapToCss(transforms: any): string;
	getBackfaceVisibility(el: Element): bool;
	getCss(transforms: any): string;
	getOrigin(el: Element): string;
	getPerspective(el: Element): string;
	getPerspectiveOrigin(el: Element): string;
	getStyle(el: Element): string;
	rotate(el: Element, value: string): void;
	rotate(el: Element, value: any[]): void;
	scale(el: Element, value: number): void;
	scale(el: Element, value: any[]): void;
	setBackfaceVisibility(el: Element, value: bool): void;
	setOrigin(el: Element, value: string): void;
	setPerspective(el: Element, value: number): void;
	setPerspectiveOrigin(el: Element, value: string): void;
	setStyle(el: Element, value: string): void;
	skew(el: Element, value: string): void;
	skew(el: Element, value: any[]): void;
	transform(el: Element, transforms: any): void;
	translate(el: Element, value: string): void;
	translate(el: Element, value: any[]): void;
}
interface qx_bom_element_Transform {
}
interface qx_bom_EventStatic {
	addNativeListener(target: any, type: string, listener: qx_lang_Function, useCapture: bool): void;
	fire(target: Element, type: string): bool;
	getRelatedTarget(e: qx_bom_Event): Element;
	getTarget(e: qx_bom_Event): any;
	preventDefault(e: qx_bom_Event): void;
	removeNativeListener(target: any, type: string, listener: qx_lang_Function, useCapture: bool): void;
	stopPropagation(e: qx_bom_Event): void;
	supportsEvent(target: any, type: string): bool;
}
interface qx_bom_Event {
}
interface qx_bom_FileReaderStatic {
	getFile(inputElement: Element, index: number): File;
	getNumFiles(inputElement: Element): number;
	new(): qx_bom_FileReader;
}
interface qx_bom_FileReader extends qx_core_Object {
	_handleAbort(e: any): void;
	_handleError(e: any): void;
	_handleLoad(e: any): void;
	_handleLoadEnd(e: any): void;
	_handleLoadStart(e: any): void;
	_handleProgress(e: any): void;
	readAsBinaryString(fileObj: File): void;
	readAsDataURL(fileObj: File): void;
	readAsText(fileObj: File, encoding: string): void;
}
interface qx_bom_FlashStatic {
	__createSwf(element: Element, attributes: any, params: any, win: qx_bom_Window): void;
	__destroyObjectInIE(element: Element): void;
	__fixOutOfMemoryError(): void;
	__getFlashObject(element: Element): void;
	create(element: Element, attributes: any, variables: any, params: any, win: qx_bom_Window): Element;
	destroy(element: Element, win: any): void;
}
interface qx_bom_Flash {
}
interface qx_bom_FontStatic {
	fromConfig(config: any): qx_bom_Font;
	fromString(str: string): qx_bom_Font;
	getDefaultStyles(): any;
	new(size: string, family: string): qx_bom_Font;
}
interface qx_bom_Font extends qx_core_Object {
	_applyBold(value: bool, old: bool): void;
	_applyColor(value: qx_theme_classic_Color, old: qx_theme_classic_Color): void;
	_applyDecoration(value: any, old: any): void;
	_applyFamily(value: any[], old: any[]): void;
	_applyItalic(value: bool, old: bool): void;
	_applyLineHeight(value: number, old: number): void;
	_applySize(value: number, old: number): void;
	_applyTextShadow(value: string, old: string): void;
	getBold(): any;
	getColor(): any;
	getDecoration(): any;
	getFamily(): any;
	getItalic(): any;
	getLineHeight(): any;
	getSize(): any;
	getStyles(): any;
	getTextShadow(): any;
	initBold(value: any): any;
	initColor(value: any): any;
	initDecoration(value: any): any;
	initFamily(value: any): any;
	initItalic(value: any): any;
	initLineHeight(value: any): any;
	initSize(value: any): any;
	initTextShadow(value: any): any;
	isBold(): bool;
	isItalic(): bool;
	resetBold(): void;
	resetColor(): void;
	resetDecoration(): void;
	resetFamily(): void;
	resetItalic(): void;
	resetLineHeight(): void;
	resetSize(): void;
	resetTextShadow(): void;
	setBold(value: any): any;
	setColor(value: any): any;
	setDecoration(value: any): any;
	setFamily(value: any): any;
	setItalic(value: any): any;
	setLineHeight(value: any): any;
	setSize(value: any): any;
	setTextShadow(value: any): any;
	toggleBold(): bool;
	toggleItalic(): bool;
}
interface qx_bom_GeoLocationStatic {
	getInstance(): qx_bom_GeoLocation;
	new(): qx_bom_GeoLocation;
}
interface qx_bom_GeoLocation extends qx_core_Object {
	_errorHandler(error: qx_lang_Function): void;
	_successHandler(position: qx_lang_Function): void;
	getCurrentPosition(enableHighAccuracy: qx_lang_Function, timeout: qx_lang_Function, maximumAge: qx_lang_Function): void;
	startWatchPosition(enableHighAccuracy: qx_lang_Function, timeout: qx_lang_Function, maximumAge: qx_lang_Function): void;
	stopWatchPosition(): void;
}
interface qx_bom_HashHistoryStatic {
	new(): qx_bom_HashHistory;
}
interface qx_bom_HashHistory extends qx_bom_History {
	__attachListeners(): void;
	__createIframe(): HTMLIFrameElement;
	__detatchListeners(): void;
	__initIframe(): void;
	__onHashChange(): void;
	__waitForIFrame(callback: qx_lang_Function, context: any, retry: number): void;
	_getHash(): string;
	_readState(): string;
	_setHash(value: string): void;
	_writeState(state: string): void;
	addToHistory(state: any, newTitle: any): void;
}
interface qx_bom_HistoryStatic {
	getInstance(): qx_bom_History;
	new(): qx_bom_History;
}
interface qx_bom_History extends qx_core_Object {
	_applyState(value: string, old: string): void;
	_applyTitle(title: string, old: string): void;
	_decode(value: string): string;
	_encode(value: string): string;
	_getHash(): string;
	_onHistoryLoad(state: string): void;
	_readState(): string;
	_setHash(value: string): void;
	_setInitialState(): void;
	_writeState(): void;
	addToHistory(state: string, newTitle: string): void;
	getState(): any;
	getTitle(): any;
	initState(value: any): any;
	initTitle(value: any): any;
	navigateBack(): void;
	navigateForward(): void;
	resetState(): void;
	resetTitle(): void;
	setState(value: any): any;
	setTitle(value: any): any;
}
interface qx_bom_HtmlStatic {
	__convertHtmlString(html: string, context: qx_bom_Document): any[];
	__fixNonDirectlyClosableHelper(all: string, front: string, tag: string): string;
	clean(objs: Element, context: qx_bom_Document, fragment: Element): Element;
	clean(objs: string, context: qx_bom_Document, fragment: Element): Element;
}
interface qx_bom_Html {
}
interface qx_bom_htmlarea_HtmlAreaStatic {
	__formatStyleInformation(styleInformation: any): string;
	__getHtml(root: qx_dom_Node, outputRoot: bool, skipHtmlEncoding: bool, postProcess: Function): string;
	__htmlEncode(s: string): string;
	__needsClosingTag(el: Element): bool;
	__parseStyle(str: string): any;
	isBlockNode(node: qx_dom_Node): bool;
	isHeadlineNode(node: qx_dom_Node): bool;
	isParagraphParent(node: qx_dom_Node): bool;
	new(element: Element, value: string, styleInformation: string, source: string): qx_bom_htmlarea_HtmlArea;
	new(element: Element, value: string, styleInformation: any, source: string): qx_bom_htmlarea_HtmlArea;
}
interface qx_bom_htmlarea_HtmlArea extends qx_core_Object {
	__addFocusListeners(): void;
	__addKeyListeners(): void;
	__addListeners(): void;
	__addMouseListeners(): void;
	__checkForContentAndSetDefaultContent(): void;
	__connectToDomElement(element: Element): void;
	__createRange(sel: qx_bom_Selection): qx_bom_Range;
	__createStackCommandManager(): any;
	__examineCursorContext(): void;
	__executeHotkey(hotkeyIdentifier: string, preventDefault: bool): void;
	__generateDefaultContent(value: string): void;
	__generateDocumentSkeleton(value: string): string;
	__getBodyStyleToExport(): string;
	__getElementStyleAsString(elem: Element): string;
	__getRangeContents(range: Range): string;
	__initDocumentSkeletonParts(): void;
	__insertWebkitLineBreak(): void;
	__isContentAvailable(): void;
	__isFocusNodeAnElement(): bool;
	__isSelectionWithinWordBoundary(): bool;
	__processStackedCommands(): void;
	__renderContent(): void;
	__resetEditorToValidState(): void;
	__resetToDefaultContentAndSelect(): void;
	__setDesignMode(onOrOff: bool): void;
	__startExamineCursorContext(): void;
	__waitForDocumentReady(): void;
	_addIframeLoadListener(): void;
	_cleanupWord(word: string): string;
	_createAndAddIframe(uri: string): void;
	_fetchTextNodes(element: Element): any[];
	_getIframeDocument(): qx_bom_Document;
	_getIframeWindow(): qx_bom_Window;
	_handleBlurEvent(e: any): void;
	_handleContextMenuEvent(e: any): void;
	_handleFocusEvent(e: any): void;
	_handleFocusOutEvent(e: any): void;
	_handleKeyPress(e: any): void;
	_handleKeyUp(e: any): void;
	_handleMouseUpOnBody(e: qx_event_type_Mouse): void;
	_handleMouseUpOnDocument(e: qx_event_type_Mouse): void;
	_loaded(e: any): void;
	_onDocumentIsReady(): void;
	_selectElement(element: Element): void;
	focusContent(): void;
	getCommandManager(): qx_bom_htmlarea_manager_Command;
	getCompleteHtml(): string;
	getComputedValue(skipHtmlEncoding: bool): string;
	getContentBody(): any;
	getContentDocument(): any;
	getContentType(): any;
	getContentWindow(): qx_dom_Node;
	getContextInformation(): any;
	getDefaultFontFamily(): any;
	getDefaultFontSize(): any;
	getEditable(): bool;
	getFocusNode(): Element;
	getHtml(skipHtmlEncoding: bool): string;
	getIframeObject(): HTMLIFrameElement;
	getInsertLinebreakOnCtrlEnter(): any;
	getInsertParagraphOnLinebreak(): any;
	getMessengerMode(): any;
	getNativeContextMenu(): any;
	getPostProcess(): any;
	getRange(): qx_bom_Range;
	getSavedRange(): qx_bom_Range;
	getSelectedHtml(): string;
	getTextNodes(): any[];
	getUseUndoRedo(): any;
	getValue(): string;
	getWords(node: any): string;
	getWordsWithElement(): any;
	initContentType(value: any): any;
	initDefaultFontFamily(value: any): any;
	initDefaultFontSize(value: any): any;
	initInsertLinebreakOnCtrlEnter(value: any): any;
	initInsertParagraphOnLinebreak(value: any): any;
	initMessengerMode(value: any): any;
	initNativeContextMenu(value: any): any;
	initPostProcess(value: any): any;
	initUseUndoRedo(value: any): any;
	insertHorizontalRuler(): bool;
	insertHtml(value: string): bool;
	insertHyperLink(url: string): bool;
	insertImage(attributes: any): bool;
	insertIndent(): bool;
	insertOrderedList(): bool;
	insertOutdent(): bool;
	insertUnorderedList(): bool;
	invalidateEditor(): void;
	isEditable(): bool;
	isInsertLinebreakOnCtrlEnter(): bool;
	isInsertParagraphOnLinebreak(): bool;
	isLoaded(): bool;
	isMessengerMode(): bool;
	isNativeContextMenu(): bool;
	isReady(): bool;
	isUseUndoRedo(): bool;
	redo(): void;
	removeBackgroundColor(): bool;
	removeBackgroundImage(): bool;
	removeFormat(): bool;
	resetContentType(): void;
	resetDefaultFontFamily(): void;
	resetDefaultFontSize(): void;
	resetHtml(): void;
	resetInsertLinebreakOnCtrlEnter(): void;
	resetInsertParagraphOnLinebreak(): void;
	resetMessengerMode(): void;
	resetNativeContextMenu(): void;
	resetPostProcess(): void;
	resetSavedRange(): void;
	resetUseUndoRedo(): void;
	saveRange(): void;
	selectAll(): bool;
	setBackgroundColor(value: string): bool;
	setBackgroundImage(url: string, repeat: string, position: string): bool;
	setBold(): bool;
	setContentType(value: any): any;
	setDefaultFontFamily(value: any): any;
	setDefaultFontSize(value: any): any;
	setEditable(value: bool): void;
	setFontFamily(value: string): bool;
	setFontSize(value: number): bool;
	setInsertLinebreakOnCtrlEnter(value: any): any;
	setInsertParagraphOnLinebreak(value: any): any;
	setItalic(): bool;
	setJustifyCenter(): bool;
	setJustifyFull(): bool;
	setJustifyLeft(): bool;
	setJustifyRight(): bool;
	setMessengerMode(value: any): any;
	setNativeContextMenu(value: any): any;
	setPostProcess(value: any): any;
	setStrikeThrough(): bool;
	setTextBackgroundColor(value: string): bool;
	setTextColor(value: string): bool;
	setUnderline(): bool;
	setUseUndoRedo(value: any): any;
	setValue(value: string): void;
	toggleInsertLinebreakOnCtrlEnter(): bool;
	toggleInsertParagraphOnLinebreak(): bool;
	toggleMessengerMode(): bool;
	toggleNativeContextMenu(): bool;
	toggleUseUndoRedo(): bool;
	undo(): void;
}
interface qx_bom_htmlarea_manager_CommandStatic {
	new(editorInstance: qx_bom_htmlarea_HtmlArea): qx_bom_htmlarea_manager_Command;
}
interface qx_bom_htmlarea_manager_Command extends qx_core_Object {
	__collectStylesOfElementCollection(elementCollection: any[]): any;
	__executeCommand(command: string, ui: bool, value: any): bool;
	__generateHelperNodes(): DocumentFragment;
	__generateHelperString(groupedStyles: any): string;
	__generateImageFormatElements(startNode: qx_dom_Node): qx_dom_Node;
	__getBackgroundColor(parents: any[]): string;
	__getCurrentStylesGrouped(elem: qx_dom_Node): any;
	__getSelectedHtml(): string;
	__getSelectedText(): string;
	__getTargetRange(): qx_bom_Range;
	__getTextDecorations(parents: any[]): any[];
	__hideSuperfluousParagraph(): void;
	__insertHelperParagraph(): void;
	__insertHr(value: string, commandObject: any): bool;
	__insertList(value: string, commandObject: any): bool;
	__manualOutdent(startNode: qx_dom_Node): void;
	__paragraphMissing(): bool;
	__populateCommandList(): void;
	__processCollectedStyles(collectedStyles: any, elementAndParents: any[]): any;
	__setBackgroundColor(value: string, commandObject: any): bool;
	__setBackgroundImage(value: any[], commandObject: any): bool;
	__setBold(value: string, commandObject: any): bool;
	__setFontSize(value: string, commandObject: any): bool;
	__setItalic(value: string, commandObject: any): bool;
	__setStrikeThrough(value: string, commandObject: any): bool;
	__setTextAlign(value: string, commandObject: any): bool;
	__setUnderline(value: string, commandObject: any): bool;
	__syncFormattingAtBeginOfLine(attribute: string, value: string): bool;
	execute(command: string, value: any): bool;
	getCommandObject(commandName: string): any;
	getCurrentStyles(element: Element): any;
	insertParagraphOnLinebreak(): bool;
	setContentDocument(doc: any): void;
}
interface qx_bom_htmlarea_manager_UndoRedoStatic {
	new(commandManager: qx_bom_webfonts_Manager, editorInstance: qx_ui_embed_HtmlArea): qx_bom_htmlarea_manager_UndoRedo;
}
interface qx_bom_htmlarea_manager_UndoRedo extends qx_core_Object {
	__addAdditionalContentUndoStep(): void;
	__addToRedoStack(changeInfo: any): void;
	__addToUndoStack(changeInfo: any): void;
	__checkForNextRedoStep(command: string, value: string): bool;
	__checkForNextUndoStep(command: string, value: string): bool;
	__executeExtraRedoStep(): void;
	__executeExtraUndoStep(): void;
	__fireUndoRedoStateEvent(): void;
	__getFocusedParagraph(): Element;
	__markContentChange(): void;
	__performRedo(): bool;
	__performUndo(): bool;
	__populateCommandList(): void;
	__redoCommand(redoInfo: any): bool;
	__redoContent(redoInfo: any): bool;
	__redoCustom(redoInfo: any): bool;
	__redoInternal(redoInfo: any): bool;
	__undoCommand(undoInfo: any): bool;
	__undoContent(undoInfo: any): bool;
	__undoInternal(undoInfo: any): bool;
	__updateUndoStack(changeInfo: any): void;
	_handleKeyPress(e: any): void;
	addUndoStep(command: string, value: string, commandObject: any): void;
	execute(command: string, value: any): bool;
	getUndoRedoObject(): any;
	insertParagraphOnLinebreak(): bool;
	isRedoPossible(): bool;
	isUndoPossible(): bool;
	redo(): bool;
	registerHandler(actionType: string, undoHandler: Function, redoHandler: Function, context: any): void;
	setContentDocument(doc: qx_bom_Document): void;
	undo(): bool;
}
interface qx_bom_IframeStatic {
	__rememberUrl(iframe: Element): void;
	create(attributes: any, win: qx_bom_Window): Element;
	getBody(iframe: Element): Element;
	getDocument(iframe: Element): qx_bom_Document;
	getWindow(iframe: Element): qx_bom_Window;
	queryCurrentUrl(iframe: Element): string;
	setSource(iframe: Element, source: string): void;
}
interface qx_bom_Iframe {
}
interface qx_bom_IframeHistoryStatic {
	new(): qx_bom_IframeHistory;
}
interface qx_bom_IframeHistory extends qx_bom_History {
	__clearWriteSateTimer(): void;
	__createIframe(): HTMLIFrameElement;
	__initIframe(handler: qx_lang_Function): void;
	__initTimer(): void;
	__isCurrentLocationState(locationState: string): bool;
	__onHashChange(e: qx_event_type_Event): void;
	__storeLocationState(locationState: string): string;
	__waitForIFrame(callback: qx_lang_Function, context: any, retry: number): void;
	_applyState(value: string, old: string): void;
	_onHistoryLoad(state: any): void;
	_readState(): string;
	_setHash(value: any): void;
	_setInitialState(): void;
	_setState(state: string): void;
	_writeState(state: string): void;
	addToHistory(state: any, newTitle: any): void;
}
interface qx_bom_InputStatic {
	create(type: string, attributes: any, win: qx_bom_Window): Element;
	getValue(element: Element): string;
	setValue(element: Element, value: string): void;
	setValue(element: Element, value: number): void;
	setValue(element: Element, value: any[]): void;
	setWrap(element: Element, wrap: bool): void;
}
interface qx_bom_Input {
}
interface qx_bom_LabelStatic {
	__createMeasureElement(html: bool): Element;
	__getStyles(html: bool): any;
	__measureSize(element: Element, styles: any): any;
	__prepareHtml(): Element;
	__prepareText(): Element;
	create(content: string, html: bool, win: qx_bom_Window): Element;
	getHtmlSize(content: string, styles: any, width: number): any;
	getTextSize(text: string, styles: any): any;
	getValue(element: Element): string;
	setValue(element: Element, value: string): void;
}
interface qx_bom_Label {
}
interface qx_bom_LifecycleStatic {
	onReady(callback: qx_lang_Function, context: any): void;
	onShutdown(callback: qx_lang_Function, context: any): void;
}
interface qx_bom_Lifecycle {
}
interface qx_bom_media_AbstractStatic {
	new(media: any): qx_bom_media_Abstract;
}
interface qx_bom_media_Abstract extends qx_core_Object {
	_handleEndedEvent(): void;
	_handleLoadedDataEvent(): void;
	_handleLoadedMetaDataEvent(): void;
	_handlePauseEvent(): void;
	_handlePlayEvent(): void;
	_handleTimeUpdateEvent(): void;
	_handleVolumeChangeEvent(): void;
	canPlayType(type: string): bool;
	getAutoplay(): bool;
	getCurrentTime(): number;
	getDuration(): number;
	getId(): string;
	getMediaObject(): any;
	getPreload(): string;
	getSource(): string;
	getVolume(): number;
	hasControls(): bool;
	hideControls(): void;
	isEnded(): bool;
	isLoop(): bool;
	isMuted(): bool;
	isPaused(): bool;
	pause(): void;
	play(): void;
	setAutoplay(autoplay: bool): void;
	setCurrentTime(value: number): void;
	setId(id: string): void;
	setLoop(value: bool): void;
	setMuted(muted: bool): void;
	setPreload(preload: string): void;
	setSource(source: string): void;
	setVolume(volume: number): void;
	showControls(): void;
}
interface qx_bom_media_AudioStatic {
	new(source: string): qx_bom_media_Audio;
}
interface qx_bom_media_Audio extends qx_bom_media_Abstract {
}
interface qx_bom_media_VideoStatic {
	new(source: string): qx_bom_media_Video;
}
interface qx_bom_media_Video extends qx_bom_media_Abstract {
	getHeight(): number;
	getPoster(): string;
	getVideoHeight(): number;
	getVideoWidth(): number;
	getWidth(): number;
	setHeight(value: number): void;
	setPoster(value: string): void;
	setWidth(value: number): void;
}
interface qx_bom_NativeHistoryStatic {
	new(): qx_bom_NativeHistory;
}
interface qx_bom_NativeHistory extends qx_bom_History {
	__attachListeners(): void;
	__detatchListeners(): void;
	__onHashChange(): void;
	_readState(): string;
}
interface qx_bom_RangeStatic {
	get(node: qx_dom_Node): qx_bom_Range;
}
interface qx_bom_Range {
}
interface qx_bom_request_IRequestStatic {
}
interface qx_bom_request_IRequest {
	abort(): void;
	getAllResponseHeaders(): string;
	getResponseHeader(header: string): string;
	onabort(): void;
	onerror(): void;
	onload(): void;
	onloadend(): void;
	onreadystatechange(): void;
	ontimeout(): void;
	open(method: string, url: string, async: bool): void;
	send(data: string): void;
	send(data: qx_bom_Document): void;
	setRequestHeader(key: string, value: string): void;
}
interface qx_bom_request_JsonpStatic {
	new(): qx_bom_request_Jsonp;
}
interface qx_bom_request_Jsonp extends qx_bom_request_Script {
	__callBase(method: string, args: any[]): void;
	__deleteCustomCallback(): void;
	__generateId(): void;
	_onNativeLoad(): void;
	callback(data: any): void;
	dispose(): void;
	open(method: string, url: string): void;
	setCallbackName(name: string): qx_bom_request_Jsonp;
	setCallbackParam(param: string): qx_bom_request_Jsonp;
	setPrefix(prefix: string): void;
}
interface qx_bom_request_ScriptStatic {
	new(): qx_bom_request_Script;
}
interface qx_bom_request_Script {
	__createScriptElement(): Element;
	__disposeScriptElement(): void;
	__environmentGet(key: string): void;
	__failure(): void;
	__initXhrProperties(): void;
	__supportsErrorHandler(): bool;
	_emit(event: string): void;
	_getScriptElement(): Element;
	_getUrl(): string;
	_onNativeError(): void;
	_onNativeLoad(): void;
	_onTimeout(): void;
	_readyStateChange(readyState: number): void;
	_success(): void;
	abort(): qx_bom_request_Script;
	dispose(): void;
	getAllResponseHeaders(): void;
	getResponseHeader(key: string): void;
	on(name: string, listener: Function, ctx: any): qx_bom_request_Script;
	onabort(): void;
	onerror(): void;
	onload(): void;
	onloadend(): void;
	onreadystatechange(): void;
	ontimeout(): void;
	open(method: string, url: string): void;
	send(): qx_bom_request_Script;
	setDetermineSuccess(check: qx_lang_Function): void;
	setRequestHeader(key: string, value: string): qx_bom_request_Script;
}
interface qx_bom_request_XhrStatic {
	new(): qx_bom_request_Xhr;
}
interface qx_bom_request_Xhr {
	__checkDisposed(): void;
	__initNativeXhr(): void;
	__isNetworkError(): bool;
	__normalizeResponseXML(): void;
	__normalizeStatus(): void;
	__onNativeAbort(): void;
	__onNativeReadyStateChange(): void;
	__onTimeout(): void;
	__onUnload(): void;
	__readyStateChange(): void;
	__readyStateChangeDone(): void;
	__supportsManyRequests(): void;
	_createNativeXhr(): any;
	_emit(event: string): void;
	_getProtocol(): string;
	abort(): qx_bom_request_Xhr;
	dispose(): void;
	getAllResponseHeaders(): string;
	getRequest(): any;
	getResponseHeader(header: string): string;
	on(name: string, listener: Function, ctx: any): qx_bom_request_Xhr;
	onabort(): void;
	onerror(): void;
	onload(): void;
	onloadend(): void;
	onreadystatechange(): void;
	ontimeout(): void;
	open(method: string, url: string, async: bool, user: string, password: string): void;
	send(data: string): qx_bom_request_Xhr;
	send(data: qx_bom_Document): qx_bom_request_Xhr;
	setRequestHeader(key: string, value: string): qx_bom_request_Xhr;
}
interface qx_bom_SelectionStatic {
	__isInputOrTextarea(node: Node): bool;
	get(node: qx_dom_Node): void;
	getEnd(node: qx_dom_Node): number;
	getLength(node: Node): number;
	getStart(node: qx_dom_Node): number;
	set(node: qx_dom_Node, start: number, end: number): bool;
	setAll(node: qx_dom_Node): bool;
}
interface qx_bom_Selection {
}
interface qx_bom_SelectorStatic {
	matches(selector: string, set: any[]): any[];
	query(selector: string, context: Element): any[];
}
interface qx_bom_Selector {
}
interface qx_bom_ShortcutStatic {
	new(shortcut: string): qx_bom_Shortcut;
}
interface qx_bom_Shortcut extends qx_core_Object {
	__matchesKeyEvent(e: qx_event_type_KeySequence): bool;
	__normalizeKeyIdentifier(keyName: string): string;
	__onKeyDown(event: qx_event_type_KeySequence): void;
	__onKeyPress(event: qx_event_type_KeySequence): void;
	_applyEnabled(value: bool, old: bool): void;
	_applyShortcut(value: string, old: string): void;
	execute(target: any): void;
	getAutoRepeat(): any;
	getEnabled(): any;
	getShortcut(): any;
	initAutoRepeat(value: any): any;
	initEnabled(value: any): any;
	initShortcut(value: any): any;
	isAutoRepeat(): bool;
	isEnabled(): bool;
	resetAutoRepeat(): void;
	resetEnabled(): void;
	resetShortcut(): void;
	setAutoRepeat(value: any): any;
	setEnabled(value: any): any;
	setShortcut(value: any): any;
	toggleAutoRepeat(): bool;
	toggleEnabled(): bool;
	toString(): string;
}
interface qx_bom_StorageStatic {
	getLocal(): qx_bom_storage_Web;
	getSession(): qx_bom_storage_Web;
}
interface qx_bom_Storage {
}
interface qx_bom_storage_MemoryStatic {
	getLocal(): qx_bom_storage_Memory;
	getSession(): qx_bom_storage_Memory;
	new(): qx_bom_storage_Memory;
}
interface qx_bom_storage_Memory {
	clear(): void;
	forEach(callback: qx_lang_Function, scope: any): void;
	getItem(key: string): any;
	getKey(index: number): string;
	getLength(): number;
	getStorage(): any;
	removeItem(key: string): void;
	setItem(key: string, value: any): void;
}
interface qx_bom_storage_UserDataStatic {
	getLocal(): qx_bom_storage_UserData;
	getSession(): qx_bom_storage_UserData;
	new(storeName: string): qx_bom_storage_UserData;
}
interface qx_bom_storage_UserData {
	clear(): void;
	forEach(callback: qx_lang_Function, scope: any): void;
	getItem(key: string): any;
	getKey(index: number): string;
	getLength(): number;
	getStorage(): any;
	removeItem(key: string): void;
	setItem(key: string, value: any): void;
}
interface qx_bom_storage_WebStatic {
	getLocal(): qx_bom_storage_Web;
	getSession(): qx_bom_storage_Web;
	new(type: string): qx_bom_storage_Web;
}
interface qx_bom_storage_Web {
	clear(): void;
	forEach(callback: qx_lang_Function, scope: any): void;
	getItem(key: string): any;
	getKey(index: number): string;
	getLength(): number;
	getStorage(): qx_bom_Storage;
	removeItem(key: string): void;
	setItem(key: string, value: any): void;
}
interface qx_bom_StringStatic {
	escape(str: string): string;
	fromText(str: string): string;
	toText(str: string): string;
	unescape(str: string): any;
}
interface qx_bom_String {
}
interface qx_bom_StyleStatic {
	getAppliedStyle(element: Element, propertyName: string, value: string, prefixed: bool): string;
	getPropertyName(propertyName: string): string;
}
interface qx_bom_Style {
}
interface qx_bom_StylesheetStatic {
	addImport(sheet: any, url: string): void;
	addRule(sheet: any, selector: string, entry: string): void;
	createElement(text: any): qx_bom_Stylesheet;
	includeFile(href: string, doc: any): void;
	removeAllImports(sheet: any): void;
	removeAllRules(sheet: any): void;
	removeImport(sheet: any, url: string): void;
	removeRule(sheet: any, selector: string): void;
}
interface qx_bom_Stylesheet {
}
interface qx_bom_TemplateStatic {
	get(id: string, view: any, partials: any): Node;
	render(template: string, view: any, partials: any): string;
	toHtml(template: string, view: any, partials: any): string;
}
interface qx_bom_Template {
}
interface qx_bom_ViewportStatic {
	__getOrientationNormalizer(win: qx_bom_Window): any;
	getHeight(win: qx_bom_Window): number;
	getOrientation(win: qx_bom_Window): number;
	getScrollLeft(win: qx_bom_Window): number;
	getScrollTop(win: qx_bom_Window): number;
	getWidth(win: qx_bom_Window): number;
	isLandscape(win: qx_bom_Window): bool;
	isPortrait(win: qx_bom_Window): bool;
}
interface qx_bom_Viewport {
}
interface qx_bom_VmlStatic {
	create(type: string, attributes: any, win: any): void;
	createImage(source: string, width: number, height: number, xOffset: number, yOffset: number, imageWidth: number, imageHeight: number): Element;
	updateImage(image: Element, source: string, width: number, height: number, xOffset: number, yOffset: number, imageWidth: number, imageHeight: number): void;
}
interface qx_bom_Vml {
}
interface qx_bom_webfonts_ManagerStatic {
	getInstance(): qx_bom_webfonts_Manager;
	new(): qx_bom_webfonts_Manager;
}
interface qx_bom_webfonts_Manager extends qx_core_Object {
	__addRule(rule: string): void;
	__fixCssText(cssText: string): string;
	__flushQueue(): void;
	__getRule(familyName: string, sourcesMap: any): string;
	__getSourceForFormat(format: string, url: string): string;
	__getSourcesMap(sources: string): any;
	__onFontChangeStatus(ev: qx_event_type_Data): void;
	__removeRule(familyName: string): void;
	__require(familyName: string, sources: string, callback: qx_lang_Function, context: any): void;
	getPreferredFormats(): string;
	remove(familyName: string): void;
	removeStyleSheet(): void;
	require(familyName: string, sourcesList: string, callback: qx_lang_Function, context: any): void;
}
interface qx_bom_webfonts_ValidatorStatic {
	removeDefaultHelperElements(): void;
	new(fontFamily: string): qx_bom_webfonts_Validator;
}
interface qx_bom_webfonts_Validator extends qx_core_Object {
	__init(): void;
	__onTimerInterval(): void;
	_applyFontFamily(value: any, old: any): void;
	_getHelperElement(fontFamily: string): Element;
	_getRequestedHelpers(): any;
	_isFontValid(): bool;
	_reset(): void;
	getFontFamily(): any;
	getTimeout(): any;
	initFontFamily(value: any): any;
	initTimeout(value: any): any;
	resetFontFamily(): void;
	resetTimeout(): void;
	setFontFamily(value: any): any;
	setTimeout(value: any): any;
	validate(): void;
}
interface qx_bom_webfonts_WebFontStatic {
}
interface qx_bom_webfonts_WebFont extends qx_bom_Font {
	_applySources(value: any, old: any): void;
	_onWebFontChangeStatus(ev: qx_event_type_Data): void;
	_quoteFontFamily(familyName: string): string;
	getSources(): any;
	initSources(value: any): any;
	resetSources(): void;
	setSources(value: any): any;
}
interface qx_bom_WebWorkerStatic {
	new(src: string): qx_bom_WebWorker;
}
interface qx_bom_WebWorker extends qx_core_Object {
	__initFake(src: string): void;
	__initNative(src: string): void;
	_handleError(e: any): void;
	_handleMessage(e: any): void;
	postMessage(msg: string): void;
}
interface qx_bom_WindowStatic {
	__checkForUnblocking(): void;
	__generateConfigurationString(options: any[], modality: bool): string;
	__isCapableToOpenModalWindows(): bool;
	close(win: qx_bom_Window): void;
	getBlocker(): qx_bom_Blocker;
	isClosed(win: qx_bom_Window): bool;
	moveTo(win: qx_bom_Window, top: number, left: number): void;
	open(url: string, name: string, options: any, modal: bool, useNativeModalDialog: bool, listener: qx_lang_Function, self: any): Window;
	resizeTo(win: qx_bom_Window, width: number, height: number): void;
}
interface qx_bom_Window {
}
interface qx_BootstrapStatic {
	bind(func: qx_lang_Function, self: any, varargs: any): qx_lang_Function;
	debug(object: any, message: any): void;
	define(name: string, config: any): qx_Class;
	error(object: any, message: any): void;
	extendClass(clazz: qx_lang_Function, construct: qx_lang_Function, superClass: qx_lang_Function, name: qx_lang_Function, basename: qx_lang_Function): void;
	firstLow(str: string): string;
	firstUp(str: string): string;
	genericToString(): string;
	getByName(name: string): qx_Class;
	getClass(value: any): string;
	getEnvironmentSetting(key: string): any;
	getKeys(map: any): any[];
	getKeysAsString(map: any): string;
	info(object: any, message: any): void;
	isArray(value: any): bool;
	isFunction(value: any): bool;
	isObject(value: any): bool;
	isString(value: any): bool;
	objectGetLength(map: any): number;
	objectMergeWith(target: any, source: any, overwrite: bool): any;
	setDisplayName(fcn: qx_lang_Function, classname: string, name: string): void;
	setDisplayNames(functionMap: any, classname: string): void;
	setEnvironmentSetting(key: string, value: any): void;
	trace(object: any): void;
	warn(object: any, message: any): void;
}
interface qx_Bootstrap {
}
interface qx_ClassStatic {
	__addEvents(clazz: qx_Class, events: any, patch: bool): void;
	__addInterface(clazz: qx_Class, iface: qx_Interface): void;
	__addMembers(clazz: qx_Class, members: any, patch: bool, base: any, wrap: bool): void;
	__addMixin(clazz: qx_Class, mixin: qx_Mixin, patch: bool): void;
	__addProperties(clazz: qx_Class, properties: any, patch: bool): void;
	__createClass(name: string, type: string, extend: qx_Class, statics: any, construct: qx_lang_Function, destruct: qx_lang_Function, mixins: qx_Mixin): qx_Class;
	__createDefaultConstructor(): qx_lang_Function;
	__createEmptyFunction(): qx_lang_Function;
	__mixinMemberWrapper(member: qx_lang_Function, base: qx_lang_Function): qx_lang_Function;
	__needsConstructorWrapper(base: qx_Class, mixins: qx_Mixin): bool;
	__retrospectWrapConstruct(clazz: qx_Class): void;
	__validateAbstractInterfaces(clazz: qx_Class): void;
	__validateConfig(name: string, config: any): void;
	__validateProperty(clazz: qx_Class, name: string, config: any, patch: bool): void;
	__wrapConstructor(construct: qx_lang_Function, name: string, type: string): void;
	define(name: string, config: any): qx_Class;
	genericToString(): string;
	getByInterface(clazz: qx_Class, iface: qx_Interface): qx_Class;
	getByMixin(clazz: qx_Class, mixin: qx_Mixin): qx_Class;
	getByName(name: string): qx_Class;
	getByProperty(clazz: qx_Class, name: string): qx_Class;
	getEventType(clazz: qx_Class, name: string): string;
	getInstance(): void;
	getInterfaces(clazz: qx_Class): qx_Mixin;
	getMixins(clazz: qx_Class): qx_Mixin;
	getProperties(clazz: qx_Class): string;
	getPropertyDefinition(clazz: qx_Class, name: string): any;
	getTotalNumber(): number;
	hasInterface(clazz: qx_Class, iface: qx_Interface): bool;
	hasMixin(clazz: qx_Class, mixin: qx_Mixin): bool;
	hasOwnInterface(clazz: qx_Class, iface: qx_Interface): bool;
	hasOwnMixin(clazz: qx_Class, mixin: qx_Mixin): bool;
	hasProperty(clazz: qx_Class, name: string): bool;
	implementsInterface(obj: any, iface: qx_Interface): bool;
	include(clazz: qx_Class, mixin: qx_Mixin): void;
	isDefined(name: string): bool;
	isSubClassOf(clazz: qx_Class, superClass: qx_Class): bool;
	patch(clazz: qx_Class, mixin: qx_Mixin): void;
	supportsEvent(clazz: qx_Class, name: string): bool;
	undefine(name: string): void;
}
interface qx_Class {
}
interface qx_core_AspectStatic {
	addAdvice(fcn: qx_lang_Function, position: string, type: string, name: string): void;
	addAdvice(fcn: qx_lang_Function, position: string, type: string, name: RegExp): void;
	wrap(fullName: string, fcn: qx_lang_Function, type: string): qx_lang_Function;
}
interface qx_core_Aspect {
}
interface qx_core_AssertStatic {
	__fail(comment: string, msgvarargs: any): void;
	__isQxInstance(object: any, classname: string): void;
	__toString(value: any): string;
	assert(condition: any, msg: string): void;
	assertArgumentsCount(args: any, minCount: number, maxCount: number, msg: string): void;
	assertArray(value: any, msg: string): void;
	assertArrayEquals(expected: any[], found: any[], msg: string): void;
	assertBoolean(value: any, msg: string): void;
	assertCssColor(expected: string, value: string, msg: string): void;
	assertElement(value: any, msg: string): void;
	assertEquals(expected: any, found: any, msg: string): void;
	assertEventFired(obj: any, event: string, invokeFunc: qx_lang_Function, listenerFunc: qx_lang_Function, msg: string): void;
	assertEventNotFired(obj: any, event: string, invokeFunc: qx_lang_Function, msg: string): void;
	assertException(callback: qx_lang_Function, exception: Error, re: string, msg: string): void;
	assertException(callback: qx_lang_Function, exception: Error, re: RegExp, msg: string): void;
	assertFalse(value: bool, msg: string): void;
	assertFunction(value: any, msg: string): void;
	assertIdentical(expected: any, found: any, msg: string): void;
	assertInArray(value: any, array: any[], msg: string): void;
	assertInRange(value: any, min: number, max: number, msg: string): void;
	assertInstance(value: any, clazz: qx_Class, msg: string): void;
	assertInteger(value: any, msg: string): void;
	assertInterface(value: any, iface: qx_Class, msg: string): void;
	assertJsonEquals(expected: any, found: any, msg: string): void;
	assertKeyInMap(value: any, map: any, msg: string): void;
	assertMap(value: any, msg: string): void;
	assertMatch(str: string, re: string, msg: string): void;
	assertMatch(str: string, re: RegExp, msg: string): void;
	assertNotEquals(expected: any, found: any, msg: string): void;
	assertNotIdentical(expected: any, found: any, msg: string): void;
	assertNotNull(value: any, msg: string): void;
	assertNotUndefined(value: any, msg: string): void;
	assertNull(value: any, msg: string): void;
	assertNumber(value: any, msg: string): void;
	assertObject(value: any, msg: string): void;
	assertPositiveInteger(value: any, msg: string): void;
	assertPositiveNumber(value: any, msg: string): void;
	assertQxObject(value: any, msg: string): void;
	assertQxWidget(value: any, msg: string): void;
	assertRegExp(value: any, msg: string): void;
	assertString(value: any, msg: string): void;
	assertTrue(value: bool, msg: string): void;
	assertType(value: any, type: string, msg: string): void;
	assertUndefined(value: any, msg: string): void;
	fail(msg: string, compact: bool): void;
}
interface qx_core_Assert {
}
interface qx_core_AssertionErrorStatic {
	new(comment: string, failMessage: string): qx_core_AssertionError;
}
interface qx_core_AssertionError extends qx_type_BaseError {
	getStackTrace(): string;
}
interface qx_core_BaseInitStatic {
	__close(e: qx_event_type_Native): void;
	__shutdown(): void;
	getApplication(): qx_core_Object;
	ready(): void;
}
interface qx_core_BaseInit {
}
interface qx_core_EnvironmentStatic {
	__createCheck(value: any): qx_lang_Function;
	__importFromGenerator(): void;
	__importFromUrl(): void;
	__pickFromValues(key: string, values: any): any;
	_getClassNameFromEnvKey(key: string): any[];
	_initDefaultQxValues(): void;
	add(key: string, check: any): void;
	addAsync(key: string, check: qx_lang_Function): void;
	filter(map: any): any[];
	get(key: string): any;
	getAsync(key: string, callback: qx_lang_Function, self: any): void;
	getAsyncChecks(): any;
	getChecks(): any;
	invalidateCacheKey(key: string): void;
	select(key: string, values: any): any;
	selectAsync(key: string, values: any, self: any): void;
}
interface qx_core_Environment {
}
interface qx_core_GlobalErrorStatic {
	new(exc: Error, args: any[]): qx_core_GlobalError;
}
interface qx_core_GlobalError extends Error {
	getArguments(): any;
	getSourceException(): Error;
	toString(): string;
}
interface qx_core_InitStatic {
	__close(e: qx_event_type_Native): void;
	__shutdown(): void;
}
interface qx_core_Init {
}
interface qx_core_MAssertStatic {
}
interface qx_core_MAssert {
	assert(condition: any, msg: string): void;
	assertArgumentsCount(args: any, minCount: number, maxCount: number, msg: string): void;
	assertArray(value: any, msg: string): void;
	assertArrayEquals(expected: any[], found: any[], msg: string): void;
	assertBoolean(value: any, msg: string): void;
	assertCssColor(expected: string, value: string, msg: string): void;
	assertElement(value: any, msg: string): void;
	assertEquals(expected: any, found: any, msg: string): void;
	assertEventFired(obj: any, event: string, invokeFunc: qx_lang_Function, listener: qx_lang_Function, msg: string): void;
	assertEventNotFired(obj: any, event: string, invokeFunc: qx_lang_Function, msg: string): void;
	assertException(callback: qx_lang_Function, exception: Error, re: string, msg: string): void;
	assertException(callback: qx_lang_Function, exception: Error, re: RegExp, msg: string): void;
	assertFalse(value: bool, msg: string): void;
	assertFunction(value: any, msg: string): void;
	assertIdentical(expected: any, found: any, msg: string): void;
	assertInArray(value: any, array: any[], msg: string): void;
	assertInRange(value: any, min: number, max: number, msg: string): void;
	assertInstance(value: any, clazz: qx_Class, msg: string): void;
	assertInteger(value: any, msg: string): void;
	assertInterface(value: any, iface: qx_Class, msg: string): void;
	assertJsonEquals(expected: any, found: any, msg: string): void;
	assertKeyInMap(value: any, map: any, msg: string): void;
	assertMap(value: any, msg: string): void;
	assertMatch(str: string, re: RegExp, msg: string): void;
	assertNotEquals(expected: any, found: any, msg: string): void;
	assertNotIdentical(expected: any, found: any, msg: string): void;
	assertNotNull(value: any, msg: string): void;
	assertNotUndefined(value: any, msg: string): void;
	assertNull(value: any, msg: string): void;
	assertNumber(value: any, msg: string): void;
	assertObject(value: any, msg: string): void;
	assertPositiveInteger(value: any, msg: string): void;
	assertPositiveNumber(value: any, msg: string): void;
	assertQxObject(value: any, msg: string): void;
	assertQxWidget(value: any, msg: string): void;
	assertRegExp(value: any, msg: string): void;
	assertString(value: any, msg: string): void;
	assertTrue(value: bool, msg: string): void;
	assertType(value: any, type: string, msg: string): void;
	assertUndefined(value: any, msg: string): void;
	fail(msg: string, compact: bool): void;
}
interface qx_core_MBindToStatic {
}
interface qx_core_MBindTo {
	bindTo(func: qx_lang_Function, varargs: any): qx_lang_Function;
}
interface qx_core_MEventsStatic {
}
interface qx_core_MEvents {
	addListener(type: string, listener: qx_lang_Function, self: any, capture: bool): string;
	addListenerOnce(type: string, listener: qx_lang_Function, self: any, capture: bool): string;
	dispatchEvent(evt: qx_event_type_Event): bool;
	fireDataEvent(type: string, data: any, oldData: any, cancelable: bool): bool;
	fireEvent(type: string, clazz: qx_Class, args: any[]): bool;
	fireNonBubblingEvent(type: string, clazz: qx_Class, args: any[]): bool;
	hasListener(type: string, capture: bool): bool;
	removeListener(type: string, listener: qx_lang_Function, self: any, capture: bool): bool;
	removeListenerById(id: string): bool;
}
interface qx_core_MLoggingStatic {
}
interface qx_core_MLogging {
	__logMessage(level: string, varargs: any): void;
	debug(varargs: any): void;
	error(varargs: any): void;
	info(varargs: any): void;
	trace(): void;
	warn(varargs: any): void;
}
interface qx_core_MPropertyStatic {
}
interface qx_core_MProperty {
	get(prop: string): any;
	reset(prop: string): void;
	set(data: any, value: any): any;
	set(data: string, value: any): any;
}
interface qx_core_ObjectStatic {
	new(): qx_core_Object;
}
interface qx_core_Object {
	__removePropertyReferences(): void;
	__removePropertyReferencesOld(): void;
	_disposeArray(field: string): void;
	_disposeMap(field: string): void;
	_disposeObjects(varargs: any): void;
	_disposeSingletonObjects(varargs: any): void;
	base(args: any, varags: any): any;
	clone(): qx_core_Object;
	dispose(): void;
	getUserData(key: string): any;
	isDisposed(): bool;
	self(args: any): any;
	setUserData(key: string, value: any): void;
	toHashCode(): number;
	toString(): string;
}
interface qx_core_ObjectRegistryStatic {
	clearHashCode(obj: any): void;
	fromHashCode(hash: string): qx_core_Object;
	getNextHash(): number;
	getPostId(): number;
	getRegistry(): any;
	getStackTraces(): any;
	register(obj: any): void;
	shutdown(): void;
	toHashCode(obj: any): string;
	unregister(obj: any): void;
}
interface qx_core_ObjectRegistry {
}
interface qx_core_PropertyStatic {
	__attachGroupMethods(clazz: qx_Class, config: any, name: string): void;
	__attachPropertyMethods(clazz: qx_Class, config: any, name: string): void;
	__createRefresher(inheritables: string): void;
	__emitCallCallback(code: string, config: any, name: string): void;
	__emitIncomingValueTransformation(code: string, clazz: qx_Class, config: any, name: string): void;
	__emitIncomingValueValidation(code: string, config: any, clazz: qx_Class, name: string, variant: string): void;
	__emitNormalizeUndefinedValues(code: string, config: any, name: string, variant: string): void;
	__emitOldNewComparison(code: string, incomingValue: bool, store: any, variant: string): void;
	__emitRefreshChildrenValue(code: string, name: string): void;
	__emitSetterPreConditions(code: string, config: any, name: string, variant: string, incomingValue: bool): void;
	__emitStoreComputedAndOldValue(code: string, config: any, name: string, variant: string, incomingValue: bool): void;
	__emitStoreInheritedPropertyValue(code: string, config: any, name: string, variant: string): void;
	__emitStoreValue(code: string, name: string, variant: string, incomingValue: bool): void;
	__executeOptimizedRefresh(clazz: qx_Class): void;
	__gatherDependency(): void;
	__getInheritablesOfClass(clazz: qx_Class): string;
	__getStore(variant: string, name: string): any;
	__shouldBeDereferenced(check: any): bool;
	__shouldBeDereferencedOld(check: any): bool;
	__unwrapFunctionFromCode(instance: any, members: any, name: string, variant: string, code: any[], args: any): any;
	attachMethods(clazz: qx_Class, name: string, config: any): void;
	attachRefreshInheritables(clazz: qx_Class): void;
	error(obj: qx_core_Object, id: number, property: string, variant: string, value: any): void;
	executeOptimizedGetter(instance: any, clazz: qx_Class, name: string, variant: string): any;
	executeOptimizedSetter(instance: any, clazz: qx_Class, name: string, variant: string, args: any): any;
}
interface qx_core_Property {
}
interface qx_core_ValidationErrorStatic {
}
interface qx_core_ValidationError extends qx_type_BaseError {
}
interface qx_core_WindowErrorStatic {
	new(failMessage: string, uri: string, lineNumber: number): qx_core_WindowError;
}
interface qx_core_WindowError extends Error {
	getLineNumber(): number;
	getUri(): string;
	toString(): string;
}
interface qx_data_ArrayStatic {
	new(param: any): qx_data_Array;
}
interface qx_data_Array extends qx_core_Object {
	__updateEventPropagation(from: number, to: number): void;
	__updateLength(): void;
	append(array: any[]): void;
	append(array: qx_data_IListData): void;
	concat(array: any[]): qx_data_Array;
	contains(item: any): bool;
	copy(): qx_data_Array;
	equals(array: qx_data_Array): bool;
	forEach(callback: qx_lang_Function, context: any): void;
	getAutoDisposeItems(): any;
	getItem(index: number): any;
	getLength(): number;
	indexOf(item: any): number;
	initAutoDisposeItems(value: any): any;
	insertAfter(after: any, item: any): void;
	insertAt(index: number, item: any): void;
	insertBefore(before: any, item: any): void;
	isAutoDisposeItems(): bool;
	join(connector: string): string;
	max(): number;
	min(): number;
	pop(): any;
	push(varargs: any): number;
	remove(item: any): any;
	removeAll(): any[];
	removeAt(index: number): any;
	resetAutoDisposeItems(): void;
	reverse(): void;
	setAutoDisposeItems(value: any): any;
	setItem(index: number, item: any): void;
	shift(): any;
	slice(from: number, to: number): qx_data_Array;
	sort(func: qx_lang_Function): void;
	splice(startIndex: number, amount: number, varargs: any): qx_data_Array;
	sum(): number;
	toArray(): any[];
	toggleAutoDisposeItems(): bool;
	toString(): string;
	unshift(varargs: any): void;
}
interface qx_data_controller_FormStatic {
	new(model: qx_core_Object, target: qx_ui_form_Form, selfUpdate: bool): qx_data_controller_Form;
	new(model: qx_core_Object, target: any, selfUpdate: bool): qx_data_controller_Form;
	new(model: any, target: qx_ui_form_Form, selfUpdate: bool): qx_data_controller_Form;
	new(model: any, target: any, selfUpdate: bool): qx_data_controller_Form;
}
interface qx_data_controller_Form extends qx_core_Object {
	__isModelSelectable(item: qx_ui_form_IForm): bool;
	__setUpBinding(): void;
	__tearDownBinding(oldTarget: qx_ui_form_Form): void;
	_applyModel(value: qx_core_Object, old: qx_core_Object): void;
	_applyTarget(value: qx_ui_form_Form, old: qx_ui_form_Form): void;
	addBindingOptions(name: string, model2target: any, target2model: any): void;
	createModel(includeBubbleEvents: bool): qx_core_Object;
	getModel(): any;
	getTarget(): any;
	initModel(value: any): any;
	initTarget(value: any): any;
	resetModel(): void;
	resetTarget(): void;
	setModel(value: any): any;
	setTarget(value: any): any;
	updateModel(): void;
}
interface qx_data_controller_IControllerDelegateStatic {
}
interface qx_data_controller_IControllerDelegate {
	bindItem(controller: any, item: qx_ui_core_Widget, id: number): void;
	configureItem(item: any): void;
	createItem(): qx_ui_core_Widget;
	filter(data: any): bool;
}
interface qx_data_controller_ISelectionStatic {
}
interface qx_data_controller_ISelection {
	getSelection(): qx_data_IListData;
	resetSelection(): void;
	setSelection(value: qx_data_IListData): void;
}
interface qx_data_controller_ListStatic {
	new(model: qx_data_Array, target: qx_ui_core_Widget, labelPath: string): qx_data_controller_List;
}
interface qx_data_controller_List extends qx_core_Object {
	__addItem(index: number): void;
	__buildUpLookupTable(): void;
	__changeModel(): void;
	__changeModelLength(): void;
	__lookup(index: number): void;
	__moveChangeListenerAtTheEnd(): void;
	__removeFilter(): void;
	__removeItem(): void;
	__renewBindings(): void;
	_applyDelegate(value: qx_core_Object, old: qx_core_Object): void;
	_applyDelegate(value: qx_core_Object, old: any): void;
	_applyDelegate(value: any, old: qx_core_Object): void;
	_applyDelegate(value: any, old: any): void;
	_applyIconOptions(value: any, old: any): void;
	_applyIconPath(value: string, old: string): void;
	_applyIconPath(value: string, old: any): void;
	_applyIconPath(value: any, old: string): void;
	_applyIconPath(value: any, old: any): void;
	_applyLabelOptions(value: any, old: any): void;
	_applyLabelPath(value: string, old: string): void;
	_applyLabelPath(value: string, old: any): void;
	_applyLabelPath(value: any, old: string): void;
	_applyLabelPath(value: any, old: any): void;
	_applyModel(value: qx_data_Array, old: qx_data_Array): void;
	_applyModel(value: qx_data_Array, old: any): void;
	_applyModel(value: any, old: qx_data_Array): void;
	_applyModel(value: any, old: any): void;
	_applyTarget(value: qx_ui_core_Widget, old: qx_ui_core_Widget): void;
	_applyTarget(value: qx_ui_core_Widget, old: any): void;
	_applyTarget(value: any, old: qx_ui_core_Widget): void;
	_applyTarget(value: any, old: any): void;
	_bindListItem(item: qx_ui_form_ListItem, index: number): void;
	_createItem(): qx_ui_form_ListItem;
	_onBindingSet(index: number, sourceObject: qx_core_Object, targetObject: qx_core_Object): void;
	_removeBindingsFrom(item: number): void;
	_setBindItem(value: any, old: any): void;
	_setConfigureItem(value: any, old: any): void;
	_setCreateItem(value: any, old: any): void;
	_setFilter(value: qx_lang_Function, old: qx_lang_Function): void;
	_setFilter(value: qx_lang_Function, old: any): void;
	_setFilter(value: any, old: qx_lang_Function): void;
	_setFilter(value: any, old: any): void;
	bindDefaultProperties(item: qx_ui_form_ListItem, index: number): void;
	bindProperty(sourcePath: string, targetProperty: string, options: any, targetWidget: qx_ui_core_Widget, index: number): void;
	bindProperty(sourcePath: any, targetProperty: string, options: any, targetWidget: qx_ui_core_Widget, index: number): void;
	bindPropertyReverse(targetPath: string, sourcePath: string, options: any, sourceWidget: qx_ui_core_Widget, index: number): void;
	bindPropertyReverse(targetPath: any, sourcePath: string, options: any, sourceWidget: qx_ui_core_Widget, index: number): void;
	getDelegate(): any;
	getIconOptions(): any;
	getIconPath(): any;
	getLabelOptions(): any;
	getLabelPath(): any;
	getModel(): any;
	getTarget(): any;
	getVisibleModels(): qx_data_Array;
	initDelegate(value: any): any;
	initIconOptions(value: any): any;
	initIconPath(value: any): any;
	initLabelOptions(value: any): any;
	initLabelPath(value: any): any;
	initModel(value: any): any;
	initTarget(value: any): any;
	resetDelegate(): void;
	resetIconOptions(): void;
	resetIconPath(): void;
	resetLabelOptions(): void;
	resetLabelPath(): void;
	resetModel(): void;
	resetTarget(): void;
	setDelegate(value: any): any;
	setIconOptions(value: any): any;
	setIconPath(value: any): any;
	setLabelOptions(value: any): any;
	setLabelPath(value: any): any;
	setModel(value: any): any;
	setTarget(value: any): any;
	syncWidget(): void;
	update(): void;
}
interface qx_data_controller_MSelectionStatic {
	new(): qx_data_controller_MSelection;
}
interface qx_data_controller_MSelection {
	__changeSelectionArray(): void;
	__getSelectableForModel(model: any): void;
	__selectItem(item: qx_core_Object): void;
	__targetSupportsMultiSelection(): bool;
	__targetSupportsSingleSelection(): bool;
	_addChangeTargetListener(value: qx_ui_core_Widget, old: qx_ui_core_Widget): void;
	_addChangeTargetListener(value: qx_ui_core_Widget, old: any): void;
	_addChangeTargetListener(value: any, old: qx_ui_core_Widget): void;
	_addChangeTargetListener(value: any, old: any): void;
	_applySelection(value: qx_data_Array, old: qx_data_Array): void;
	_applySelection(value: qx_data_Array, old: any): void;
	_changeTargetSelection(): void;
	_endSelectionModification(): void;
	_inSelectionModification(): void;
	_startSelectionModification(): void;
	_updateSelection(): void;
	getSelection(): any;
	initSelection(value: any): any;
	resetSelection(): void;
	setSelection(value: any): any;
}
interface qx_data_controller_ObjectStatic {
	new(model: qx_core_Object): qx_data_controller_Object;
}
interface qx_data_controller_Object extends qx_core_Object {
	__addTarget(targetObject: qx_core_Object, targetProperty: string, sourceProperty: string, bidirectional: bool, options: any, reverseOptions: any): void;
	__removeTargetFrom(targetObject: qx_core_Object, targetProperty: string, sourceProperty: string, sourceObject: string): void;
	_applyModel(value: qx_core_Object, old: qx_core_Object): void;
	_applyModel(value: qx_core_Object, old: any): void;
	_applyModel(value: any, old: qx_core_Object): void;
	_applyModel(value: any, old: any): void;
	addTarget(targetObject: qx_core_Object, targetProperty: string, sourceProperty: string, bidirectional: bool, options: any, reverseOptions: any): void;
	getModel(): any;
	initModel(value: any): any;
	removeTarget(targetObject: qx_core_Object, targetProperty: string, sourceProperty: string): void;
	resetModel(): void;
	setModel(value: any): any;
}
interface qx_data_controller_TreeStatic {
	new(model: qx_core_Object, target: qx_ui_tree_Tree, childPath: string, labelPath: string): qx_data_controller_Tree;
}
interface qx_data_controller_Tree extends qx_core_Object {
	__addBinding(modelNode: qx_core_Object, treeNode: qx_ui_tree_TreeFolder): void;
	__buildTree(): void;
	__changeChildrenArray(e: any): void;
	__changeModelChildren(ev: qx_event_type_Event): void;
	__emptyTarget(tree: qx_ui_tree_Tree): void;
	__removeAllFolders(node: qx_ui_tree_core_AbstractTreeItem): void;
	__removeBinding(modelNode: qx_core_Object): void;
	__removeFolder(treeFolder: qx_ui_tree_core_AbstractTreeItem, rootNode: qx_ui_tree_core_AbstractTreeItem): void;
	__renewBindings(): void;
	__updateTreeChildren(rootNode: qx_ui_tree_TreeFolder, modelNode: qx_core_Object): void;
	_applyChildPath(value: string, old: string): void;
	_applyChildPath(value: string, old: any): void;
	_applyChildPath(value: any, old: string): void;
	_applyChildPath(value: any, old: any): void;
	_applyDelegate(value: qx_core_Object, old: qx_core_Object): void;
	_applyDelegate(value: qx_core_Object, old: any): void;
	_applyDelegate(value: any, old: qx_core_Object): void;
	_applyDelegate(value: any, old: any): void;
	_applyIconOptions(value: any, old: any): void;
	_applyIconPath(value: string, old: string): void;
	_applyIconPath(value: string, old: any): void;
	_applyIconPath(value: any, old: string): void;
	_applyIconPath(value: any, old: any): void;
	_applyLabelOptions(value: any, old: any): void;
	_applyLabelPath(value: string, old: string): void;
	_applyLabelPath(value: string, old: any): void;
	_applyLabelPath(value: any, old: string): void;
	_applyLabelPath(value: any, old: any): void;
	_applyModel(value: qx_core_Object, old: qx_core_Object): void;
	_applyModel(value: qx_core_Object, old: any): void;
	_applyModel(value: any, old: qx_core_Object): void;
	_applyModel(value: any, old: any): void;
	_applyTarget(value: qx_ui_tree_Tree, old: qx_ui_tree_Tree): void;
	_applyTarget(value: qx_ui_tree_Tree, old: any): void;
	_applyTarget(value: any, old: qx_ui_tree_Tree): void;
	_applyTarget(value: any, old: any): void;
	_createItem(): qx_ui_tree_core_AbstractTreeItem;
	_setBindItem(value: any, old: any): void;
	_setConfigureItem(value: any, old: any): void;
	_setCreateItem(value: any, old: any): void;
	bindDefaultProperties(treeNode: qx_ui_tree_core_AbstractTreeItem, modelNode: qx_core_Object): void;
	bindProperty(sourcePath: string, targetPath: string, options: any, targetWidget: qx_ui_tree_core_AbstractTreeItem, modelNode: any): void;
	bindProperty(sourcePath: any, targetPath: string, options: any, targetWidget: qx_ui_tree_core_AbstractTreeItem, modelNode: any): void;
	bindPropertyReverse(targetPath: string, sourcePath: string, options: any, sourceWidget: qx_ui_tree_core_AbstractTreeItem, modelNode: any): void;
	bindPropertyReverse(targetPath: any, sourcePath: string, options: any, sourceWidget: qx_ui_tree_core_AbstractTreeItem, modelNode: any): void;
	getChildPath(): any;
	getDelegate(): any;
	getIconOptions(): any;
	getIconPath(): any;
	getLabelOptions(): any;
	getLabelPath(): any;
	getModel(): any;
	getTarget(): any;
	initChildPath(value: any): any;
	initDelegate(value: any): any;
	initIconOptions(value: any): any;
	initIconPath(value: any): any;
	initLabelOptions(value: any): any;
	initLabelPath(value: any): any;
	initModel(value: any): any;
	initTarget(value: any): any;
	resetChildPath(): void;
	resetDelegate(): void;
	resetIconOptions(): void;
	resetIconPath(): void;
	resetLabelOptions(): void;
	resetLabelPath(): void;
	resetModel(): void;
	resetTarget(): void;
	setChildPath(value: any): any;
	setDelegate(value: any): any;
	setIconOptions(value: any): any;
	setIconPath(value: any): any;
	setLabelOptions(value: any): any;
	setLabelPath(value: any): any;
	setModel(value: any): any;
	setTarget(value: any): any;
}
interface qx_data_controller_website_ListStatic {
	new(model: qx_data_IListData, target: Element, templateId: string): qx_data_controller_website_List;
	new(model: any, target: Element, templateId: string): qx_data_controller_website_List;
	new(model: any[], target: Element, templateId: string): qx_data_controller_website_List;
}
interface qx_data_controller_website_List extends qx_core_Object {
	__emptyTarget(): void;
	_applyDelegate(value: any, old: any): void;
	_applyModel(value: any[], old: any[]): void;
	_applyTarget(value: Element, old: Element): void;
	_applyTemplateId(value: any, old: any): void;
	getDelegate(): any;
	getModel(): any;
	getTarget(): any;
	getTemplateId(): any;
	initDelegate(value: any): any;
	initModel(value: any): any;
	initTarget(value: any): any;
	initTemplateId(value: any): any;
	resetDelegate(): void;
	resetModel(): void;
	resetTarget(): void;
	resetTemplateId(): void;
	setDelegate(value: any): any;
	setModel(value: any): any;
	setTarget(value: any): any;
	setTemplateId(value: any): any;
	update(): void;
}
interface qx_data_ConversionStatic {
	toBoolean(value: any): bool;
	toNumber(value: any): number;
	toString(value: any): string;
}
interface qx_data_Conversion {
}
interface qx_data_IListDataStatic {
}
interface qx_data_IListData {
	contains(item: any): bool;
	getItem(index: number): any;
	getLength(): number;
	setItem(index: number, item: any): void;
	splice(startIndex: number, amount: number, varargs: any): qx_data_Array;
	toArray(): any[];
}
interface qx_data_marshal_IMarshalerStatic {
}
interface qx_data_marshal_IMarshaler {
	toClass(data: any, includeBubbleEvents: bool): void;
	toModel(data: any): qx_core_Object;
}
interface qx_data_marshal_IMarshalerDelegateStatic {
}
interface qx_data_marshal_IMarshalerDelegate {
	getModelClass(properties: string): qx_Class;
	getModelMixins(properties: string): any[];
	getModelSuperClass(properties: string): qx_Class;
	getPropertyMapping(property: string, properties: string): string;
	getValidationRule(properties: string, propertyName: string): qx_lang_Function;
}
interface qx_data_marshal_JsonStatic {
	createModel(data: any, includeBubbleEvents: bool): qx_core_Object;
	new(delegate: any): qx_data_marshal_Json;
}
interface qx_data_marshal_Json extends qx_core_Object {
	__createInstance(hash: string): qx_core_Object;
	__disposeItem(item: any): void;
	__disposeProperties(): void;
	__jsonToHash(data: any): string;
	toClass(data: any, includeBubbleEvents: bool): void;
	toModel(data: any): qx_core_Object;
}
interface qx_data_marshal_MEventBubblingStatic {
}
interface qx_data_marshal_MEventBubbling {
	__changePropertyListener(name: string, e: qx_event_type_Data): void;
	_applyEventPropagation(value: any, old: any, name: string): void;
	_registerEventChaining(value: any, old: any, name: string): void;
}
interface qx_data_MBindingStatic {
}
interface qx_data_MBinding {
	bind(sourcePropertyChain: string, targetObject: qx_core_Object, targetProperty: string, options: any): any;
	getBindings(): any[];
	removeAllBindings(): void;
	removeBinding(id: any): void;
}
interface qx_data_SingleValueBindingStatic {
	__bindEventToProperty(sourceObject: qx_core_Object, sourceEvent: string, targetObject: qx_core_Object, targetProperty: string, options: any, arrayIndex: string): any;
	__chainListener(context: any): void;
	__checkForArrayInPropertyChain(propertyNames: any[]): any[];
	__convertValue(value: any, targetObject: qx_core_Object, targetPropertyChain: string, options: any, sourceObject: qx_core_Object): any;
	__defaultConversion(data: any, targetCheck: string): void;
	__getEventForProperty(sourceObject: qx_core_Object, sourceProperty: string): string;
	__getEventNameForProperty(source: qx_core_Object, propertyname: string): string;
	__getTargetFromChain(targetObject: qx_core_Object, targetPropertyChain: string): qx_core_Object;
	__resetTargetValue(targetObject: qx_core_Object, targetPropertyChain: string): void;
	__setInitialValue(value: any, targetObject: qx_core_Object, targetPropertyChain: string, options: any, sourceObject: qx_core_Object): void;
	__setTargetValue(targetObject: qx_core_Object, targetPropertyChain: string, value: any): void;
	__setUpTargetBinding(sourceObject: qx_core_Object, sourcePropertyChain: string, targetObject: qx_core_Object, targetPropertyChain: string, options: any): any;
	__storeBinding(id: any, sourceObject: qx_core_Object, sourceEvent: string, targetObject: qx_core_Object, targetProperty: string): void;
	bind(sourceObject: qx_core_Object, sourcePropertyChain: string, targetObject: qx_core_Object, targetPropertyChain: string, options: any): any;
	getAllBindings(): any;
	getAllBindingsForObject(object: qx_core_Object): any[];
	getValueFromObject(o: qx_core_Object, propertyChain: string): any;
	removeAllBindings(): void;
	removeAllBindingsForObject(object: qx_core_Object): void;
	removeBindingFromObject(sourceObject: qx_core_Object, id: any): void;
	showAllBindingsInLog(): void;
	showBindingInLog(object: qx_core_Object, id: any): void;
	updateTarget(sourceObject: qx_core_Object, sourcePropertyChain: string, targetObject: qx_core_Object, targetPropertyChain: string, options: any): void;
}
interface qx_data_SingleValueBinding {
}
interface qx_data_store_IStoreDelegateStatic {
}
interface qx_data_store_IStoreDelegate {
	configureRequest(request: any): void;
	manipulateData(data: any): any;
}
interface qx_data_store_JsonStatic {
	new(url: string, delegate: any): qx_data_store_Json;
	new(url: any, delegate: any): qx_data_store_Json;
}
interface qx_data_store_Json extends qx_core_Object {
	_applyUrl(value: string, old: string): void;
	_createRequest(url: string): void;
	_getRequest(): any;
	_onChangePhase(ev: qx_event_type_Data): void;
	_onFail(ev: qx_event_type_Event): void;
	_onSuccess(ev: qx_event_type_Event): void;
	_setRequest(request: any): void;
	getModel(): any;
	getState(): any;
	getUrl(): any;
	initModel(value: any): any;
	initState(value: any): any;
	initUrl(value: any): any;
	reload(): void;
	resetModel(): void;
	resetState(): void;
	resetUrl(): void;
	setModel(value: any): any;
	setState(value: any): any;
	setUrl(value: any): any;
}
interface qx_data_store_JsonpStatic {
	new(url: string, delegate: any, callbackParam: string): qx_data_store_Jsonp;
}
interface qx_data_store_Jsonp extends qx_data_store_Json {
	_createRequest(url: any): void;
	getCallbackName(): any;
	getCallbackParam(): any;
	initCallbackName(value: any): any;
	initCallbackParam(value: any): any;
	resetCallbackName(): void;
	resetCallbackParam(): void;
	setCallbackName(value: any): any;
	setCallbackParam(value: any): any;
}
interface qx_data_store_OfflineStatic {
	new(key: string, storage: string): qx_data_store_Offline;
}
interface qx_data_store_Offline extends qx_core_Object {
	__storeModel(): void;
	_applyModel(value: any, old: any): void;
	_initializeModel(): void;
	_setModel(data: any): void;
	getKey(): string;
	getModel(): any;
	initModel(value: any): any;
	resetModel(): void;
	setModel(value: any): any;
}
interface qx_data_store_RestStatic {
	new(resource: qx_io_rest_Resource, actionName: string, delegate: any): qx_data_store_Rest;
}
interface qx_data_store_Rest extends qx_core_Object {
	__addListeners(): void;
	__configureRequest(): void;
	__onActionSuccess(e: qx_event_type_Rest): void;
	getActionName(): any;
	getModel(): any;
	getResource(): any;
	initActionName(value: any): any;
	initModel(value: any): any;
	initResource(value: any): any;
	resetActionName(): void;
	resetModel(): void;
	resetResource(): void;
	setActionName(value: any): any;
	setModel(value: any): any;
	setResource(value: any): any;
}
interface qx_data_store_YqlStatic {
	new(query: string, delegate: any, https: bool): qx_data_store_Yql;
}
interface qx_data_store_Yql extends qx_data_store_Jsonp {
}
interface qx_dev_DebugStatic {
	debugObject(obj: any, initialMessage: any, maxLevel: number): void;
	debugObjectToString(obj: any, initialMessage: any, maxLevel: number, bHtml: bool): string;
	debugProperties(model: qx_core_Object, maxLevel: number, html: bool, indent: number): string;
	getFunctionName(func: qx_lang_Function, functionType: string): string;
	startDisposeProfiling(): void;
	stopDisposeProfiling(checkFunction: qx_lang_Function): any;
}
interface qx_dev_Debug {
}
interface qx_dev_ObjectSummaryStatic {
	getInfo(): string;
	getNewObjects(): string;
}
interface qx_dev_ObjectSummary {
}
interface qx_dev_ProfileStatic {
	__calibrate(count: number): number;
	__calibrateHelper(): void;
	getProfileData(): any;
	normalizeProfileData(): void;
	profileAfter(fullName: string, fcn: qx_lang_Function, type: string, args: any, returnValue: any): void;
	profileBefore(fullName: string, fcn: qx_lang_Function, type: string, args: any): void;
	showResults(maxLength: number): void;
	start(): void;
	stop(): void;
}
interface qx_dev_Profile {
}
interface qx_dev_StackTraceStatic {
	__fileNameToClassName(fileName: string): string;
	__fileNameToClassNameDefault(fileName: string): string;
	__formatStackTrace(trace: string): string;
	getStackTrace(): string;
	getStackTraceFromCaller(args: any): string;
	getStackTraceFromError(error: Error): string;
}
interface qx_dev_StackTrace {
}
interface qx_dev_TokenizerStatic {
	javaScriptToHtml(javaScriptText: string, forPreTag: bool): string;
	tokenizeJavaScript(javaScriptText: string): any;
}
interface qx_dev_Tokenizer extends qx_core_Object {
}
interface qx_dev_unit_AbstractTestSuiteStatic {
	new(): qx_dev_unit_AbstractTestSuite;
}
interface qx_dev_unit_AbstractTestSuite extends qx_core_Object {
	addFail(functionName: string, message: string): void;
	addTestFunction(name: string, fcn: qx_lang_Function): void;
	addTestMethod(testCase: qx_dev_unit_TestCase, functionName: string): void;
	getTestMethods(): qx_lang_Function;
	run(testResult: qx_dev_unit_TestResult): void;
}
interface qx_dev_unit_AsyncWrapperStatic {
	new(delay: number, deferredFunction: qx_lang_Function, context: any): qx_dev_unit_AsyncWrapper;
}
interface qx_dev_unit_AsyncWrapper extends qx_core_Object {
	getContext(): any;
	getDeferredFunction(): any;
	getDelay(): any;
	initContext(value: any): any;
	initDeferredFunction(value: any): any;
	initDelay(value: any): any;
	resetContext(): void;
	resetDeferredFunction(): void;
	resetDelay(): void;
	setContext(value: any): any;
	setDeferredFunction(value: any): any;
	setDelay(value: any): any;
}
interface qx_dev_unit_JsUnitTestResultStatic {
	new(): qx_dev_unit_JsUnitTestResult;
}
interface qx_dev_unit_JsUnitTestResult extends qx_dev_unit_TestResult {
	exportToJsUnit(): void;
	run(test: qx_dev_unit_TestFunction, testFunction: qx_lang_Function): void;
}
interface qx_dev_unit_MeasurementResultStatic {
	new(message: string, iterations: number, ownTime: number, renderTime: number): qx_dev_unit_MeasurementResult;
}
interface qx_dev_unit_MeasurementResult {
	toString(): string;
}
interface qx_dev_unit_MMeasureStatic {
}
interface qx_dev_unit_MMeasure {
	log(msg: string, iterations: number, ownTime: number, renderTime: number): void;
	measure(msg: string, callback: qx_lang_Function, finalize: qx_lang_Function, displayIterations: number): void;
	measureRepeated(msg: string, callback: qx_lang_Function, finalize: qx_lang_Function, iterations: number, displayIterations: number): void;
}
interface qx_dev_unit_MMockStatic {
	new(): qx_dev_unit_MMock;
}
interface qx_dev_unit_MMock {
	__deepClone(obj: any): any;
	__getOwnProperties(object: any, targetClazz: any): any[];
	__getSinon(): any;
	__stubProperty(object: any, prop: string): void;
	deepStub(object: any): any;
	getRequests(): any[];
	getSandbox(): any;
	getServer(): any;
	injectStub(object: any, property: string, customStub: any): any;
	mock(object: any): qx_lang_Function;
	revealMock(object: any, property: string, customObject: any): Mock;
	shallowStub(object: any, targetClazz: any): any;
	spy(function_or_object: qx_lang_Function, method: string): qx_lang_Function;
	spy(function_or_object: any, method: string): qx_lang_Function;
	stub(object: any, method: string): qx_lang_Function;
	useFakeServer(): Server;
	useFakeXMLHttpRequest(): XMLHttpRequest;
}
interface qx_dev_unit_MRequirementsStatic {
}
interface qx_dev_unit_MRequirements {
	hasChrome(): bool;
	hasFirefox(): bool;
	hasGecko(): bool;
	hasGuiApp(): bool;
	hasHttp(): bool;
	hasIe(): bool;
	hasInlineApp(): bool;
	hasMshtml(): bool;
	hasNativeApp(): bool;
	hasNoSelenium(): bool;
	hasOpera(): bool;
	hasPhp(): bool;
	hasWebkit(): bool;
	require(featureList: string): void;
}
interface qx_dev_unit_MTestLoaderStatic {
}
interface qx_dev_unit_MTestLoader {
	_getClassNameFromUrl(): string;
	getSuite(): any;
	getTestDescriptions(): string;
	initSuite(value: any): any;
	resetSuite(): void;
	runJsUnit(): void;
	runStandAlone(): void;
	runTests(testResult: qx_dev_unit_TestResult, className: string, methodName: string): void;
	runTestsFromNamespace(testResult: qx_dev_unit_TestResult, namespaceName: string): void;
	setSuite(value: any): any;
	setTestNamespace(namespace: any): void;
}
interface qx_dev_unit_RequirementErrorStatic {
	new(requirement: string, message: string): qx_dev_unit_RequirementError;
}
interface qx_dev_unit_RequirementError extends Error {
	getRequirement(): string;
	toString(): string;
}
interface qx_dev_unit_SinonStatic {
	getSinon(): any;
}
interface qx_dev_unit_Sinon {
}
interface qx_dev_unit_TestCaseStatic {
}
interface qx_dev_unit_TestCase extends qx_core_Object {
	getTestFunc(): any;
	getTestResult(): any;
	initTestFunc(value: any): any;
	initTestResult(value: any): any;
	isDebugOn(): bool;
	resetTestFunc(): void;
	resetTestResult(): void;
	resume(deferredFunction: qx_lang_Function, self: any): void;
	setTestFunc(value: any): any;
	setTestResult(value: any): any;
	skip(message: string): void;
	skip(message: any): void;
	wait(delay: number, deferredFunction: qx_lang_Function, context: any): void;
}
interface qx_dev_unit_TestClassStatic {
	new(clazz: qx_Class): qx_dev_unit_TestClass;
}
interface qx_dev_unit_TestClass extends qx_dev_unit_AbstractTestSuite {
	getName(): any;
	initName(value: any): any;
	resetName(): void;
	setName(value: any): any;
}
interface qx_dev_unit_TestFunctionStatic {
	new(testCase: qx_dev_unit_TestCase, methodName: string, testFunction: qx_lang_Function): qx_dev_unit_TestFunction;
}
interface qx_dev_unit_TestFunction extends qx_core_Object {
	getClassName(): any;
	getFullName(): string;
	getName(): any;
	getTestClass(): any;
	getTestFunction(): any;
	initClassName(value: any): any;
	initName(value: any): any;
	initTestClass(value: any): any;
	initTestFunction(value: any): any;
	resetClassName(): void;
	resetName(): void;
	resetTestClass(): void;
	resetTestFunction(): void;
	run(testResult: qx_dev_unit_TestResult): void;
	setClassName(value: any): any;
	setName(value: any): any;
	setTestClass(value: any): any;
	setTestFunction(value: any): any;
	setUp(): void;
	tearDown(): void;
}
interface qx_dev_unit_TestLoaderStatic {
}
interface qx_dev_unit_TestLoader extends qx_application_Standalone {
	main(): void;
}
interface qx_dev_unit_TestLoaderBasicStatic {
	new(nameSpace: string): qx_dev_unit_TestLoaderBasic;
}
interface qx_dev_unit_TestLoaderBasic extends qx_core_Object {
}
interface qx_dev_unit_TestLoaderInlineStatic {
}
interface qx_dev_unit_TestLoaderInline extends qx_application_Inline {
	main(): void;
}
interface qx_dev_unit_TestLoaderNativeStatic {
}
interface qx_dev_unit_TestLoaderNative extends qx_application_Native {
	main(): void;
}
interface qx_dev_unit_TestResultStatic {
	run(testResult: qx_dev_unit_TestResult, test: qx_dev_unit_TestSuite, testFunction: any): void;
	run(testResult: qx_dev_unit_TestResult, test: qx_dev_unit_TestFunction, testFunction: any): void;
}
interface qx_dev_unit_TestResult extends qx_core_Object {
	__removeListeners(testFunction: qx_dev_unit_TestFunction): void;
	__wrapAddListener(testFunction: qx_dev_unit_TestFunction): void;
	_createError(eventName: string, exceptions: Error, test: qx_dev_unit_TestSuite): void;
	_createError(eventName: string, exceptions: Error, test: qx_dev_unit_TestFunction): void;
	run(test: qx_dev_unit_TestSuite, testFunction: qx_lang_Function, self: any, resume: bool): void;
	run(test: qx_dev_unit_TestFunction, testFunction: qx_lang_Function, self: any, resume: bool): void;
	tearDown(test: any): void;
}
interface qx_dev_unit_TestSuiteStatic {
	new(testClassOrNamespace: any): qx_dev_unit_TestSuite;
}
interface qx_dev_unit_TestSuite extends qx_dev_unit_AbstractTestSuite {
	add(testClassOrNamespace: any): void;
	addTestClass(clazz: qx_Class): void;
	addTestNamespace(namespace: any): void;
	getTestClasses(): qx_Class;
}
interface qx_dom_ElementStatic {
	_allowCreationWithMarkup(win: qx_bom_Window): bool;
	create(name: string, attributes: any, win: qx_bom_Window): Element;
	empty(element: Element): string;
	getHelperElement(win: qx_bom_Window): Element;
	getParentElement(element: Element): Element;
	hasChild(parent: Element, child: qx_dom_Node): bool;
	hasChildElements(element: Element): bool;
	hasChildren(element: Element): bool;
	insertAfter(node: qx_dom_Node, ref: qx_dom_Node): bool;
	insertAt(node: qx_dom_Node, parent: Element, index: number): bool;
	insertBefore(node: qx_dom_Node, ref: qx_dom_Node): bool;
	insertBegin(node: qx_dom_Node, parent: Element): bool;
	insertEnd(node: qx_dom_Node, parent: Element): bool;
	isInDom(element: Element, win: qx_bom_Window): bool;
	remove(node: qx_dom_Node): bool;
	removeChild(node: qx_dom_Node, parent: Element): bool;
	removeChildAt(index: number, parent: Element): bool;
	replaceAt(newNode: qx_dom_Node, index: number, parent: Element): bool;
	replaceChild(newNode: qx_dom_Node, oldNode: qx_dom_Node): bool;
}
interface qx_dom_Element {
}
interface qx_dom_HierarchyStatic {
	_recursivelyCollect(element: Element, property: string): any[];
	cleanWhitespace(element: Element): void;
	contains(element: Element, target: qx_dom_Node): bool;
	getAncestors(element: Element): any[];
	getChildElements(element: Element): any[];
	getCommonParent(element1: Element, element2: Element): Element;
	getDescendants(element: Element): any[];
	getElementIndex(element: Element): number;
	getFirstDescendant(element: Element): Element;
	getLastDescendant(element: Element): Element;
	getNextElementSibling(element: Element): Element;
	getNextSiblings(element: Element): any[];
	getNodeIndex(node: qx_dom_Node): number;
	getPreviousElementSibling(element: Element): Element;
	getPreviousSiblings(element: Element): any[];
	getSiblings(element: any): any[];
	isDescendantOf(element: Element, ancestor: Element): bool;
	isEmpty(element: Element): bool;
	isRendered(element: Element): bool;
}
interface qx_dom_Hierarchy {
}
interface qx_dom_NodeStatic {
	getBodyElement(node: qx_dom_Node): Element;
	getBodyElement(node: qx_bom_Document): Element;
	getBodyElement(node: qx_bom_Window): Element;
	getDocument(node: qx_dom_Node): qx_bom_Document;
	getDocument(node: qx_bom_Document): qx_bom_Document;
	getDocument(node: qx_bom_Window): qx_bom_Document;
	getDocumentElement(node: qx_dom_Node): Element;
	getDocumentElement(node: qx_bom_Document): Element;
	getDocumentElement(node: qx_bom_Window): Element;
	getName(node: qx_dom_Node): string;
	getText(node: qx_dom_Node): string;
	getWindow(node: qx_dom_Node): qx_bom_Window;
	getWindow(node: qx_bom_Document): qx_bom_Window;
	getWindow(node: qx_bom_Window): qx_bom_Window;
	isBlockNode(node: qx_dom_Node): bool;
	isDocument(node: qx_dom_Node): bool;
	isElement(node: qx_dom_Node): bool;
	isNode(node: qx_dom_Node): bool;
	isNodeName(node: qx_dom_Node, nodeName: string): bool;
	isText(node: qx_dom_Node): bool;
	isWindow(obj: any): bool;
}
interface qx_dom_Node {
}
interface qx_event_AcceleratingTimerStatic {
	new(): qx_event_AcceleratingTimer;
}
interface qx_event_AcceleratingTimer extends qx_core_Object {
	_onInterval(): void;
	getDecrease(): any;
	getFirstInterval(): any;
	getInterval(): any;
	getMinimum(): any;
	initDecrease(value: any): any;
	initFirstInterval(value: any): any;
	initInterval(value: any): any;
	initMinimum(value: any): any;
	resetDecrease(): void;
	resetFirstInterval(): void;
	resetInterval(): void;
	resetMinimum(): void;
	setDecrease(value: any): any;
	setFirstInterval(value: any): any;
	setInterval(value: any): any;
	setMinimum(value: any): any;
	start(): void;
	stop(): void;
}
interface qx_event_dispatch_AbstractBubblingStatic {
	new(manager: qx_event_Manager): qx_event_dispatch_AbstractBubbling;
}
interface qx_event_dispatch_AbstractBubbling extends qx_core_Object {
	_getParent(target: any): any;
	canDispatchEvent(target: any, event: any, type: any): void;
	dispatchEvent(target: any, event: any, type: any): void;
}
interface qx_event_dispatch_DirectStatic {
	new(manager: qx_event_Manager): qx_event_dispatch_Direct;
}
interface qx_event_dispatch_Direct extends qx_core_Object {
	canDispatchEvent(target: any, event: any, type: any): void;
	dispatchEvent(target: any, event: any, type: any): void;
}
interface qx_event_dispatch_DomBubblingStatic {
}
interface qx_event_dispatch_DomBubbling extends qx_event_dispatch_AbstractBubbling {
	_getParent(target: any): void;
	canDispatchEvent(target: any, event: any, type: any): void;
}
interface qx_event_dispatch_MouseCaptureStatic {
	new(manager: qx_event_Manager, registration: qx_event_Registration): qx_event_dispatch_MouseCapture;
}
interface qx_event_dispatch_MouseCapture extends qx_event_dispatch_AbstractBubbling {
	_getParent(target: any): void;
	activateCapture(element: Element, containerCapture: bool): void;
	canDispatchEvent(target: any, event: any, type: any): void;
	dispatchEvent(target: any, event: any, type: any): void;
	getCaptureElement(): Element;
	nativeReleaseCapture(element: Element): void;
	nativeSetCapture(element: Element, containerCapture: bool): void;
	releaseCapture(): void;
}
interface qx_event_EmitterStatic {
}
interface qx_event_Emitter {
	__getStorage(name: string): any[];
	addListener(name: string, listener: Function, ctx: any): number;
	addListenerOnce(name: string, listener: Function, ctx: any): number;
	emit(name: string, data: any): void;
	getListeners(): any;
	off(name: string, listener: Function, ctx: any): number;
	offById(id: number): void;
	on(name: string, listener: Function, ctx: any): number;
	once(name: string, listener: Function, ctx: any): number;
	removeListener(name: string, listener: Function, ctx: any): void;
	removeListenerById(id: number): void;
}
interface qx_event_GlobalErrorStatic {
	__isGlobaErrorHandlingEnabled(): bool;
	__onErrorWindow(msg: string, uri: string, lineNumber: number): void;
	handleError(ex: qx_core_WindowError): void;
	handleError(ex: Error): void;
	observeMethod(method: qx_lang_Function): qx_lang_Function;
	setErrorHandler(callback: qx_lang_Function, context: any): void;
}
interface qx_event_GlobalError {
}
interface qx_event_handler_AppearStatic {
	refresh(): void;
	new(manager: qx_event_Manager): qx_event_handler_Appear;
}
interface qx_event_handler_Appear extends qx_core_Object {
	canHandleEvent(target: any, type: any): void;
	refresh(): void;
	registerEvent(target: any, type: any, capture: any): void;
	unregisterEvent(target: any, type: any, capture: any): void;
}
interface qx_event_handler_ApplicationStatic {
	onScriptLoaded(): void;
	new(manager: qx_event_Manager): qx_event_handler_Application;
}
interface qx_event_handler_Application extends qx_core_Object {
	__fireReady(): void;
	_initObserver(): void;
	_onNativeLoad(): void;
	_onNativeUnload(): void;
	_stopObserver(): void;
	canHandleEvent(target: any, type: any): void;
	isApplicationReady(): bool;
	registerEvent(target: any, type: any, capture: any): void;
	unregisterEvent(target: any, type: any, capture: any): void;
}
interface qx_event_handler_CaptureStatic {
}
interface qx_event_handler_Capture extends qx_core_Object {
	canHandleEvent(target: any, type: any): void;
	registerEvent(target: any, type: any, capture: any): void;
	unregisterEvent(target: any, type: any, capture: any): void;
}
interface qx_event_handler_DragDropStatic {
	new(manager: qx_event_Manager): qx_event_handler_DragDrop;
}
interface qx_event_handler_DragDrop extends qx_core_Object {
	__clearInit(): void;
	__clearSession(): void;
	__detectAction(): void;
	__findDraggable(elem: Element): Element;
	__findDroppable(elem: Element): Element;
	__fireEvent(type: string, target: any, relatedTarget: any, cancelable: bool, original: qx_event_type_Mouse): void;
	__rebuildStructures(): void;
	_onKeyDown(e: qx_event_type_KeySequence): void;
	_onKeyPress(e: qx_event_type_KeySequence): void;
	_onKeyUp(e: qx_event_type_KeySequence): void;
	_onMouseDown(e: qx_event_type_Mouse): void;
	_onMouseMove(e: qx_event_type_Mouse): void;
	_onMouseOut(e: qx_event_type_Mouse): void;
	_onMouseOver(e: qx_event_type_Mouse): void;
	_onMouseUp(e: qx_event_type_Mouse): void;
	_onWindowBlur(e: qx_event_type_Event): void;
	addAction(action: string): void;
	addData(type: string, data: any): void;
	addType(type: string): void;
	canHandleEvent(target: any, type: any): void;
	getCurrentAction(): string;
	getCurrentType(): string;
	getData(type: string): any;
	isSessionActive(): bool;
	registerEvent(target: any, type: any, capture: any): void;
	supportsAction(type: string): bool;
	supportsType(type: string): bool;
	unregisterEvent(target: any, type: any, capture: any): void;
}
interface qx_event_handler_ElementStatic {
	new(manager: qx_event_Manager): qx_event_handler_Element;
}
interface qx_event_handler_Element extends qx_core_Object {
	_onNative(nativeEvent: qx_bom_client_Event, eventId: number): void;
	canHandleEvent(target: any, type: any): void;
	registerEvent(target: any, type: any, capture: any): void;
	unregisterEvent(target: any, type: any, capture: any): void;
}
interface qx_event_handler_ElementResizeStatic {
	new(manager: qx_event_Manager): qx_event_handler_ElementResize;
}
interface qx_event_handler_ElementResize extends qx_core_Object {
	_onInterval(e: qx_event_type_Data): void;
	canHandleEvent(target: any, type: any): void;
	registerEvent(target: any, type: any, capture: any): void;
	unregisterEvent(target: any, type: any, capture: any): void;
}
interface qx_event_handler_FocusStatic {
	new(manager: qx_event_Manager): qx_event_handler_Focus;
}
interface qx_event_handler_Focus extends qx_core_Object {
	__doWindowBlur(): void;
	__doWindowFocus(): void;
	__findActivatableElement(el: Element): Element;
	__findFocusableElement(el: Element): Element;
	__fireEvent(target: Element, related: Element, type: string, bubbles: bool): void;
	__fixFocus(target: Element): Element;
	__isFocusable(el: Element): bool;
	__isSelectable(node: Element): bool;
	__onNativeBlur(domEvent: qx_bom_client_Event): void;
	__onNativeDragGesture(domEvent: qx_bom_client_Event): void;
	__onNativeFocus(domEvent: qx_bom_client_Event): void;
	__onNativeFocusIn(domEvent: qx_bom_client_Event): void;
	__onNativeFocusOut(domEvent: qx_bom_client_Event): void;
	__onNativeMouseDown(domEvent: qx_bom_client_Event): void;
	__onNativeMouseUp(domEvent: qx_bom_client_Event): void;
	__onNativeSelectStart(domEvent: qx_bom_client_Event): void;
	_applyActive(value: any, old: any): void;
	_applyFocus(value: any, old: any): void;
	_initObserver(): void;
	_stopObserver(): void;
	activate(element: Element): void;
	blur(element: Element): void;
	canHandleEvent(target: any, type: any): void;
	deactivate(element: Element): void;
	focus(element: Element): void;
	getActive(): any;
	getFocus(): any;
	initActive(value: any): any;
	initFocus(value: any): any;
	registerEvent(target: any, type: any, capture: any): void;
	resetActive(): void;
	resetFocus(): void;
	setActive(value: any): any;
	setFocus(value: any): any;
	tryActivate(element: Element): void;
	unregisterEvent(target: any, type: any, capture: any): void;
}
interface qx_event_handler_IframeStatic {
	onevent(target: Element): void;
}
interface qx_event_handler_Iframe extends qx_core_Object {
	canHandleEvent(target: any, type: any): void;
	registerEvent(target: any, type: any, capture: any): void;
	unregisterEvent(target: any, type: any, capture: any): void;
}
interface qx_event_handler_InputStatic {
	new(): qx_event_handler_Input;
}
interface qx_event_handler_Input extends qx_core_Object {
	_inputFix(e: qx_bom_client_Event, target: Element): void;
	_onBlur(e: qx_bom_client_Event): void;
	_onChangeChecked(e: qx_bom_client_Event): void;
	_onChangeValue(e: qx_bom_client_Event): void;
	_onInput(e: qx_bom_client_Event): void;
	_onKeyDown(e: qx_bom_client_Event): void;
	_onKeyPress(e: qx_bom_client_Event, target: Element): void;
	_onKeyUp(e: qx_bom_client_Event): void;
	_onProperty(e: qx_bom_client_Event): void;
	canHandleEvent(target: any, type: any): void;
	registerEvent(target: any, type: any, capture: any): void;
	unregisterEvent(target: any, type: any): void;
}
interface qx_event_handler_KeyboardStatic {
	isPrintableKeyIdentifier(keyIdentifier: string): bool;
	isValidKeyIdentifier(keyIdentifier: string): bool;
	new(manager: qx_event_Manager): qx_event_handler_Keyboard;
}
interface qx_event_handler_Keyboard extends qx_core_Object {
	__firefoxInputFix(target: Element, type: string, keyCode: number): void;
	__getEventTarget(): Element;
	__onKeyPress(domEvent: qx_bom_client_Event): void;
	__onKeyUpDown(domEvent: qx_bom_client_Event): void;
	_charCodeToIdentifier(charCode: string): string;
	_fireInputEvent(domEvent: qx_bom_client_Event, charCode: number): void;
	_fireSequenceEvent(domEvent: qx_bom_client_Event, type: string, keyIdentifier: string): void;
	_idealKeyHandler(keyCode: string, charCode: string, eventType: string, domEvent: Element): void;
	_identifierToKeyCode(keyIdentifier: string): number;
	_initKeyObserver(): void;
	_isIdentifiableKeyCode(keyCode: string): bool;
	_isNonPrintableKeyCode(keyCode: string): bool;
	_keyCodeToIdentifier(keyCode: number): string;
	_stopKeyObserver(): void;
	canHandleEvent(target: any, type: any): void;
	registerEvent(target: any, type: any, capture: any): void;
	unregisterEvent(target: any, type: any, capture: any): void;
}
interface qx_event_handler_MouseStatic {
	new(manager: qx_event_Manager): qx_event_handler_Mouse;
}
interface qx_event_handler_Mouse extends qx_core_Object {
	__differentTargetClickFixPost(domEvent: qx_bom_client_Event, type: string, target: Element): void;
	__doubleClickFixPre(domEvent: qx_bom_client_Event, type: string, target: Element): void;
	__fireEvent(domEvent: qx_bom_client_Event, type: string, target: Element): void;
	__getMouseWheelTarget(): any;
	__rightClickFixPost(domEvent: qx_bom_client_Event, type: string, target: Element): void;
	__rightClickFixPre(domEvent: qx_bom_client_Event, type: string, target: Element): void;
	_initButtonObserver(): void;
	_initMoveObserver(): void;
	_initWheelObserver(): void;
	_onButtonEvent(domEvent: qx_bom_client_Event): void;
	_onMoveEvent(domEvent: qx_bom_client_Event): void;
	_onWheelEvent(domEvent: qx_bom_client_Event): void;
	_stopButtonObserver(): void;
	_stopMoveObserver(): void;
	_stopWheelObserver(): void;
	canHandleEvent(target: any, type: any): void;
}
interface qx_event_handler_ObjectStatic {
}
interface qx_event_handler_Object extends qx_core_Object {
	canHandleEvent(target: any, type: any): void;
	registerEvent(target: any, type: any, capture: any): void;
	unregisterEvent(target: any, type: any, capture: any): void;
}
interface qx_event_handler_OfflineStatic {
	new(manager: qx_event_Manager): qx_event_handler_Offline;
}
interface qx_event_handler_Offline extends qx_core_Object {
	_initObserver(): void;
	_onNative(domEvent: qx_bom_client_Event): void;
	_stopObserver(): void;
	canHandleEvent(target: any, type: any): void;
	isOnline(): bool;
	registerEvent(target: any, type: any, capture: any): void;
	unregisterEvent(target: any, type: any, capture: any): void;
}
interface qx_event_handler_OrientationStatic {
	new(manager: qx_event_Manager): qx_event_handler_Orientation;
}
interface qx_event_handler_Orientation extends qx_core_Object {
	_initObserver(): void;
	_onNative(domEvent: qx_bom_client_Event): void;
	_stopObserver(): void;
	canHandleEvent(target: any, type: any): void;
	registerEvent(target: any, type: any, capture: any): void;
	unregisterEvent(target: any, type: any, capture: any): void;
}
interface qx_event_handler_OrientationCoreStatic {
	new(targetWindow: qx_event_handler_Window, emitter: qx_event_Emitter): qx_event_handler_OrientationCore;
}
interface qx_event_handler_OrientationCore {
	_initObserver(): void;
	_onNative(domEvent: qx_bom_client_Event): void;
	_stopObserver(): void;
}
interface qx_event_handler_TouchStatic {
	new(manager: qx_event_Manager): qx_event_handler_Touch;
}
interface qx_event_handler_Touch extends qx_event_handler_TouchCore {
	__callBase(method: string, args: any[]): void;
	__createTouchObject(domEvent: qx_bom_client_Event): any;
	__isLeftMouseButtonPressed(domEvent: qx_bom_client_Event): bool;
	__normalizeMouseEvent(domEvent: qx_bom_client_Event): void;
	_fireEvent(domEvent: qx_bom_client_Event, type: string, target: Element, eventTypeClass: qx_Class): void;
	_onMouseEvent(domEvent: qx_bom_client_Event): void;
	_onTouchEvent(domEvent: qx_bom_client_Event): void;
	canHandleEvent(target: any, type: any): void;
	dispose(): void;
	registerEvent(target: any, type: any, capture: any): void;
	unregisterEvent(target: any, type: any, capture: any): void;
}
interface qx_event_handler_TouchCoreStatic {
	new(target: Element, emitter: qx_event_Emitter): qx_event_handler_TouchCore;
}
interface qx_event_handler_TouchCore {
	__checkAndFireGesture(domEvent: qx_bom_client_Event, type: string, target: Element): void;
	__gestureChange(domEvent: qx_bom_client_Event, target: Element): void;
	__gestureEnd(domEvent: qx_bom_client_Event, target: Element): void;
	__gestureStart(domEvent: qx_bom_client_Event, target: Element): void;
	__getSwipeGesture(domEvent: qx_bom_client_Event, target: Element, deltaCoordinates: any): any;
	_commonTouchEventHandler(domEvent: qx_bom_client_Event, type: string): void;
	_fireEvent(domEvent: qx_bom_client_Event, type: string, target: Element): void;
	_getTarget(domEvent: qx_bom_client_Event): Element;
	_initTouchObserver(): void;
	_onTouchEvent(domEvent: qx_bom_client_Event): void;
	_stopTouchObserver(): void;
	dispose(): void;
}
interface qx_event_handler_TransitionStatic {
	new(manager: qx_event_Manager): qx_event_handler_Transition;
}
interface qx_event_handler_Transition extends qx_core_Object {
	_onNative(domEvent: qx_bom_client_Event): void;
	canHandleEvent(target: any, type: any): void;
	registerEvent(target: any, type: any, capture: any): void;
	unregisterEvent(target: any, type: any, capture: any): void;
}
interface qx_event_handler_UserActionStatic {
	new(manager: qx_event_Manager): qx_event_handler_UserAction;
}
interface qx_event_handler_UserAction extends qx_core_Object {
	canHandleEvent(target: any, type: any): void;
	registerEvent(target: any, type: any, capture: any): void;
	unregisterEvent(target: any, type: any, capture: any): void;
}
interface qx_event_handler_WindowStatic {
	new(manager: qx_event_Manager): qx_event_handler_Window;
}
interface qx_event_handler_Window extends qx_core_Object {
	_initWindowObserver(): void;
	_onNative(e: qx_bom_client_Event): void;
	_stopWindowObserver(): void;
	canHandleEvent(target: any, type: any): void;
	registerEvent(target: any, type: any, capture: any): void;
	unregisterEvent(target: any, type: any, capture: any): void;
}
interface qx_event_IdleStatic {
	getInstance(): qx_event_Idle;
	new(): qx_event_Idle;
}
interface qx_event_Idle extends qx_core_Object {
	_applyTimeoutInterval(value: number, old: number): void;
	_onInterval(): void;
	getTimeoutInterval(): any;
	initTimeoutInterval(value: any): any;
	resetTimeoutInterval(): void;
	setTimeoutInterval(value: any): any;
}
interface qx_event_IEventDispatcherStatic {
}
interface qx_event_IEventDispatcher {
	canDispatchEvent(target: Element, event: qx_event_type_Event, type: string): bool;
	canDispatchEvent(target: qx_bom_Event, event: qx_event_type_Event, type: string): bool;
	dispatchEvent(target: Element, event: qx_event_type_Event, type: string): void;
	dispatchEvent(target: qx_bom_Event, event: qx_event_type_Event, type: string): void;
}
interface qx_event_IEventHandlerStatic {
}
interface qx_event_IEventHandler {
	canHandleEvent(target: any, type: string): bool;
	registerEvent(target: any, type: string, capture: bool): void;
	unregisterEvent(target: any, type: string, capture: bool): void;
}
interface qx_event_ManagerStatic {
	getNextUniqueId(): string;
	new(win: qx_event_handler_Window, registration: qx_event_Registration): qx_event_Manager;
}
interface qx_event_Manager {
	__registerAtHandler(target: any, type: string, capture: bool): void;
	__unregisterAtHandler(target: any, type: string, capture: bool): void;
	addListener(target: any, type: string, listener: qx_lang_Function, self: any, capture: bool): string;
	deleteAllListeners(targetKey: string): void;
	dispatchEvent(target: any, event: qx_event_type_Event): bool;
	dispose(): void;
	findHandler(target: any, type: string): qx_event_IEventHandler;
	getAllListeners(): any;
	getDispatcher(clazz: qx_Class): any;
	getHandler(clazz: qx_Class): any;
	getListeners(target: any, type: string, capture: bool): any[];
	getWindow(): qx_event_handler_Window;
	getWindowId(): string;
	hasListener(target: any, type: string, capture: bool): bool;
	importListeners(target: any, list: any): void;
	removeAllListeners(target: any): bool;
	removeListener(target: any, type: string, listener: qx_lang_Function, self: any, capture: bool): bool;
	removeListenerById(target: any, id: string): void;
	serializeListeners(target: any): any;
	toggleAttachedEvents(target: any, enable: bool): void;
}
interface qx_event_message_BusStatic {
	checkSubscription(message: string, subscriber: qx_lang_Function, context: any): bool;
	dispatch(msg: qx_event_message_Message): bool;
	dispatchByName(name: string, data: any): bool;
	getInstance(): qx_event_message_Bus;
	getSubscriptions(): any;
	subscribe(message: string, subscriber: qx_lang_Function, context: any): bool;
	unsubscribe(message: string, subscriber: qx_lang_Function, context: any): bool;
	new(): qx_event_message_Bus;
}
interface qx_event_message_Bus extends qx_core_Object {
	__callSubscribers(subscribers: any, msg: qx_event_message_Message): void;
	checkSubscription(message: string, subscriber: qx_lang_Function, context: any): bool;
	dispatch(msg: qx_event_message_Message): bool;
	dispatchByName(name: string, data: any): bool;
	getSubscriptions(): any;
	subscribe(message: string, subscriber: qx_lang_Function, context: any): bool;
	unsubscribe(message: string, subscriber: qx_lang_Function, context: any): bool;
}
interface qx_event_message_MessageStatic {
	new(name: string, data: any): qx_event_message_Message;
}
interface qx_event_message_Message extends qx_core_Object {
	getData(): any;
	getName(): any;
	getSender(): any;
	initData(value: any): any;
	initName(value: any): any;
	initSender(value: any): any;
	resetData(): void;
	resetName(): void;
	resetSender(): void;
	setData(value: any): any;
	setName(value: any): any;
	setSender(value: any): any;
}
interface qx_event_MessagingStatic {
	new(): qx_event_Messaging;
}
interface qx_event_Messaging {
	_addListener(channel: string, type: string, handler: qx_lang_Function, scope: any): string;
	_addListener(channel: string, type: RegExp, handler: qx_lang_Function, scope: any): string;
	_emit(channel: string, path: string, params: any, customData: any): bool;
	_emitListeners(channel: string, path: string, listeners: any, params: any, customData: any): bool;
	_emitRoute(channel: string, path: string, listener: any, params: any, customData: any): bool;
	emit(channel: string, path: string, params: any, customData: any): void;
	on(channel: string, type: string, handler: qx_lang_Function, scope: any): string;
	on(channel: string, type: RegExp, handler: qx_lang_Function, scope: any): string;
	onAny(type: string, handler: qx_lang_Function, scope: any): string;
	onAny(type: RegExp, handler: qx_lang_Function, scope: any): string;
	remove(id: string): void;
}
interface qx_event_PoolStatic {
	getInstance(): qx_event_Pool;
	new(): qx_event_Pool;
}
interface qx_event_Pool extends qx_util_ObjectPool {
}
interface qx_event_RegistrationStatic {
	addDispatcher(dispatcher: qx_event_IEventDispatcher, priority: number): void;
	addHandler(handler: qx_event_IEventHandler): void;
	addListener(target: any, type: string, listener: qx_lang_Function, self: any, capture: bool): any;
	createEvent(type: string, clazz: any, args: any[]): qx_event_type_Event;
	deleteAllListeners(target: any): void;
	dispatchEvent(target: any, event: qx_event_type_Event): bool;
	fireEvent(target: any, type: string, clazz: qx_Class, args: any[]): bool;
	fireNonBubblingEvent(target: any, type: string, clazz: qx_Class, args: any[]): bool;
	getDispatchers(): qx_event_IEventDispatcher;
	getHandlers(): qx_event_IEventHandler;
	getManager(target: any): qx_event_Manager;
	hasListener(target: any, type: string, capture: bool): bool;
	removeAllListeners(target: any): bool;
	removeListener(target: any, type: string, listener: qx_lang_Function, self: any, capture: bool): bool;
	removeListenerById(target: any, id: any): bool;
	removeManager(mgr: qx_event_Manager): void;
	serializeListeners(target: any): any;
}
interface qx_event_Registration {
}
interface qx_event_TimerStatic {
	once(func: qx_lang_Function, obj: any, timeout: number): qx_event_Timer;
	new(interval: number): qx_event_Timer;
}
interface qx_event_Timer extends qx_core_Object {
	_applyEnabled(value: any, old: any): void;
	_applyInterval(value: any, old: any): void;
	_oninterval(): void;
	getEnabled(): any;
	getInterval(): any;
	initEnabled(value: any): any;
	initInterval(value: any): any;
	isEnabled(): bool;
	resetEnabled(): void;
	resetInterval(): void;
	restart(): void;
	restartWith(interval: number): void;
	setEnabled(value: any): any;
	setInterval(value: any): any;
	start(): void;
	startWith(interval: number): void;
	stop(): void;
	toggleEnabled(): bool;
}
interface qx_event_type_DataStatic {
}
interface qx_event_type_Data extends qx_event_type_Event {
	clone(embryo: qx_event_type_Data): qx_event_type_Data;
	getData(): any;
	getOldData(): any;
	init(data: any, old: any, cancelable: bool): qx_event_type_Data;
}
interface qx_event_type_DomStatic {
}
interface qx_event_type_Dom extends qx_event_type_Native {
	_cloneNativeEvent(nativeEvent: any, clone: any): void;
	getModifiers(): number;
	isAltPressed(): bool;
	isCtrlOrCommandPressed(): bool;
	isCtrlPressed(): bool;
	isMetaPressed(): bool;
	isShiftPressed(): bool;
}
interface qx_event_type_DragStatic {
}
interface qx_event_type_Drag extends qx_event_type_Event {
	addAction(action: string): void;
	addData(type: string, data: any): void;
	addType(type: string): void;
	clone(embryo: any): void;
	getCurrentAction(): string;
	getCurrentType(): string;
	getData(type: string): void;
	getDocumentLeft(): number;
	getDocumentTop(): number;
	getManager(): qx_event_handler_DragDrop;
	init(cancelable: bool, originalEvent: qx_event_type_Mouse): qx_event_type_Event;
	supportsAction(action: string): bool;
	supportsType(type: string): bool;
}
interface qx_event_type_EventStatic {
}
interface qx_event_type_Event extends qx_core_Object {
	clone(embryo: qx_event_type_Event): qx_event_type_Event;
	getBubbles(): bool;
	getCurrentTarget(): Element;
	getDefaultPrevented(): bool;
	getEventPhase(): number;
	getOriginalTarget(): Element;
	getPropagationStopped(): bool;
	getRelatedTarget(): Element;
	getTarget(): Element;
	getTimeStamp(): number;
	getType(): string;
	init(canBubble: bool, cancelable: bool): qx_event_type_Event;
	isCancelable(): bool;
	preventDefault(): void;
	setBubbles(bubbles: bool): void;
	setCancelable(cancelable: bool): void;
	setCurrentTarget(currentTarget: Element): void;
	setEventPhase(eventPhase: number): void;
	setOriginalTarget(originalTarget: Element): void;
	setRelatedTarget(relatedTarget: Element): void;
	setTarget(target: Element): void;
	setType(type: string): void;
	stop(): void;
	stopPropagation(): void;
}
interface qx_event_type_FocusStatic {
}
interface qx_event_type_Focus extends qx_event_type_Event {
	init(target: any, relatedTarget: any, canBubble: bool): qx_event_type_Event;
}
interface qx_event_type_GeoPositionStatic {
	new(): qx_event_type_GeoPosition;
}
interface qx_event_type_GeoPosition extends qx_event_type_Event {
	getAccuracy(): any;
	getAltitude(): any;
	getAltitudeAccuracy(): any;
	getHeading(): any;
	getLatitude(): any;
	getLongitude(): any;
	getSpeed(): any;
	getTimestamp(): any;
	init(position: any): void;
	initAccuracy(value: any): any;
	initAltitude(value: any): any;
	initAltitudeAccuracy(value: any): any;
	initHeading(value: any): any;
	initLatitude(value: any): any;
	initLongitude(value: any): any;
	initSpeed(value: any): any;
	initTimestamp(value: any): any;
	resetAccuracy(): void;
	resetAltitude(): void;
	resetAltitudeAccuracy(): void;
	resetHeading(): void;
	resetLatitude(): void;
	resetLongitude(): void;
	resetSpeed(): void;
	resetTimestamp(): void;
	setAccuracy(value: any): any;
	setAltitude(value: any): any;
	setAltitudeAccuracy(value: any): any;
	setHeading(value: any): any;
	setLatitude(value: any): any;
	setLongitude(value: any): any;
	setSpeed(value: any): any;
	setTimestamp(value: any): any;
}
interface qx_event_type_KeyInputStatic {
}
interface qx_event_type_KeyInput extends qx_event_type_Dom {
	clone(embryo: any): void;
	getChar(): string;
	getCharCode(): number;
	init(domEvent: qx_event_type_Event, target: any, charCode: number): qx_event_type_KeyInput;
}
interface qx_event_type_KeySequenceStatic {
}
interface qx_event_type_KeySequence extends qx_event_type_Dom {
	clone(embryo: any): void;
	getKeyCode(): number;
	getKeyIdentifier(): string;
	init(domEvent: qx_event_type_Event, target: any, identifier: string): qx_event_type_KeySequence;
	isPrintable(): bool;
}
interface qx_event_type_MouseStatic {
}
interface qx_event_type_Mouse extends qx_event_type_Dom {
	_cloneNativeEvent(nativeEvent: any, clone: any): void;
	getButton(): string;
	getDocumentLeft(): number;
	getDocumentTop(): number;
	getRelatedTarget(): Element;
	getScreenLeft(): number;
	getScreenTop(): number;
	getViewportLeft(): number;
	getViewportTop(): number;
	isLeftPressed(): bool;
	isMiddlePressed(): bool;
	isRightPressed(): bool;
	stop(): void;
}
interface qx_event_type_MouseWheelStatic {
}
interface qx_event_type_MouseWheel extends qx_event_type_Mouse {
	__convertWheelDelta(delta: number): number;
	__normalize(delta: number): void;
	__recalculateMultiplicator(): void;
	getWheelDelta(axis: string): number;
	stop(): void;
}
interface qx_event_type_NativeStatic {
}
interface qx_event_type_Native extends qx_event_type_Event {
	_cloneNativeEvent(nativeEvent: qx_event_type_Event, clone: any): any;
	clone(embryo: any): void;
	getNativeEvent(): qx_event_type_Event;
	getReturnValue(): string;
	init(nativeEvent: qx_event_type_Event, target: any, relatedTarget: any, canBubble: bool, cancelable: bool): qx_event_type_Event;
	preventDefault(): void;
	setReturnValue(returnValue: string): void;
}
interface qx_event_type_OrientationStatic {
}
interface qx_event_type_Orientation extends qx_event_type_Event {
	clone(embryo: qx_event_type_Orientation): qx_event_type_Orientation;
	getOrientation(): number;
	init(orientation: string, mode: string): qx_event_type_Orientation;
	isLandscape(): bool;
	isPortrait(): bool;
}
interface qx_event_type_RestStatic {
}
interface qx_event_type_Rest extends qx_event_type_Data {
	clone(embryo: qx_event_type_Data): qx_event_type_Data;
	getAction(): any;
	getId(): any;
	getPhase(): any;
	getRequest(): any;
	init(data: any, old: any, cancelable: bool, request: qx_io_request_AbstractRequest, action: string, phase: string): qx_event_type_Data;
	initAction(value: any): any;
	initId(value: any): any;
	initPhase(value: any): any;
	initRequest(value: any): any;
	resetAction(): void;
	resetId(): void;
	resetPhase(): void;
	resetRequest(): void;
	setAction(value: any): any;
	setId(value: any): any;
	setPhase(value: any): any;
	setRequest(value: any): any;
}
interface qx_event_type_SwipeStatic {
}
interface qx_event_type_Swipe extends qx_event_type_Touch {
	_cloneNativeEvent(nativeEvent: any, clone: any): void;
	_isTouchEnd(): void;
	getAxis(): string;
	getDirection(): string;
	getDistance(): number;
	getDuration(): number;
	getStartTime(): number;
	getVelocity(): number;
}
interface qx_event_type_TapStatic {
}
interface qx_event_type_Tap extends qx_event_type_Touch {
	_isTouchEnd(): void;
}
interface qx_event_type_TouchStatic {
}
interface qx_event_type_Touch extends qx_event_type_Dom {
	__getEventSpecificTouch(touchIndex: any): any;
	__getEventSpecificTouches(): any;
	_cloneNativeEvent(nativeEvent: any, clone: any): void;
	_isTouchEnd(): bool;
	getAllTouches(): any;
	getChangedTargetTouches(): any;
	getDocumentLeft(touchIndex: any): number;
	getDocumentTop(touchIndex: any): number;
	getIdentifier(touchIndex: any): number;
	getRotation(): number;
	getScale(): void;
	getScreenLeft(touchIndex: any): number;
	getScreenTop(touchIndex: any): number;
	getTargetTouches(): any;
	getViewportLeft(touchIndex: any): number;
	getViewportTop(touchIndex: any): number;
	isMultiTouch(): bool;
	stop(): void;
}
interface qx_event_util_KeyboardStatic {
	charCodeToIdentifier(charCode: string): string;
	isIdentifiableKeyCode(keyCode: string): bool;
	isNonPrintableKeyCode(keyCode: string): bool;
	isPrintableKeyIdentifier(keyIdentifier: string): bool;
	isValidKeyIdentifier(keyIdentifier: string): bool;
	keyCodeToIdentifier(keyCode: number): string;
}
interface qx_event_util_Keyboard {
}
interface qx_fx_BaseStatic {
	new(element: any): qx_fx_Base;
}
interface qx_fx_Base extends qx_core_Object {
	_applyDuration(value: number, old: number): void;
	_getElement(): any;
	_setElement(element: any): void;
	afterFinish(): void;
	afterFinishInternal(): void;
	afterSetup(): void;
	afterSetupInternal(): void;
	afterUpdate(): void;
	afterUpdateInternal(): void;
	beforeFinish(): void;
	beforeFinishInternal(): void;
	beforeSetup(): void;
	beforeSetupInternal(): void;
	beforeStart(): void;
	beforeStartInternal(): void;
	beforeUpdate(): void;
	beforeUpdateInternal(): void;
	cancel(): void;
	end(): void;
	finish(): void;
	getDelay(): any;
	getDuration(): any;
	getFps(): any;
	getFrom(): any;
	getQueue(): any;
	getSync(): any;
	getTo(): any;
	getTransition(): any;
	init(): void;
	initDelay(value: any): any;
	initDuration(value: any): any;
	initFps(value: any): any;
	initFrom(value: any): any;
	initQueue(value: any): any;
	initSync(value: any): any;
	initTo(value: any): any;
	initTransition(value: any): any;
	isActive(): bool;
	isSync(): bool;
	loop(timePos: number): void;
	render(pos: number): void;
	resetDelay(): void;
	resetDuration(): void;
	resetFps(): void;
	resetFrom(): void;
	resetQueue(): void;
	resetState(): void;
	resetSync(): void;
	resetTo(): void;
	resetTransition(): void;
	setDelay(value: any): any;
	setDuration(value: any): any;
	setFps(value: any): any;
	setFrom(value: any): any;
	setQueue(value: any): any;
	setSync(value: any): any;
	setTo(value: any): any;
	setTransition(value: any): any;
	setup(): void;
	start(): void;
	toggleSync(): bool;
	update(position: number): void;
}
interface qx_fx_effect_combination_ColorFlowStatic {
	new(element: any): qx_fx_effect_combination_ColorFlow;
}
interface qx_fx_effect_combination_ColorFlow extends qx_fx_Base {
	getBackwardDuration(): any;
	getBackwardTransition(): any;
	getDelayBetween(): any;
	getEndColor(): any;
	getForwardDuration(): any;
	getForwardTransition(): any;
	getKeepBackgroundImage(): any;
	getRestoreBackground(): any;
	getStartColor(): any;
	initBackwardDuration(value: any): any;
	initBackwardTransition(value: any): any;
	initDelayBetween(value: any): any;
	initEndColor(value: any): any;
	initForwardDuration(value: any): any;
	initForwardTransition(value: any): any;
	initKeepBackgroundImage(value: any): any;
	initRestoreBackground(value: any): any;
	initStartColor(value: any): any;
	isKeepBackgroundImage(): bool;
	isRestoreBackground(): bool;
	resetBackwardDuration(): void;
	resetBackwardTransition(): void;
	resetDelayBetween(): void;
	resetEndColor(): void;
	resetForwardDuration(): void;
	resetForwardTransition(): void;
	resetKeepBackgroundImage(): void;
	resetRestoreBackground(): void;
	resetStartColor(): void;
	setBackwardDuration(value: any): any;
	setBackwardTransition(value: any): any;
	setDelayBetween(value: any): any;
	setEndColor(value: any): any;
	setForwardDuration(value: any): any;
	setForwardTransition(value: any): any;
	setKeepBackgroundImage(value: any): any;
	setRestoreBackground(value: any): any;
	setStartColor(value: any): any;
	start(): void;
	toggleKeepBackgroundImage(): bool;
	toggleRestoreBackground(): bool;
}
interface qx_fx_effect_combination_DropStatic {
	new(element: any): qx_fx_effect_combination_Drop;
}
interface qx_fx_effect_combination_Drop extends qx_fx_Base {
	getDirection(): any;
	getMode(): any;
	getModifyDisplay(): any;
	getXAmount(): any;
	getYAmount(): any;
	initDirection(value: any): any;
	initMode(value: any): any;
	initModifyDisplay(value: any): any;
	initXAmount(value: any): any;
	initYAmount(value: any): any;
	isModifyDisplay(): bool;
	resetDirection(): void;
	resetMode(): void;
	resetModifyDisplay(): void;
	resetXAmount(): void;
	resetYAmount(): void;
	setDirection(value: any): any;
	setMode(value: any): any;
	setModifyDisplay(value: any): any;
	setXAmount(value: any): any;
	setYAmount(value: any): any;
	start(): void;
	toggleModifyDisplay(): bool;
}
interface qx_fx_effect_combination_FoldStatic {
	new(element: any): qx_fx_effect_combination_Fold;
}
interface qx_fx_effect_combination_Fold extends qx_fx_Base {
	_cleanUp(): void;
	_getStyle(): void;
	afterFinish(): void;
	getMode(): any;
	getModifyDisplay(): any;
	initMode(value: any): any;
	initModifyDisplay(value: any): any;
	isModifyDisplay(): bool;
	resetMode(): void;
	resetModifyDisplay(): void;
	setMode(value: any): any;
	setModifyDisplay(value: any): any;
	start(): void;
	toggleModifyDisplay(): bool;
}
interface qx_fx_effect_combination_GrowStatic {
	new(element: any): qx_fx_effect_combination_Grow;
}
interface qx_fx_effect_combination_Grow extends qx_fx_Base {
	getDirection(): any;
	getMoveTransition(): any;
	getScaleTransition(): any;
	initDirection(value: any): any;
	initMoveTransition(value: any): any;
	initScaleTransition(value: any): any;
	resetDirection(): void;
	resetMoveTransition(): void;
	resetScaleTransition(): void;
	setDirection(value: any): any;
	setMoveTransition(value: any): any;
	setScaleTransition(value: any): any;
	setup(): void;
	start(): void;
}
interface qx_fx_effect_combination_PuffStatic {
	new(element: any): qx_fx_effect_combination_Puff;
}
interface qx_fx_effect_combination_Puff extends qx_fx_Base {
	afterFinishInternal(): void;
	getModifyDisplay(): any;
	initModifyDisplay(value: any): any;
	isModifyDisplay(): bool;
	resetModifyDisplay(): void;
	setModifyDisplay(value: any): any;
	start(): void;
	toggleModifyDisplay(): bool;
}
interface qx_fx_effect_combination_PulsateStatic {
	new(element: any): qx_fx_effect_combination_Pulsate;
}
interface qx_fx_effect_combination_Pulsate extends qx_fx_Base {
	_applyDuration(value: number, old: number): void;
	afterFinish(): void;
	beforeSetup(): void;
	cancel(): void;
	end(): void;
	start(): void;
}
interface qx_fx_effect_combination_ShakeStatic {
	new(element: any): qx_fx_effect_combination_Shake;
}
interface qx_fx_effect_combination_Shake extends qx_fx_Base {
	getDirection(): any;
	getDistance(): any;
	initDirection(value: any): any;
	initDistance(value: any): any;
	resetDirection(): void;
	resetDistance(): void;
	setDirection(value: any): any;
	setDistance(value: any): any;
	start(): void;
}
interface qx_fx_effect_combination_ShrinkStatic {
	new(element: any): qx_fx_effect_combination_Shrink;
}
interface qx_fx_effect_combination_Shrink extends qx_fx_Base {
	afterFinishInternal(): void;
	getDirection(): any;
	getModifyDisplay(): any;
	getMoveTransition(): any;
	getScaleTransition(): any;
	initDirection(value: any): any;
	initModifyDisplay(value: any): any;
	initMoveTransition(value: any): any;
	initScaleTransition(value: any): any;
	isModifyDisplay(): bool;
	resetDirection(): void;
	resetModifyDisplay(): void;
	resetMoveTransition(): void;
	resetScaleTransition(): void;
	setDirection(value: any): any;
	setModifyDisplay(value: any): any;
	setMoveTransition(value: any): any;
	setScaleTransition(value: any): any;
	setup(): void;
	start(): void;
	toggleModifyDisplay(): bool;
}
interface qx_fx_effect_combination_SwitchStatic {
	new(element: any): qx_fx_effect_combination_Switch;
}
interface qx_fx_effect_combination_Switch extends qx_fx_Base {
	_applyDuration(value: number, old: number): void;
	afterFinish(): void;
	getMode(): any;
	getModifyDisplay(): any;
	initMode(value: any): any;
	initModifyDisplay(value: any): any;
	isModifyDisplay(): bool;
	resetMode(): void;
	resetModifyDisplay(): void;
	setMode(value: any): any;
	setModifyDisplay(value: any): any;
	setup(): void;
	start(): void;
	toggleModifyDisplay(): bool;
}
interface qx_fx_effect_core_ConsecutiveStatic {
	new(varargs: any): qx_fx_effect_core_Consecutive;
}
interface qx_fx_effect_core_Consecutive extends qx_fx_Base {
}
interface qx_fx_effect_core_CustomStatic {
	new(element: any, func: qx_lang_Function): qx_fx_effect_core_Custom;
}
interface qx_fx_effect_core_Custom extends qx_fx_Base {
	update(position: any): void;
}
interface qx_fx_effect_core_FadeStatic {
}
interface qx_fx_effect_core_Fade extends qx_fx_Base {
	afterFinishInternal(): void;
	beforeSetup(): void;
	getModifyDisplay(): any;
	initModifyDisplay(value: any): any;
	isModifyDisplay(): bool;
	resetModifyDisplay(): void;
	setModifyDisplay(value: any): any;
	toggleModifyDisplay(): bool;
	update(position: any): void;
}
interface qx_fx_effect_core_HighlightStatic {
}
interface qx_fx_effect_core_Highlight extends qx_fx_Base {
	_restore(): void;
	finish(): void;
	getEndColor(): any;
	getKeepBackgroundImage(): any;
	getRestoreBackground(): any;
	getStartColor(): any;
	initEndColor(value: any): any;
	initKeepBackgroundImage(value: any): any;
	initRestoreBackground(value: any): any;
	initStartColor(value: any): any;
	isKeepBackgroundImage(): bool;
	isRestoreBackground(): bool;
	resetEndColor(): void;
	resetKeepBackgroundImage(): void;
	resetRestoreBackground(): void;
	resetStartColor(): void;
	setEndColor(value: any): any;
	setKeepBackgroundImage(value: any): any;
	setRestoreBackground(value: any): any;
	setStartColor(value: any): any;
	setup(): void;
	toggleKeepBackgroundImage(): bool;
	toggleRestoreBackground(): bool;
	update(position: any): void;
}
interface qx_fx_effect_core_MoveStatic {
}
interface qx_fx_effect_core_Move extends qx_fx_Base {
	afterFinishInternal(): void;
	getMode(): any;
	getX(): any;
	getY(): any;
	initMode(value: any): any;
	initX(value: any): any;
	initY(value: any): any;
	resetMode(): void;
	resetX(): void;
	resetY(): void;
	setMode(value: any): any;
	setup(): void;
	setX(value: any): any;
	setY(value: any): any;
	update(position: any): void;
}
interface qx_fx_effect_core_ParallelStatic {
	new(varargs: any): qx_fx_effect_core_Parallel;
}
interface qx_fx_effect_core_Parallel extends qx_fx_Base {
	finish(): void;
	start(): void;
	update(position: number): void;
}
interface qx_fx_effect_core_PropertyStatic {
	new(element: any, qxProperty: string, func: qx_lang_Function): qx_fx_effect_core_Property;
}
interface qx_fx_effect_core_Property extends qx_fx_Base {
	update(position: any): void;
}
interface qx_fx_effect_core_ScaleStatic {
	new(element: any): qx_fx_effect_core_Scale;
}
interface qx_fx_effect_core_Scale extends qx_fx_Base {
	_setDimensions(width: number, height: number): void;
	finish(): void;
	getAlternateDimensions(): any;
	getRestoreAfterFinish(): any;
	getScaleContent(): any;
	getScaleFrom(): any;
	getScaleFromCenter(): any;
	getScaleTo(): any;
	getScaleX(): any;
	getScaleY(): any;
	initAlternateDimensions(value: any): any;
	initRestoreAfterFinish(value: any): any;
	initScaleContent(value: any): any;
	initScaleFrom(value: any): any;
	initScaleFromCenter(value: any): any;
	initScaleTo(value: any): any;
	initScaleX(value: any): any;
	initScaleY(value: any): any;
	isRestoreAfterFinish(): bool;
	isScaleContent(): bool;
	isScaleFromCenter(): bool;
	isScaleX(): bool;
	isScaleY(): bool;
	resetAlternateDimensions(): void;
	resetRestoreAfterFinish(): void;
	resetScaleContent(): void;
	resetScaleFrom(): void;
	resetScaleFromCenter(): void;
	resetScaleTo(): void;
	resetScaleX(): void;
	resetScaleY(): void;
	setAlternateDimensions(value: any): any;
	setRestoreAfterFinish(value: any): any;
	setScaleContent(value: any): any;
	setScaleFrom(value: any): any;
	setScaleFromCenter(value: any): any;
	setScaleTo(value: any): any;
	setScaleX(value: any): any;
	setScaleY(value: any): any;
	setup(): void;
	toggleRestoreAfterFinish(): bool;
	toggleScaleContent(): bool;
	toggleScaleFromCenter(): bool;
	toggleScaleX(): bool;
	toggleScaleY(): bool;
	update(position: any): void;
}
interface qx_fx_effect_core_ScrollStatic {
}
interface qx_fx_effect_core_Scroll extends qx_fx_Base {
	_atEndPosition(left: number, top: number): bool;
	getMode(): any;
	getX(): any;
	getY(): any;
	initMode(value: any): any;
	initX(value: any): any;
	initY(value: any): any;
	resetMode(): void;
	resetX(): void;
	resetY(): void;
	setMode(value: any): any;
	setX(value: any): any;
	setY(value: any): any;
	start(): void;
	update(position: any): void;
}
interface qx_fx_effect_core_StyleStatic {
	new(element: any, cssAttribute: string, func: qx_lang_Function): qx_fx_effect_core_Style;
}
interface qx_fx_effect_core_Style extends qx_fx_Base {
	update(position: any): void;
}
interface qx_fx_queue_ManagerStatic {
	getInstance(): qx_fx_queue_Manager;
	new(): qx_fx_queue_Manager;
}
interface qx_fx_queue_Manager extends qx_core_Object {
	getDefaultQueue(): qx_Class;
	getQueue(queueName: string): qx_Class;
}
interface qx_fx_queue_QueueStatic {
	new(): qx_fx_queue_Queue;
}
interface qx_fx_queue_Queue extends qx_core_Object {
	add(effect: any): void;
	getLimit(): any;
	initLimit(value: any): any;
	loop(): void;
	remove(effect: any): void;
	resetLimit(): void;
	setLimit(value: any): any;
}
interface qx_fx_TransitionStatic {
	easeInQuad(pos: number): number;
	easeOutQuad(pos: number): number;
	flicker(pos: number): number;
	full(pos: number): number;
	get(functionName: string): qx_lang_Function;
	linear(pos: number): number;
	none(pos: number): number;
	pulse(pos: number, pulses: number): number;
	reverse(pos: number): number;
	sinodial(pos: number): number;
	spring(pos: number): number;
	wobble(pos: number): number;
}
interface qx_fx_Transition {
}
interface qx_html_BlockerStatic {
	new(backgroundColor: qx_theme_classic_Color, opacity: number): qx_html_Blocker;
}
interface qx_html_Blocker extends qx_html_Element {
	__refreshCursor(): void;
	_stopPropagation(e: qx_event_type_Mouse): void;
}
interface qx_html_CanvasStatic {
	new(styles: any, attributes: any): qx_html_Canvas;
}
interface qx_html_Canvas extends qx_html_Element {
	_createDomElement(): void;
	getCanvas(): HTMLCanvasElement;
	getContext2d(): CanvasRenderingContext2D;
	getHeight(): number;
	getWidth(): number;
	setHeight(height: number): void;
	setWidth(width: number): void;
}
interface qx_html_DecoratorStatic {
	new(decorator: qx_ui_decoration_IDecorator, decoratorId: string): qx_html_Decorator;
}
interface qx_html_Decorator extends qx_html_Element {
	getDecorator(): qx_ui_decoration_IDecorator;
	getId(): string;
	getInsets(): any;
	resize(width: number, height: number): void;
	tint(color: qx_theme_classic_Color): void;
	tint(color: any): void;
}
interface qx_html_ElementStatic {
	__getCaptureElement(): Element;
	__getFocusHandler(): qx_event_handler_Focus;
	__willBecomeInvisible(domElement: Element): bool;
	_scheduleFlush(job: string): void;
	flush(): void;
	new(tagName: string, styles: any, attributes: any): qx_html_Element;
}
interface qx_html_Element extends qx_core_Object {
	__addChildHelper(child: any): void;
	__flush(): void;
	__moveChildHelper(child: qx_html_Element): void;
	__onScroll(e: qx_event_type_Native): void;
	__performAction(action: string, args: any[]): void;
	__removeChildHelper(child: qx_html_Element): void;
	__willBeSeeable(): void;
	_applyProperty(name: string, value: any): qx_html_Element;
	_copyData(fromMarkup: bool): void;
	_createDomElement(): void;
	_getProperty(key: string): any;
	_insertChildren(): void;
	_removeProperty(key: string, direct: bool): qx_html_Element;
	_scheduleChildrenUpdate(): void;
	_setProperty(key: string, value: any, direct: bool): qx_html_Element;
	_syncChildren(): void;
	_syncData(): void;
	activate(): void;
	add(varargs: qx_html_Element): qx_html_Element;
	addAt(child: qx_html_Element, index: number): qx_html_Element;
	addListener(type: string, listener: qx_lang_Function, self: any, capture: bool): any;
	blur(): void;
	capture(containerCapture: bool): void;
	clearTextSelection(): void;
	deactivate(): void;
	disableScrolling(): void;
	enableScrolling(): void;
	exclude(): qx_html_Element;
	focus(): void;
	free(): qx_html_Element;
	getAllStyles(): any;
	getAttribute(key: string): any;
	getChild(index: number): qx_html_Element;
	getChildren(): any[];
	getDomElement(): Element;
	getNodeName(): string;
	getParent(): qx_html_Element;
	getScrollX(): number;
	getScrollY(): number;
	getStyle(key: string): any;
	getTextSelection(): string;
	getTextSelectionEnd(): number;
	getTextSelectionLength(): number;
	getTextSelectionStart(): number;
	hasChild(child: qx_html_Element): bool;
	hasChildren(): bool;
	hasListener(type: string, capture: bool): bool;
	hide(): qx_html_Element;
	include(): qx_html_Element;
	indexOf(child: qx_html_Element): number;
	insertAfter(rel: qx_html_Element): qx_html_Element;
	insertBefore(rel: qx_html_Element): qx_html_Element;
	insertInto(parent: qx_html_Element, index: number): qx_html_Element;
	isFocusable(): bool;
	isIncluded(): bool;
	isNativelyFocusable(): bool;
	isVisible(): bool;
	moveAfter(rel: qx_html_Element): qx_html_Element;
	moveBefore(rel: qx_html_Element): qx_html_Element;
	moveTo(index: number): qx_html_Element;
	releaseCapture(): void;
	remove(childs: qx_html_Element): qx_html_Element;
	removeAll(): qx_html_Element;
	removeAt(index: number): qx_html_Element;
	removeAttribute(key: string, direct: bool): qx_html_Element;
	removeListener(type: string, listener: qx_lang_Function, self: any, capture: bool): qx_html_Element;
	removeListenerById(id: any): qx_html_Element;
	removeStyle(key: string, direct: bool): qx_html_Element;
	scrollChildIntoViewX(elem: qx_html_Element, align: string, direct: bool): void;
	scrollChildIntoViewY(elem: qx_html_Element, align: string, direct: bool): void;
	scrollToX(x: number, lazy: bool): void;
	scrollToY(y: number, lazy: bool): void;
	setAttribute(key: string, value: any, direct: bool): qx_html_Element;
	setAttributes(map: any, direct: bool): qx_html_Element;
	setNodeName(name: string): void;
	setRoot(root: bool): void;
	setSelectable(value: bool): void;
	setStyle(key: string, value: any, direct: bool): qx_html_Element;
	setStyles(map: any, direct: bool): qx_html_Element;
	setTextSelection(start: number, end: number): void;
	show(): qx_html_Element;
	useElement(elem: Element): void;
	useMarkup(html: string): Element;
}
interface qx_html_FlashStatic {
	new(styles: any, attributes: any): qx_html_Flash;
}
interface qx_html_Flash extends qx_html_Element {
	_createDomElement(): void;
	createFlash(): void;
	getAttributes(): any;
	getFlashElement(): Element;
	getParams(): any;
	getVariables(): any;
	setAttribute(key: string, value: string): void;
	setAttribute(key: string, value: bool): void;
	setAttribute(key: string, value: any): void;
	setId(value: string): void;
	setParam(key: string, value: string): void;
	setParam(key: string, value: bool): void;
	setParam(key: string, value: any): void;
	setSource(value: string): void;
	setVariables(value: any): void;
}
interface qx_html_IframeStatic {
	new(url: string, styles: any, attributes: any): qx_html_Iframe;
}
interface qx_html_Iframe extends qx_html_Element {
	__onNavigate(e: qx_event_type_Data): void;
	_applyProperty(name: any, value: any): void;
	_createDomElement(): void;
	getBody(): Element;
	getDocument(): qx_bom_Document;
	getName(): string;
	getSource(): string;
	getWindow(): qx_bom_Window;
	reload(): void;
	setName(name: string): void;
	setSource(source: string): void;
}
interface qx_html_ImageStatic {
}
interface qx_html_Image extends qx_html_Element {
	_applyProperty(name: any, value: any): void;
	_copyData(fromMarkup: any): void;
	_createDomElement(): void;
	_removeProperty(key: any, direct: any): void;
	getScale(): bool;
	getSource(): string;
	resetSource(): void;
	setScale(value: bool): qx_html_Label;
	setSource(value: bool): qx_html_Label;
}
interface qx_html_InputStatic {
	new(type: string, styles: any, attributes: any): qx_html_Input;
}
interface qx_html_Input extends qx_html_Element {
	_applyProperty(name: any, value: any): void;
	_createDomElement(): void;
	getValue(): string;
	getWrap(): bool;
	setValue(value: any): qx_html_Input;
	setWrap(wrap: bool, direct: bool): qx_html_Input;
}
interface qx_html_LabelStatic {
}
interface qx_html_Label extends qx_html_Element {
	_applyProperty(name: any, value: any): void;
	_copyData(fromMarkup: any): void;
	_createDomElement(): void;
	getValue(): string;
	setRich(value: bool): qx_html_Label;
	setValue(value: string): qx_html_Label;
}
interface qx_html_RootStatic {
	new(elem: Element): qx_html_Root;
}
interface qx_html_Root extends qx_html_Element {
	useElement(elem: Element): void;
}
interface qx_InterfaceStatic {
	__assertEvents(clazz: qx_Class, iface: qx_Interface): void;
	__assertMembers(object: qx_core_Object, clazz: qx_Class, iface: qx_Interface, wrap: bool): void;
	__assertProperties(clazz: qx_Class, iface: qx_Interface): void;
	__isPropertyMethod(clazz: qx_Class, methodName: string): bool;
	__validateConfig(name: string, config: any): void;
	__wrapInterfaceMember(iface: string, origFunction: qx_lang_Function, functionName: string, preCondition: qx_lang_Function): qx_lang_Function;
	assert(clazz: qx_Class, iface: qx_Interface, wrap: bool): void;
	assertObject(object: qx_core_Object, iface: qx_Interface): void;
	define(name: string, config: any): void;
	flatten(ifaces: qx_Interface): any[];
	genericToString(): string;
	getByName(name: string): qx_Class;
	getTotalNumber(): number;
	isDefined(name: string): bool;
}
interface qx_Interface {
}
interface qx_io_ImageLoaderStatic {
	__getHeight(element: Element): number;
	__getWidth(element: Element): number;
	__onload(event: qx_bom_client_Event, element: Element, source: string): void;
	abort(source: string): void;
	getFormat(source: string): string;
	getHeight(source: string): number;
	getSize(source: string): any;
	getWidth(source: string): number;
	isFailed(source: string): bool;
	isLoaded(source: string): bool;
	isLoading(source: string): bool;
	load(source: string, callback: qx_lang_Function, context: any): void;
}
interface qx_io_ImageLoader {
}
interface qx_io_part_ClosurePartStatic {
	new(name: string, packages: qx_io_part_Package, loader: qx_Part): qx_io_part_ClosurePart;
}
interface qx_io_part_ClosurePart extends qx_io_part_Part {
	__executePackages(): void;
	_onPackageLoad(pkg: qx_io_part_Package): void;
	load(callback: qx_lang_Function, self: any): void;
	preload(callback: any, self: any): void;
}
interface qx_io_part_PackageStatic {
	new(urls: string, id: any, loaded: bool): qx_io_part_Package;
}
interface qx_io_part_Package {
	__importPackageData(packageData: any): void;
	__loadScriptList(urlList: string, callback: qx_lang_Function, errBack: qx_lang_Function, self: any): void;
	execute(): void;
	getId(): string;
	getReadyState(): string;
	getUrls(): string;
	load(notifyPackageResult: qx_lang_Function, self: any): void;
	loadClosure(notifyPackageResult: qx_lang_Function, self: any): void;
	saveClosure(closure: qx_lang_Function): void;
}
interface qx_io_part_PartStatic {
	new(name: string, packages: qx_io_part_Package, loader: qx_Part): qx_io_part_Part;
}
interface qx_io_part_Part {
	_appendPartListener(callback: qx_lang_Function, self: any, part: qx_io_part_Part): void;
	_appendPartListener(callback: qx_lang_Function, self: any, part: qx_io_part_ClosurePart): void;
	_checkCompleteLoading(callback: qx_lang_Function, self: any): bool;
	_markAsCompleted(readyState: string): void;
	_signalStartup(): void;
	getName(): string;
	getPackages(): qx_io_part_Package;
	getReadyState(): string;
	load(callback: qx_lang_Function, self: any): void;
	preload(callback: qx_lang_Function, self: any): void;
}
interface qx_io_PartLoaderStatic {
	getInstance(): qx_io_PartLoader;
	require(partNames: string, callback: qx_lang_Function, self: any): void;
	new(): qx_io_PartLoader;
}
interface qx_io_PartLoader extends qx_core_Object {
	getPart(name: string): qx_io_part_Part;
	getParts(): any;
	hasPart(name: string): bool;
	require(partNames: string, callback: qx_lang_Function, self: any): void;
}
interface qx_io_remote_ExchangeStatic {
	canHandle(vImpl: any, vNeeds: any, vResponseType: string): void;
	initTypes(): void;
	registerType(vClass: any, vId: string): void;
	statusCodeToString(vStatusCode: number): string;
	wasSuccessful(vStatusCode: number, vReadyState: string, vIsLocal: bool): bool;
	new(vRequest: qx_io_remote_Request): qx_io_remote_Exchange;
}
interface qx_io_remote_Exchange extends qx_core_Object {
	__disableRequestTimeout(): void;
	_applyImplementation(value: any, old: any): void;
	_applyState(value: any, old: any): void;
	_onabort(e: qx_event_type_Event): void;
	_oncompleted(e: qx_event_type_Event): void;
	_onfailed(e: qx_event_type_Event): void;
	_onreceiving(e: qx_event_type_Event): void;
	_onsending(e: qx_event_type_Event): void;
	_ontimeout(e: qx_event_type_Event): void;
	abort(): void;
	getImplementation(): any;
	getRequest(): any;
	getState(): any;
	initImplementation(value: any): any;
	initRequest(value: any): any;
	initState(value: any): any;
	resetImplementation(): void;
	resetRequest(): void;
	resetState(): void;
	send(): any;
	setImplementation(value: any): any;
	setRequest(value: any): any;
	setState(value: any): any;
	timeout(): void;
}
interface qx_io_remote_RequestStatic {
	methodAllowsRequestBody(httpMethod: string): bool;
	new(vUrl: string, vMethod: string, vResponseType: string): qx_io_remote_Request;
}
interface qx_io_remote_Request extends qx_core_Object {
	_applyMethod(value: any, old: any): void;
	_applyProhibitCaching(value: any, old: any): void;
	_applyResponseType(value: any, old: any): void;
	_applyState(value: any, old: any): void;
	_onaborted(e: qx_event_type_Event): void;
	_oncompleted(e: qx_event_type_Event): void;
	_onfailed(e: qx_event_type_Event): void;
	_onqueued(e: qx_event_type_Event): void;
	_onreceiving(e: qx_event_type_Event): void;
	_onsending(e: qx_event_type_Event): void;
	_ontimeout(e: qx_event_type_Event): void;
	abort(): void;
	getAsynchronous(): any;
	getCrossDomain(): any;
	getData(): any;
	getFileUpload(): any;
	getFormField(vId: string): string;
	getFormFields(): any;
	getMethod(): any;
	getParameter(vId: string, bFromData: bool): any;
	getParameters(bFromData: bool): any;
	getParseJson(): any;
	getPassword(): any;
	getProhibitCaching(): any;
	getRequestHeader(vId: string): string;
	getRequestHeaders(): any;
	getResponseType(): any;
	getSequenceNumber(): number;
	getState(): any;
	getTimeout(): any;
	getTransport(): any;
	getUrl(): any;
	getUseBasicHttpAuth(): any;
	getUsername(): any;
	initAsynchronous(value: any): any;
	initCrossDomain(value: any): any;
	initData(value: any): any;
	initFileUpload(value: any): any;
	initMethod(value: any): any;
	initParseJson(value: any): any;
	initPassword(value: any): any;
	initProhibitCaching(value: any): any;
	initResponseType(value: any): any;
	initState(value: any): any;
	initTimeout(value: any): any;
	initTransport(value: any): any;
	initUrl(value: any): any;
	initUseBasicHttpAuth(value: any): any;
	initUsername(value: any): any;
	isAborted(): bool;
	isAsynchronous(): bool;
	isCompleted(): bool;
	isConfigured(): bool;
	isCrossDomain(): bool;
	isFailed(): bool;
	isFileUpload(): bool;
	isParseJson(): bool;
	isQueued(): bool;
	isReceiving(): bool;
	isSending(): bool;
	isTimeout(): bool;
	isUseBasicHttpAuth(): bool;
	removeFormField(vId: string): void;
	removeParameter(vId: string, bFromData: bool): void;
	removeRequestHeader(vId: string): void;
	reset(): void;
	resetAsynchronous(): void;
	resetCrossDomain(): void;
	resetData(): void;
	resetFileUpload(): void;
	resetMethod(): void;
	resetParseJson(): void;
	resetPassword(): void;
	resetProhibitCaching(): void;
	resetResponseType(): void;
	resetState(): void;
	resetTimeout(): void;
	resetTransport(): void;
	resetUrl(): void;
	resetUseBasicHttpAuth(): void;
	resetUsername(): void;
	send(): void;
	setAsynchronous(value: any): any;
	setCrossDomain(value: any): any;
	setData(value: any): any;
	setFileUpload(value: any): any;
	setFormField(vId: string, vValue: string): void;
	setMethod(value: any): any;
	setParameter(vId: string, vValue: any, bAsData: bool): void;
	setParseJson(value: any): any;
	setPassword(value: any): any;
	setProhibitCaching(value: any): any;
	setRequestHeader(vId: string, vValue: string): void;
	setResponseType(value: any): any;
	setState(value: any): any;
	setTimeout(value: any): any;
	setTransport(value: any): any;
	setUrl(value: any): any;
	setUseBasicHttpAuth(value: any): any;
	setUsername(value: any): any;
	toggleAsynchronous(): bool;
	toggleCrossDomain(): bool;
	toggleFileUpload(): bool;
	toggleParseJson(): bool;
	toggleUseBasicHttpAuth(): bool;
}
interface qx_io_remote_RequestQueueStatic {
	getInstance(): qx_io_remote_RequestQueue;
	new(): qx_io_remote_RequestQueue;
}
interface qx_io_remote_RequestQueue extends qx_core_Object {
	_applyEnabled(value: bool, old: bool): void;
	_check(): void;
	_debug(): void;
	_oncompleted(e: qx_event_type_Event): void;
	_oninterval(e: qx_event_type_Event): void;
	_onreceiving(e: qx_event_type_Event): void;
	_onsending(e: qx_event_type_Event): void;
	_remove(vTransport: qx_io_remote_Exchange): void;
	abort(vRequest: any): void;
	add(vRequest: any): void;
	getActiveQueue(): qx_io_remote_Exchange;
	getDefaultTimeout(): any;
	getEnabled(): any;
	getMaxConcurrentRequests(): any;
	getMaxTotalRequests(): any;
	getRequestQueue(): qx_io_remote_Request;
	initDefaultTimeout(value: any): any;
	initEnabled(value: any): any;
	initMaxConcurrentRequests(value: any): any;
	initMaxTotalRequests(value: any): any;
	isEnabled(): bool;
	resetDefaultTimeout(): void;
	resetEnabled(): void;
	resetMaxConcurrentRequests(): void;
	resetMaxTotalRequests(): void;
	setDefaultTimeout(value: any): any;
	setEnabled(value: any): any;
	setMaxConcurrentRequests(value: any): any;
	setMaxTotalRequests(value: any): any;
	toggleEnabled(): bool;
}
interface qx_io_remote_ResponseStatic {
}
interface qx_io_remote_Response extends qx_event_type_Event {
	_applyResponseHeaders(value: any, old: any): void;
	clone(embryo: any): void;
	getContent(): any;
	getResponseHeader(vHeader: string): any;
	getResponseHeaders(): any;
	getState(): any;
	getStatusCode(): any;
	initContent(value: any): any;
	initResponseHeaders(value: any): any;
	initState(value: any): any;
	initStatusCode(value: any): any;
	resetContent(): void;
	resetResponseHeaders(): void;
	resetState(): void;
	resetStatusCode(): void;
	setContent(value: any): any;
	setResponseHeaders(value: any): any;
	setState(value: any): any;
	setStatusCode(value: any): any;
}
interface qx_io_remote_RpcStatic {
	makeServerURL(instanceId: string): string;
	new(url: string, serviceName: string): qx_io_remote_Rpc;
}
interface qx_io_remote_Rpc extends qx_core_Object {
	_callInternal(args: any[], callType: number, refreshSession: bool): any;
	_isConvertDates(): bool;
	_isResponseJson(): bool;
	abort(opaqueCallRef: any): void;
	callAsync(handler: qx_lang_Function, methodName: string): any;
	callAsyncListeners(coalesce: bool, methodName: string): any;
	callSync(methodName: string): any;
	createRequest(): qx_io_remote_Request;
	createRpcData(id: number, method: string, parameters: any[], serverData: any): any;
	fixUrl(url: string): string;
	getCrossDomain(): any;
	getPassword(): any;
	getProtocol(): any;
	getServerData(): any;
	getServiceName(): any;
	getTimeout(): any;
	getUrl(): any;
	getUseBasicHttpAuth(): any;
	getUsername(): any;
	initCrossDomain(value: any): any;
	initPassword(value: any): any;
	initProtocol(value: any): any;
	initServerData(value: any): any;
	initServiceName(value: any): any;
	initTimeout(value: any): any;
	initUrl(value: any): any;
	initUseBasicHttpAuth(value: any): any;
	initUsername(value: any): any;
	isCrossDomain(): bool;
	isUseBasicHttpAuth(): bool;
	refreshSession(handler: qx_lang_Function): void;
	resetCrossDomain(): void;
	resetPassword(): void;
	resetProtocol(): void;
	resetServerData(): void;
	resetServiceName(): void;
	resetTimeout(): void;
	resetUrl(): void;
	resetUseBasicHttpAuth(): void;
	resetUsername(): void;
	setCrossDomain(value: any): any;
	setPassword(value: any): any;
	setProtocol(value: any): any;
	setServerData(value: any): any;
	setServiceName(value: any): any;
	setTimeout(value: any): any;
	setUrl(value: any): any;
	setUseBasicHttpAuth(value: any): any;
	setUsername(value: any): any;
	toggleCrossDomain(): bool;
	toggleUseBasicHttpAuth(): bool;
}
interface qx_io_remote_RpcErrorStatic {
}
interface qx_io_remote_RpcError {
}
interface qx_io_remote_transport_AbstractStatic {
	new(): qx_io_remote_transport_Abstract;
}
interface qx_io_remote_transport_Abstract extends qx_core_Object {
	_applyState(value: any, old: any): void;
	abort(): void;
	failed(): void;
	getAsynchronous(): any;
	getData(): any;
	getFetchedLength(): number;
	getFormFields(): any;
	getMethod(): any;
	getParameters(): any;
	getPassword(): any;
	getRequestHeaders(): any;
	getResponseHeader(vLabel: string): any;
	getResponseHeaders(): any;
	getResponseText(): string;
	getResponseType(): any;
	getResponseXml(): any;
	getState(): any;
	getStatusCode(): number;
	getStatusText(): string;
	getUrl(): any;
	getUseBasicHttpAuth(): any;
	getUsername(): any;
	initAsynchronous(value: any): any;
	initData(value: any): any;
	initFormFields(value: any): any;
	initMethod(value: any): any;
	initParameters(value: any): any;
	initPassword(value: any): any;
	initRequestHeaders(value: any): any;
	initResponseType(value: any): any;
	initState(value: any): any;
	initUrl(value: any): any;
	initUseBasicHttpAuth(value: any): any;
	initUsername(value: any): any;
	isAsynchronous(): bool;
	isUseBasicHttpAuth(): bool;
	resetAsynchronous(): void;
	resetData(): void;
	resetFormFields(): void;
	resetMethod(): void;
	resetParameters(): void;
	resetPassword(): void;
	resetRequestHeaders(): void;
	resetResponseType(): void;
	resetState(): void;
	resetUrl(): void;
	resetUseBasicHttpAuth(): void;
	resetUsername(): void;
	send(): void;
	setAsynchronous(value: any): any;
	setData(value: any): any;
	setFormFields(value: any): any;
	setMethod(value: any): any;
	setParameters(value: any): any;
	setPassword(value: any): any;
	setRequestHeader(vLabel: string, vValue: any): void;
	setRequestHeaders(value: any): any;
	setResponseType(value: any): any;
	setState(value: any): any;
	setUrl(value: any): any;
	setUseBasicHttpAuth(value: any): any;
	setUsername(value: any): any;
	timeout(): void;
	toggleAsynchronous(): bool;
	toggleUseBasicHttpAuth(): bool;
}
interface qx_io_remote_transport_IframeStatic {
	isSupported(): bool;
	new(): qx_io_remote_transport_Iframe;
}
interface qx_io_remote_transport_Iframe extends qx_io_remote_transport_Abstract {
	_onload(e: qx_event_type_Event): void;
	_onreadystatechange(e: qx_event_type_Event): void;
	_switchReadyState(vReadyState: string): void;
	getFetchedLength(): number;
	getIframeBody(): any;
	getIframeDocument(): any;
	getIframeHtmlContent(): string;
	getIframeTextContent(): string;
	getIframeWindow(): any;
	getResponseContent(): any;
	getResponseHeader(vLabel: string): any;
	getResponseHeaders(): any;
	getStatusCode(): number;
	getStatusText(): string;
	send(): void;
	setRequestHeader(vLabel: string, vValue: any): void;
}
interface qx_io_remote_transport_ScriptStatic {
	_requestFinished(id: string, content: string): void;
	isSupported(): void;
	new(): qx_io_remote_transport_Script;
}
interface qx_io_remote_transport_Script extends qx_io_remote_transport_Abstract {
	_switchReadyState(vReadyState: string): void;
	getFetchedLength(): number;
	getResponseContent(): any;
	getResponseHeader(vLabel: string): any;
	getResponseHeaders(): any;
	getStatusCode(): number;
	getStatusText(): string;
	send(): void;
	setRequestHeader(vLabel: string, vValue: any): void;
}
interface qx_io_remote_transport_XmlHttpStatic {
	createRequestObject(): any;
	isSupported(): bool;
}
interface qx_io_remote_transport_XmlHttp extends qx_io_remote_transport_Abstract {
	_applyState(value: any, old: any): void;
	_onreadystatechange(e: qx_bom_client_Event): void;
	failedLocally(): void;
	getFetchedLength(): number;
	getParseJson(): any;
	getReadyState(): number;
	getRequest(): any;
	getResponseContent(): any;
	getResponseHeader(vLabel: string): string;
	getResponseHeaders(): any;
	getResponseText(): string;
	getResponseXml(): string;
	getStatusCode(): number;
	getStatusText(): string;
	getStringResponseHeaders(): any;
	initParseJson(value: any): any;
	isParseJson(): bool;
	resetParseJson(): void;
	send(): void;
	setParseJson(value: any): any;
	setRequestHeader(vLabel: string, vValue: any): void;
	toggleParseJson(): bool;
}
interface qx_io_request_AbstractRequestStatic {
	new(url: string): qx_io_request_AbstractRequest;
}
interface qx_io_request_AbstractRequest extends qx_core_Object {
	__getAuthRequestHeaders(): any;
	__onReadyStateDone(): void;
	_createTransport(): any;
	_fireStatefulEvent(evt: string): void;
	_getAllRequestHeaders(): any;
	_getConfiguredRequestHeaders(): any;
	_getConfiguredUrl(): string;
	_getMethod(): string;
	_getParsedResponse(): string;
	_isAsync(): bool;
	_onAbort(): void;
	_onError(): void;
	_onLoad(): void;
	_onLoadEnd(): void;
	_onReadyStateChange(): void;
	_onTimeout(): void;
	_serializeData(data: string): string;
	_serializeData(data: any): string;
	_serializeData(data: qx_core_Object): string;
	_setPhase(phase: string): void;
	_setRequestHeaders(): void;
	_setResponse(response: string): void;
	abort(): void;
	getAllResponseHeaders(): string;
	getAuthentication(): any;
	getPhase(): string;
	getReadyState(): number;
	getRequestData(): any;
	getRequestHeader(key: string): string;
	getResponse(): string;
	getResponseContentType(): string;
	getResponseHeader(key: string): string;
	getResponseText(): string;
	getStatus(): number;
	getStatusText(): string;
	getTimeout(): any;
	getTransport(): any;
	getUrl(): any;
	initAuthentication(value: any): any;
	initRequestData(value: any): any;
	initTimeout(value: any): any;
	initUrl(value: any): any;
	isDone(): void;
	removeRequestHeader(key: string): void;
	resetAuthentication(): void;
	resetRequestData(): void;
	resetTimeout(): void;
	resetUrl(): void;
	send(): void;
	setAuthentication(value: any): any;
	setRequestData(value: any): any;
	setRequestHeader(key: string, value: string): void;
	setTimeout(value: any): any;
	setUrl(value: any): any;
}
interface qx_io_request_authentication_BasicStatic {
	new(username: any, password: any): qx_io_request_authentication_Basic;
}
interface qx_io_request_authentication_Basic extends qx_core_Object {
	getAuthHeaders(): void;
}
interface qx_io_request_authentication_IAuthenticationStatic {
}
interface qx_io_request_authentication_IAuthentication {
	getAuthHeaders(): any;
}
interface qx_io_request_JsonpStatic {
}
interface qx_io_request_Jsonp extends qx_io_request_AbstractRequest {
	_createTransport(): qx_bom_request_Jsonp;
	_getConfiguredUrl(): string;
	_getParsedResponse(): any;
	getCache(): any;
	initCache(value: any): any;
	isCache(): bool;
	resetCache(): void;
	setCache(value: any): any;
	setCallbackName(name: string): void;
	setCallbackParam(param: string): void;
	toggleCache(): bool;
}
interface qx_io_request_XhrStatic {
	new(url: string, method: string): qx_io_request_Xhr;
}
interface qx_io_request_Xhr extends qx_io_request_AbstractRequest {
	_createTransport(): qx_bom_request_Xhr;
	_getConfiguredRequestHeaders(): void;
	_getConfiguredUrl(): string;
	_getMethod(): void;
	_getParsedResponse(): string;
	_getParser(): qx_lang_Function;
	_isAsync(): void;
	getAccept(): any;
	getAsync(): any;
	getCache(): any;
	getMethod(): any;
	initAccept(value: any): any;
	initAsync(value: any): any;
	initCache(value: any): any;
	initMethod(value: any): any;
	isAsync(): bool;
	resetAccept(): void;
	resetAsync(): void;
	resetCache(): void;
	resetMethod(): void;
	setAccept(value: any): any;
	setAsync(value: any): any;
	setCache(value: any): any;
	setMethod(value: any): any;
	setParser(parser: string): void;
	setParser(parser: qx_lang_Function): void;
	toggleAsync(): bool;
}
interface qx_io_rest_ResourceStatic {
	placeholdersFromUrl(url: string): any[];
	new(description: any): qx_io_rest_Resource;
}
interface qx_io_rest_Resource extends qx_core_Object {
	__checkParameters(params: any, check: any): void;
	__configureJsonRequest(req: qx_io_request_AbstractRequest, config: any, data: any): void;
	__configureRequest(req: qx_io_request_AbstractRequest, config: any, data: any): void;
	__createRequest(action: string): void;
	__declareEvent(type: string): void;
	__mapFromDescription(description: any): void;
	_getRequest(): void;
	_getRequestConfig(action: string, params: any): any;
	_getThrottleCount(): void;
	_getThrottleLimit(): void;
	abort(varargs: string): void;
	abort(varargs: number): void;
	configureRequest(callback: qx_lang_Function): void;
	invoke(action: string, params: any, data: any): number;
	invoke(action: string, params: any, data: any[]): number;
	invoke(action: string, params: any, data: string): number;
	longPoll(action: string): string;
	map(action: string, method: string, url: string, check: any): void;
	poll(action: string, interval: number, params: any): qx_event_Timer;
	refresh(action: string): void;
	setBaseUrl(baseUrl: string): void;
}
interface qx_io_ScriptLoaderStatic {
	new(): qx_io_ScriptLoader;
}
interface qx_io_ScriptLoader {
	__onevent(e: qx_bom_client_Event): void;
	_getTimeout(): number;
	abort(): void;
	dispose(status: string): void;
	load(url: string, callback: qx_lang_Function, context: any): void;
}
interface qx_lang_ArrayStatic {
	append(arr1: any[], arr2: any[]): any[];
	cast(object: any, constructor: qx_lang_Function, offset: number): any[];
	clone(arr: any[]): any[];
	contains(arr: any[], obj: any): bool;
	equals(arr1: any[], arr2: any[]): bool;
	exclude(arr1: any[], arr2: any[]): any[];
	fromArguments(args: any, offset: number): any[];
	fromCollection(coll: any): any[];
	fromShortHand(input: any[]): any[];
	insertAfter(arr: any[], obj: any, obj2: any): any[];
	insertAt(arr: any[], obj: any, i: number): any[];
	insertBefore(arr: any[], obj: any, obj2: any): any[];
	max(arr: number): number;
	min(arr: number): number;
	remove(arr: any[], obj: any): any;
	removeAll(arr: any[]): any[];
	removeAt(arr: any[], i: number): any;
	sum(arr: number): number;
	toArray(object: any, offset: number): any[];
	unique(arr: any[]): any[];
}
interface qx_lang_Array {
}
interface qx_lang_CoreStatic {
	arrayEvery(callback: qx_lang_Function, obj: any): bool;
	arrayFilter(callback: qx_lang_Function, obj: any): any[];
	arrayForEach(callback: qx_lang_Function, obj: any): void;
	arrayIndexOf(searchElement: any, fromIndex: number): number;
	arrayLastIndexOf(searchElement: any, fromIndex: number): number;
	arrayMap(callback: qx_lang_Function, obj: any): any[];
	errorToString(): string;
	stringQuote(): string;
}
interface qx_lang_Core {
}
interface qx_lang_DateStatic {
	now(): number;
}
interface qx_lang_Date {
}
interface qx_lang_FunctionStatic {
	attempt(func: qx_lang_Function, self: any, varargs: any): bool;
	bind(func: qx_lang_Function, self: any, varargs: any): qx_lang_Function;
	create(func: qx_lang_Function, options: any): qx_lang_Function;
	curry(func: qx_lang_Function, varargs: any): any;
	delay(func: qx_lang_Function, delay: number, self: any, varargs: any): number;
	empty(): void;
	getCaller(args: any): qx_lang_Function;
	getName(fcn: qx_lang_Function): string;
	globalEval(data: string): any;
	listener(func: qx_lang_Function, self: any, varargs: any): any;
	periodical(func: qx_lang_Function, interval: number, self: any, varargs: any): number;
	returnFalse(): bool;
	returnNull(): any;
	returnThis(): any;
	returnTrue(): bool;
	returnZero(): number;
}
interface qx_lang_Function {
}
interface qx_lang_GenericsStatic {
	__init(): void;
	__wrap(obj: any, func: string): qx_lang_Function;
}
interface qx_lang_Generics {
}
interface qx_lang_JsonStatic {
	parse(text: string, reviver: qx_lang_Function): any;
	stringify(value: any, replacer: qx_lang_Function, space: string): string;
}
interface qx_lang_Json {
}
interface qx_lang_JsonImplStatic {
	new(): qx_lang_JsonImpl;
}
interface qx_lang_JsonImpl {
	__quote(string: string): string;
	__str(key: string, holder: any): string;
	__walk(holder: any, key: string, reviver: qx_lang_Function): void;
	dateToJSON(date: qx_lang_Date): string;
	parse(text: string, reviver: qx_lang_Function): any;
	stringify(value: any, replacer: qx_lang_Function, space: string): string;
}
interface qx_lang_NumberStatic {
	isBetweenRange(nr: number, vmin: number, vmax: number): bool;
	isInRange(nr: number, vmin: number, vmax: number): bool;
	limit(nr: number, vmin: number, vmax: number): number;
}
interface qx_lang_Number {
}
interface qx_lang_ObjectStatic {
	__toUriParameter(key: string, value: string, parts: any[], post: bool): void;
	carefullyMergeWith(target: any, source: any): any;
	clone(source: any, deep: bool): any;
	contains(map: any, value: any): bool;
	empty(map: any): void;
	fromArray(array: any[]): any;
	getKeyFromValue(map: any, value: any): string;
	getKeys(map: any): any[];
	getKeysAsString(map: any): string;
	getLength(map: any): number;
	getValues(map: any): any[];
	hasMinLength(map: any, minLength: number): bool;
	invert(map: any): any;
	isEmpty(map: any): bool;
	merge(target: any, varargs: any): any;
	mergeWith(target: any, source: any, overwrite: bool): any;
	select(key: string, map: any): any;
	toUriParameter(obj: any, post: bool): string;
}
interface qx_lang_Object {
}
interface qx_lang_RingBufferStatic {
	new(maxEntries: number): qx_lang_RingBuffer;
}
interface qx_lang_RingBuffer {
	__addToIndex(idx: number, addMe: number): void;
	addEntry(entry: any): void;
	clear(): void;
	clearMark(): void;
	getAllEntries(): any[];
	getEntries(count: number, startingFromMark: bool): any[];
	getMaxEntries(): number;
	mark(): void;
	setMaxEntries(maxEntries: number): void;
}
interface qx_lang_StringStatic {
	camelCase(str: string): string;
	capitalize(str: string): string;
	clean(str: string): string;
	contains(str: string, substring: string): bool;
	endsWith(fullstr: string, substr: string): bool;
	escapeRegexpChars(str: string): string;
	firstLow(str: string): string;
	firstUp(str: string): string;
	format(pattern: string, args: any[]): string;
	hyphenate(str: string): string;
	pad(str: string, length: number, ch: string): string;
	repeat(str: string, times: number): string;
	startsWith(fullstr: string, substr: string): bool;
	stripScripts(str: string, exec: bool): string;
	stripTags(str: string): string;
	toArray(str: string): any[];
	trim(str: string): string;
	trimLeft(str: string): string;
	trimRight(str: string): string;
}
interface qx_lang_String {
}
interface qx_lang_TypeStatic {
	getClass(value: any): string;
	isArray(value: any): bool;
	isBoolean(value: any): bool;
	isDate(value: any): bool;
	isError(value: any): bool;
	isFunction(value: any): bool;
	isNumber(value: any): bool;
	isObject(value: any): bool;
	isRegExp(value: any): bool;
	isString(value: any): bool;
}
interface qx_lang_Type {
}
interface qx_locale_DateStatic {
	__localizeWithFallback(context: string, fallbackContext: string, key: string, locale: string): string;
	_getTerritory(locale: string): string;
	getAmMarker(locale: string): string;
	getDateFormat(size: string, locale: string): string;
	getDateTimeFormat(canonical: string, fallback: string, locale: string): string;
	getDayName(length: string, day: number, locale: string, context: string, withFallback: bool): string;
	getDayNames(length: string, locale: string, context: string, withFallback: bool): string;
	getMonthName(length: string, month: number, locale: string, context: string, withFallback: bool): string;
	getMonthNames(length: string, locale: string, context: string, withFallback: bool): string;
	getPmMarker(locale: string): string;
	getTimeFormat(size: string, locale: string): string;
	getWeekendEnd(locale: string): number;
	getWeekendStart(locale: string): number;
	getWeekStart(locale: string): number;
	isWeekend(day: number, locale: string): bool;
}
interface qx_locale_Date {
}
interface qx_locale_KeyStatic {
	getKeyName(size: string, keyIdentifier: string, locale: string): string;
}
interface qx_locale_Key {
}
interface qx_locale_LocalizedStringStatic {
	new(translation: string, messageId: string, args: any[]): qx_locale_LocalizedString;
}
interface qx_locale_LocalizedString extends qx_type_BaseString {
	translate(): qx_locale_LocalizedString;
}
interface qx_locale_ManagerStatic {
	getInstance(): qx_locale_Manager;
	marktr(messageId: string): string;
	tr(messageId: string, varargs: any): string;
	trc(hint: string, messageId: string, varargs: any): string;
	trn(singularMessageId: string, pluralMessageId: string, count: number, varargs: any): string;
	new(): qx_locale_Manager;
}
interface qx_locale_Manager extends qx_core_Object {
	__extractLanguage(locale: string): string;
	__lookupAndExpand(catalog: any, messageId: string, args: any, locale: string): string;
	_applyLocale(value: string, old: string): void;
	addLocale(localeCode: string, localeMap: any): void;
	addTranslation(languageCode: string, translationMap: any): void;
	getAvailableLocales(includeNonloaded: bool): string;
	getLanguage(): string;
	getLocale(): any;
	getTerritory(): string;
	initLocale(value: any): any;
	localize(messageId: string, args: any, locale: string): string;
	resetLocale(): void;
	setLocale(value: any): any;
	translate(messageId: string, args: any, locale: string): string;
}
interface qx_locale_MTranslationStatic {
}
interface qx_locale_MTranslation {
	marktr(messageId: string): string;
	tr(messageId: string, varargs: any): string;
	trc(hint: string, messageId: string, varargs: any): string;
	trn(singularMessageId: string, pluralMessageId: string, count: number, varargs: any): string;
}
interface qx_locale_NumberStatic {
	getDecimalSeparator(locale: string): string;
	getGroupSeparator(locale: string): string;
	getPercentFormat(locale: string): string;
}
interface qx_locale_Number {
}
interface qx_locale_StringStatic {
	getAlternateQuotationEnd(locale: string): string;
	getAlternateQuotationStart(locale: string): string;
	getQuotationEnd(locale: string): string;
	getQuotationStart(locale: string): string;
}
interface qx_locale_String {
}
interface qx_log_appender_ConsoleStatic {
	__onKeyPress(e: qx_bom_client_Event): void;
	__onResize(e: qx_bom_client_Event): void;
	__scrollDown(): void;
	clear(): void;
	dispose(): void;
	execute(): void;
	init(): void;
	process(entry: any): void;
	show(): void;
	toggle(): void;
}
interface qx_log_appender_Console {
}
interface qx_log_appender_ElementStatic {
	new(element: Element): qx_log_appender_Element;
}
interface qx_log_appender_Element extends qx_core_Object {
	clear(): void;
	process(entry: any): void;
	setElement(element: Element): void;
}
interface qx_log_appender_NativeStatic {
	process(entry: any): void;
}
interface qx_log_appender_Native {
}
interface qx_log_appender_NodeConsoleStatic {
	debug(logMessage: string): void;
	error(logMessage: string): void;
	info(logMessage: string): void;
	log(logMessage: string, level: string): void;
	process(entry: any): void;
	warn(logMessage: string): void;
}
interface qx_log_appender_NodeConsole {
}
interface qx_log_appender_PhoneGapStatic {
	process(entry: any): void;
}
interface qx_log_appender_PhoneGap {
}
interface qx_log_appender_RhinoConsoleStatic {
	debug(logMessage: string): void;
	error(logMessage: string): void;
	info(logMessage: string): void;
	log(logMessage: string, level: string): void;
	process(entry: any): void;
	warn(logMessage: string): void;
}
interface qx_log_appender_RhinoConsole {
}
interface qx_log_appender_RhinoFileStatic {
	create(): void;
	debug(logMessage: string): void;
	error(logMessage: string): void;
	info(logMessage: string): void;
	log(logMessage: string, level: string): void;
	process(entry: any): void;
	warn(logMessage: string): void;
}
interface qx_log_appender_RhinoFile {
}
interface qx_log_appender_RingBufferStatic {
	new(maxMessages: number): qx_log_appender_RingBuffer;
}
interface qx_log_appender_RingBuffer extends qx_lang_RingBuffer {
	clearHistory(): void;
	getAllLogEvents(): any[];
	getMaxMessages(): number;
	process(entry: any): void;
	retrieveLogEvents(count: number, startingFromMark: bool): any[];
	setMaxMessages(maxMessages: number): void;
}
interface qx_log_appender_UtilStatic {
	__escapeHTMLReplace(ch: string): string;
	escapeHTML(value: string): string;
	formatOffset(offset: number, length: number): string;
	toHtml(entry: any): void;
	toText(entry: any): string;
	toTextArray(entry: any): any[];
}
interface qx_log_appender_Util {
}
interface qx_log_LoggerStatic {
	__detect(value: any): string;
	__log(level: string, args: any[]): void;
	__serialize(value: any, deep: bool): any;
	clear(): void;
	debug(object: any, message: any): void;
	deprecatedClassWarning(clazz: qx_Class, msg: string): void;
	deprecatedConstantWarning(clazz: qx_Class, constant: string, msg: string): void;
	deprecatedEventWarning(clazz: qx_Class, event: string, msg: string): void;
	deprecatedMethodWarning(fcn: qx_lang_Function, msg: string): void;
	deprecatedMixinWarning(clazz: qx_Class, msg: string): void;
	deprecateMethodOverriding(object: qx_core_Object, baseclass: qx_Class, methodName: string, msg: string): void;
	deprecateMethodOverriding(object: qx_core_Object, baseclass: qx_Class, methodName: string, msg: any): void;
	error(object: any, message: any): void;
	getLevel(): number;
	getTreshold(): number;
	info(object: any, message: any): void;
	register(appender: qx_Class): void;
	setLevel(value: string): void;
	setTreshold(value: number): void;
	trace(object: any): void;
	unregister(appender: qx_Class): void;
	warn(object: any, message: any): void;
}
interface qx_log_Logger {
}
interface qx_MixinStatic {
	__validateConfig(name: string, config: any): void;
	checkCompatibility(mixins: qx_Mixin): void;
	define(name: string, config: any): void;
	flatten(mixins: qx_Mixin): any[];
	genericToString(): string;
	getByName(name: string): qx_Class;
	getTotalNumber(): number;
	isCompatible(mixin: qx_Mixin, clazz: qx_Class): bool;
	isDefined(name: string): bool;
}
interface qx_Mixin {
}
interface qx_module_AnimationStatic {
	$init(): void;
	animate(desc: any, duration: number): q;
	animateReverse(desc: any, duration: number): q;
	fadeIn(duration: number): q;
	fadeOut(duration: number): q;
	isEnded(): bool;
	isPlaying(): bool;
	pause(): q;
	play(): q;
	stop(): q;
}
interface qx_module_Animation {
}
interface qx_module_AttributeStatic {
	getAttribute(name: string): any;
	getAttributes(names: string): any;
	getHtml(): string;
	getProperties(names: string): any;
	getProperty(name: string): any;
	getValue(): string;
	removeAttribute(name: string): q;
	removeAttributes(attributes: string): q;
	setAttribute(name: string, value: any): q;
	setAttributes(attributes: any): q;
	setHtml(html: string): q;
	setProperties(properties: any): q;
	setProperty(name: string, value: any): q;
	setValue(value: string): q;
	setValue(value: number): q;
	setValue(value: any[]): q;
}
interface qx_module_Attribute {
}
interface qx_module_BlockerStatic {
	__attachBlocker(item: Element, color: string, opacity: number, zIndex: number): void;
	__attachBlocker(item: Document, color: string, opacity: number, zIndex: number): void;
	__detachBlocker(item: Element, index: number): void;
	__getIframeElement(win: qx_bom_Window): HTMLIFrameElement;
	__onWindowResize(ev: qx_module_Event): void;
	__styleBlocker(item: Element, color: string, opacity: number, zIndex: number, isDocument: bool): void;
	__styleBlocker(item: Document, color: string, opacity: number, zIndex: number, isDocument: bool): void;
	block(color: string, opacity: number, zIndex: number): q;
	unblock(): q;
}
interface qx_module_Blocker {
}
interface qx_module_CookieStatic {
	del(key: string, path: string, domain: string): void;
	get(key: string): string;
	set(key: string, value: string, expires: number, path: string, domain: string, secure: bool): void;
}
interface qx_module_Cookie {
}
interface qx_module_CssStatic {
	addClass(name: string): q;
	addClasses(names: string): q;
	getClass(): string;
	getContentHeight(): number;
	getContentWidth(): number;
	getHeight(): number;
	getOffset(): any;
	getPosition(): any;
	getStyle(name: string): any;
	getStyles(names: string): any;
	getWidth(): number;
	hasClass(name: string): bool;
	includeStylesheet(uri: string, doc: qx_bom_Document): void;
	removeClass(name: string): q;
	removeClasses(names: string): q;
	replaceClass(oldName: string, newName: string): q;
	setStyle(name: string, value: any): q;
	setStyles(styles: any): q;
	toggleClass(name: string): q;
	toggleClasses(names: string): q;
}
interface qx_module_Css {
}
interface qx_module_EnvironmentStatic {
	add(key: string, value: any): q;
	get(key: string): any;
}
interface qx_module_Environment {
}
interface qx_module_EventStatic {
	$getHookRegistry(): any;
	$getRegistry(): any;
	$registerEventHook(types: string, registerHook: qx_lang_Function, unregisterHook: qx_lang_Function): void;
	$registerNormalization(types: string, normalizer: qx_lang_Function): void;
	$unregisterEventHook(types: string, registerHook: qx_lang_Function, unregisterHook: qx_lang_Function): void;
	$unregisterNormalization(types: string, normalizer: qx_lang_Function): void;
	copyEventsTo(target: Element): void;
	emit(type: string, data: any): q;
	hasListener(type: string): bool;
	off(type: string, listener: qx_lang_Function, context: any): q;
	on(type: string, listener: qx_lang_Function, context: any): q;
	once(type: string, listener: qx_lang_Function, context: any): q;
	ready(callback: qx_lang_Function): void;
}
interface qx_module_Event {
}
interface qx_module_event_KeyboardStatic {
	getKeyIdentifier(): string;
	normalize(event: qx_bom_client_Event, element: Element): qx_bom_client_Event;
}
interface qx_module_event_Keyboard {
}
interface qx_module_event_MouseStatic {
	getButton(): string;
	getDocumentLeft(): number;
	getDocumentTop(): number;
	getScreenLeft(): number;
	getScreenTop(): number;
	getViewportLeft(): number;
	getViewportTop(): number;
	normalize(event: qx_bom_client_Event, element: Element): qx_bom_client_Event;
}
interface qx_module_event_Mouse {
}
interface qx_module_event_NativeStatic {
	getType(): string;
	normalize(event: qx_bom_client_Event, element: Element): qx_bom_client_Event;
	preventDefault(): void;
	stopPropagation(): void;
}
interface qx_module_event_Native {
}
interface qx_module_event_OrientationStatic {
	getOrientation(): number;
	isLandscape(): bool;
	isPortrait(): bool;
	normalize(event: qx_bom_client_Event, element: Element, type: string): qx_bom_client_Event;
}
interface qx_module_event_Orientation {
}
interface qx_module_event_OrientationHandlerStatic {
	register(element: qx_bom_Window): void;
	unregister(element: Element): void;
}
interface qx_module_event_OrientationHandler {
}
interface qx_module_event_TouchStatic {
	normalize(event: qx_bom_client_Event, element: Element, type: string): qx_bom_client_Event;
}
interface qx_module_event_Touch {
}
interface qx_module_event_TouchHandlerStatic {
	register(element: Element): void;
	unregister(element: Element): void;
}
interface qx_module_event_TouchHandler {
}
interface qx_module_IoStatic {
	jsonp(url: string, settings: any): qx_bom_request_Jsonp;
	script(url: string): qx_bom_request_Script;
	xhr(url: string, settings: any): qx_bom_request_Xhr;
}
interface qx_module_Io {
}
interface qx_module_ManipulatingStatic {
	__getCollectionFromArgument(arg: any): q;
	__getElementArray(arg: string): Element;
	__getElementArray(arg: Element): Element;
	__getInnermostElement(element: Element): Element;
	after(args: string): q;
	after(args: Element): q;
	append(html: string): q;
	append(html: Element): q;
	appendTo(parent: string): q;
	appendTo(parent: Element): q;
	before(args: string): q;
	before(args: Element): q;
	blur(): q;
	clone(events: bool): q;
	create(html: string): q;
	create(html: Element): q;
	empty(): q;
	focus(): q;
	getScrollLeft(): number;
	getScrollTop(): number;
	insertAfter(target: string): q;
	insertAfter(target: Element): q;
	insertBefore(target: string): q;
	insertBefore(target: Element): q;
	remove(): q;
	setScrollLeft(value: number): q;
	setScrollTop(value: number): q;
	wrap(wrapper: any): q;
}
interface qx_module_Manipulating {
}
interface qx_module_PlacementStatic {
	_computePlacement(axes: any, size: any, area: any, target: q, offsets: any, position: any): any;
	_getAxis(mode: string): any;
	_getPositionX(edge: string, align: string): string;
	_getPositionY(edge: string, align: string): string;
	placeTo(target: Element, position: string, offsets: any, modeX: string, modeY: string): q;
}
interface qx_module_Placement {
}
interface qx_module_PolyfillStatic {
	functionBind(): void;
	stringTrim(): void;
}
interface qx_module_Polyfill {
}
interface qx_module_TemplateStatic {
	get(id: string, view: any, partials: any): q;
	render(template: string, view: any, partials: any): string;
}
interface qx_module_Template {
}
interface qx_module_TransformStatic {
	getTransformBackfaceVisibility(): bool;
	getTransformOrigin(): string;
	getTransformPerspective(): string;
	getTransformPerspectiveOrigin(): string;
	getTransformStyle(): string;
	rotate(value: string): q;
	rotate(value: any[]): q;
	scale(value: number): q;
	scale(value: any[]): q;
	setTransformBackfaceVisibility(value: bool): q;
	setTransformOrigin(value: string): q;
	setTransformPerspective(value: number): q;
	setTransformPerspectiveOrigin(value: string): q;
	setTransformStyle(value: string): q;
	skew(value: string): q;
	skew(value: any[]): q;
	transform(transforms: any): q;
	translate(value: string): q;
	translate(value: any[]): q;
}
interface qx_module_Transform {
}
interface qx_module_TraversingStatic {
	__getAncestors(selector: string, filter: string): q;
	__hierarchyHelper(collection: any[], method: string, selector: string): any[];
	add(el: Element): q;
	eq(index: number): q;
	filter(selector: string): q;
	filter(selector: qx_lang_Function): q;
	find(selector: string): q;
	forEach(fn: qx_lang_Function, ctx: any): q;
	getAncestors(filter: string): q;
	getAncestorsUntil(selector: string, filter: string): q;
	getChildren(selector: string): q;
	getClosest(selector: string): q;
	getContents(): q;
	getDocument(node: qx_dom_Node): qx_bom_Document;
	getFirst(): q;
	getLast(): q;
	getNext(selector: string): q;
	getNextAll(selector: string): q;
	getNextUntil(selector: string): q;
	getOffsetParent(): q;
	getParents(selector: string): q;
	getPrev(selector: string): q;
	getPrevAll(selector: string): q;
	getPrevUntil(selector: string): q;
	getSiblings(selector: string): q;
	getWindow(node: qx_dom_Node): qx_bom_Window;
	getWindow(node: qx_bom_Document): qx_bom_Window;
	getWindow(node: qx_bom_Window): qx_bom_Window;
	has(selector: string): q;
	is(selector: string): bool;
	is(selector: qx_lang_Function): bool;
	isDocument(node: any): bool;
	isElement(element: any): bool;
	isNode(node: any): bool;
	not(selector: string): q;
	not(selector: qx_lang_Function): q;
	slice(begin: number, end: number): q;
}
interface qx_module_Traversing {
}
interface qx_module_util_ArrayStatic {
	cast(object: any, constructor: qx_lang_Function, offset: number): any[];
	equals(arr1: any[], arr2: any[]): bool;
	exclude(arr1: any[], arr2: any[]): any[];
	fromArguments(args: any, offset: number): any[];
	insertAfter(arr: any[], obj: any, obj2: any): any[];
	insertBefore(arr: any[], obj: any, obj2: any): any[];
	max(arr: any[]): number;
	min(arr: any[]): number;
	remove(arr: any[], obj: any): any;
	removeAll(arr: any[]): any[];
	unique(arr: any[]): any[];
}
interface qx_module_util_Array {
}
interface qx_module_util_StringStatic {
	camelCase(str: string): string;
	endsWith(fullstr: string, substr: string): bool;
	escapeRegexpChars(str: string): string;
	firstLow(str: string): string;
	firstUp(str: string): string;
	hyphenate(str: string): string;
	startsWith(fullstr: string, substr: string): bool;
}
interface qx_module_util_String {
}
interface qx_module_util_TypeStatic {
	get(value: any): string;
}
interface qx_module_util_Type {
}
interface qx_PartStatic {
	$$notifyLoad(id: string, closure: qx_lang_Function): void;
	getInstance(): qx_Part;
	preload(partNames: string): void;
	require(partNames: string, callback: qx_lang_Function, self: any): void;
	new(loader: any): qx_Part;
}
interface qx_Part {
	__decodeUris(compressedUris: string): string;
	__getUris(): string;
	addClosurePackageListener(pkg: any, callback: qx_lang_Function): void;
	addPackageListener(pkg: any, callback: any): void;
	addPartListener(part: any, callback: any): void;
	addToPackage(pkg: qx_io_part_Package): void;
	getParts(): any[];
	notifyPackageResult(pkg: any): void;
	notifyPartResult(part: any): void;
	preload(partNames: string, callback: qx_lang_Function, self: any): void;
	require(partNames: string, callback: qx_lang_Function, self: any): void;
	saveClosure(id: string, closure: qx_lang_Function): void;
}
interface qx_theme_classic_AppearanceStatic {
}
interface qx_theme_classic_Appearance {
}
interface qx_theme_classic_ColorStatic {
}
interface qx_theme_classic_Color {
}
interface qx_theme_classic_DecorationStatic {
}
interface qx_theme_classic_Decoration {
}
interface qx_theme_classic_FontStatic {
}
interface qx_theme_classic_Font {
}
interface qx_theme_ClassicStatic {
}
interface qx_theme_Classic {
}
interface qx_theme_icon_OxygenStatic {
}
interface qx_theme_icon_Oxygen {
}
interface qx_theme_icon_TangoStatic {
}
interface qx_theme_icon_Tango {
}
interface qx_theme_indigo_AppearanceStatic {
}
interface qx_theme_indigo_Appearance {
}
interface qx_theme_indigo_ColorStatic {
}
interface qx_theme_indigo_Color {
}
interface qx_theme_indigo_DecorationStatic {
}
interface qx_theme_indigo_Decoration {
}
interface qx_theme_indigo_FontStatic {
}
interface qx_theme_indigo_Font {
}
interface qx_theme_IndigoStatic {
}
interface qx_theme_Indigo {
}
interface qx_ThemeStatic {
	__checkForInvalidTheme(mixinTheme: any): void;
	__convert(theme: qx_Theme, config: any): void;
	__extractType(config: any): string;
	__initializeAliases(theme: any, config: any): void;
	__normalizeArray(objectOrArray: any): any[];
	__normalizeArray(objectOrArray: any[]): any[];
	__validateConfig(name: string, config: any): void;
	define(name: string, config: any): void;
	genericToString(): string;
	getAll(): any;
	getByName(name: string): any;
	getTotalNumber(): number;
	include(theme: qx_Theme, mixinTheme: qx_Theme): void;
	isDefined(name: string): bool;
	patch(theme: qx_Theme, mixinTheme: qx_Theme): void;
}
interface qx_Theme {
}
interface qx_theme_manager_AppearanceStatic {
	getInstance(): qx_theme_manager_Appearance;
	new(): qx_theme_manager_Appearance;
}
interface qx_theme_manager_Appearance extends qx_core_Object {
	__resolveId(id: string, theme: qx_Theme, defaultId: string): string;
	_applyTheme(value: qx_Theme, old: qx_Theme): void;
	getTheme(): any;
	initTheme(value: any): any;
	resetTheme(): void;
	setTheme(value: any): any;
	styleFrom(id: string, states: any, theme: qx_Theme, defaultId: string): any;
}
interface qx_theme_manager_ColorStatic {
	getInstance(): qx_theme_manager_Color;
}
interface qx_theme_manager_Color extends qx_util_ValueManager {
	_applyTheme(value: qx_Theme, old: qx_Theme): void;
	getTheme(): any;
	initTheme(value: any): any;
	isDynamic(value: string): bool;
	resetTheme(): void;
	resolve(value: string): any;
	setTheme(value: any): any;
}
interface qx_theme_manager_DecorationStatic {
	getInstance(): qx_theme_manager_Decoration;
}
interface qx_theme_manager_Decoration extends qx_core_Object {
	_applyTheme(value: qx_Theme, old: qx_Theme): void;
	getTheme(): any;
	initTheme(value: any): any;
	isCached(decorator: qx_ui_decoration_IDecorator): bool;
	isDynamic(value: string): bool;
	isValidPropertyValue(value: any): bool;
	resetTheme(): void;
	resolve(value: string): any;
	setTheme(value: any): any;
}
interface qx_theme_manager_FontStatic {
	getInstance(): qx_theme_manager_Font;
}
interface qx_theme_manager_Font extends qx_util_ValueManager {
	__getFontClass(config: any): qx_Class;
	__resolveInclude(fonts: any, fontName: string): void;
	_applyTheme(value: qx_Theme, old: qx_Theme): void;
	getTheme(): any;
	initTheme(value: any): any;
	isDynamic(value: string): bool;
	resetTheme(): void;
	resolve(value: string): any;
	resolveDynamic(value: string): any;
	setTheme(value: any): any;
}
interface qx_theme_manager_IconStatic {
	getInstance(): qx_theme_manager_Icon;
}
interface qx_theme_manager_Icon extends qx_core_Object {
	_applyTheme(value: qx_Theme, old: qx_Theme): void;
	getTheme(): any;
	initTheme(value: any): any;
	resetTheme(): void;
	setTheme(value: any): any;
}
interface qx_theme_manager_MetaStatic {
	getInstance(): qx_theme_manager_Meta;
}
interface qx_theme_manager_Meta extends qx_core_Object {
	_applyTheme(value: qx_Theme, old: qx_Theme): void;
	getTheme(): any;
	initialize(): void;
	initTheme(value: any): any;
	resetTheme(): void;
	setTheme(value: any): any;
}
interface qx_theme_modern_AppearanceStatic {
}
interface qx_theme_modern_Appearance {
}
interface qx_theme_modern_ColorStatic {
}
interface qx_theme_modern_Color {
}
interface qx_theme_modern_DecorationStatic {
}
interface qx_theme_modern_Decoration {
}
interface qx_theme_modern_FontStatic {
}
interface qx_theme_modern_Font {
}
interface qx_theme_ModernStatic {
}
interface qx_theme_Modern {
}
interface qx_theme_simple_AppearanceStatic {
}
interface qx_theme_simple_Appearance {
}
interface qx_theme_simple_ColorStatic {
}
interface qx_theme_simple_Color {
}
interface qx_theme_simple_DecorationStatic {
}
interface qx_theme_simple_Decoration {
}
interface qx_theme_simple_FontStatic {
}
interface qx_theme_simple_Font {
}
interface qx_theme_simple_ImageStatic {
}
interface qx_theme_simple_Image extends qx_core_Object {
}
interface qx_theme_SimpleStatic {
}
interface qx_theme_Simple {
}
interface qx_type_ArrayStatic {
	new(length_or_items: number): qx_type_Array;
	new(length_or_items: any): qx_type_Array;
}
interface qx_type_Array extends qx_type_BaseArray {
	__toPlainArray(arr: any[]): any[];
	append(arr: any[]): any[];
	clone(): any[];
	contains(obj: any): bool;
	insertAfter(obj: any, obj2: any): any[];
	insertAt(obj: any, i: number): any[];
	insertBefore(obj: any, obj2: any): any[];
	prepend(arr: any[]): any[];
	remove(obj: any): any;
	removeAll(): any[];
	removeAt(i: number): any;
}
interface qx_type_BaseArrayStatic {
	new(length_or_items: number): qx_type_BaseArray;
	new(length_or_items: any): qx_type_BaseArray;
}
interface qx_type_BaseArray extends Array {
	concat(varargs: any[]): qx_type_BaseArray;
	concat(varargs: any): qx_type_BaseArray;
	every(callback: qx_lang_Function, obj: any): bool;
	filter(callback: qx_lang_Function, obj: any): qx_type_BaseArray;
	forEach(callback: qx_lang_Function, obj: any): void;
	indexOf(searchElement: any, fromIndex: number): number;
	join(separator: string): string;
	lastIndexOf(searchElement: any, fromIndex: number): number;
	map(callback: qx_lang_Function, obj: any): qx_type_BaseArray;
	pop(): any;
	push(varargs: any): number;
	reverse(): any[];
	shift(): any;
	slice(begin: number, end: number): qx_type_BaseArray;
	some(callback: qx_lang_Function, obj: any): bool;
	sort(compareFunction: qx_lang_Function): any[];
	splice(index: number, howMany: number, varargs: any): qx_type_BaseArray;
	toArray(): any[];
	toString(): string;
	unshift(varargs: any): number;
	valueOf(): number;
}
interface qx_type_BaseErrorStatic {
	new(comment: string, failMessage: string): qx_type_BaseError;
}
interface qx_type_BaseError extends Error {
	getComment(): string;
	getStackTrace(): string;
	toString(): string;
}
interface qx_type_BaseStringStatic {
	new(txt: string): qx_type_BaseString;
}
interface qx_type_BaseString {
	base(args: any, varags: any): any;
	charAt(index: number): string;
	charCodeAt(index: number): number;
	concat(stringN: string): string;
	indexOf(index: string, offset: number): number;
	lastIndexOf(index: string, offset: number): number;
	match(regexp: any): any;
	replace(regexp: any, aFunction: qx_lang_Function): string;
	search(regexp: any): any;
	slice(beginslice: number, endSlice: number): string;
	split(separator: string, limit: number): any[];
	substr(start: number, length: number): string;
	substring(indexA: number, indexB: number): string;
	toHashCode(): number;
	toLocaleLowerCase(): string;
	toLocaleUpperCase(): string;
	toLowerCase(): string;
	toString(): string;
	toUpperCase(): string;
	valueOf(): string;
}
interface qx_ui_basic_AtomStatic {
	new(label: string, icon: string): qx_ui_basic_Atom;
}
interface qx_ui_basic_Atom extends qx_ui_core_Widget {
	_applyCenter(value: bool, old: bool): void;
	_applyGap(value: number, old: number): void;
	_applyIcon(value: string, old: string): void;
	_applyIconPosition(value: any, old: any): void;
	_applyLabel(value: string, old: string): void;
	_applyRich(value: bool, old: bool): void;
	_applySelectable(value: bool, old: bool): void;
	_applyShow(value: any, old: any): void;
	_createChildControlImpl(id: any, hash: any): void;
	_handleIcon(): void;
	_handleLabel(): void;
	getCenter(): any;
	getGap(): any;
	getIcon(): any;
	getIconPosition(): any;
	getLabel(): any;
	getRich(): any;
	getShow(): any;
	initCenter(value: any): any;
	initGap(value: any): any;
	initIcon(value: any): any;
	initIconPosition(value: any): any;
	initLabel(value: any): any;
	initRich(value: any): any;
	initShow(value: any): any;
	isCenter(): bool;
	isRich(): bool;
	resetCenter(): void;
	resetGap(): void;
	resetIcon(): void;
	resetIconPosition(): void;
	resetLabel(): void;
	resetRich(): void;
	resetShow(): void;
	setCenter(value: any): any;
	setGap(value: any): any;
	setIcon(value: any): any;
	setIconPosition(value: any): any;
	setLabel(value: any): any;
	setRich(value: any): any;
	setShow(value: any): any;
	toggleCenter(): bool;
	toggleRich(): bool;
}
interface qx_ui_basic_ImageStatic {
	new(source: string): qx_ui_basic_Image;
}
interface qx_ui_basic_Image extends qx_ui_core_Widget {
	__checkForContentElementReplacement(elementToAdd: qx_html_Image): void;
	__createSuitableContentElement(mode: string): qx_html_Image;
	__getMode(): string;
	__getSuitableContentElement(): qx_html_Image;
	__loaderCallback(source: string, imageInfo: any): void;
	__loadUnmanagedImage(el: Element, source: string): void;
	__setManagedImage(el: Element, source: string): void;
	__setMode(mode: string): void;
	__setUnmanagedImage(el: Element, source: string): void;
	__updateContentHint(width: number, height: number): void;
	_applyEnabled(value: bool, old: bool): void;
	_applyScale(value: bool, old: bool): void;
	_applySource(value: string, old: string): void;
	_createContentElement(): void;
	_getContentHint(): void;
	_styleSource(): void;
	getContentElement(): void;
	getScale(): any;
	getSource(): any;
	initScale(value: any): any;
	initSource(value: any): any;
	isScale(): bool;
	resetScale(): void;
	resetSource(): void;
	setScale(value: any): any;
	setSource(value: any): any;
	toggleScale(): bool;
}
interface qx_ui_basic_LabelStatic {
	new(value: string): qx_ui_basic_Label;
}
interface qx_ui_basic_Label extends qx_ui_core_Widget {
	__computeContentSize(width: number): void;
	__fixEllipsis(): void;
	_applyBuddy(value: qx_ui_core_Widget, old: qx_ui_core_Widget): void;
	_applyFont(value: qx_bom_Font, old: qx_bom_Font): void;
	_applyRich(value: bool, old: bool): void;
	_applySelectable(value: bool, old: bool): void;
	_applyTextAlign(value: any, old: any): void;
	_applyTextColor(value: qx_theme_classic_Color, old: qx_theme_classic_Color): void;
	_applyValue(value: string, old: string): void;
	_applyWrap(value: bool, old: bool): void;
	_createContentElement(): void;
	_getContentHeightForWidth(width: any): void;
	_getContentHint(): void;
	_hasHeightForWidth(): void;
	_onChangeLocale(e: qx_bom_client_Event): void;
	_onWebFontStatusChange(ev: qx_event_type_Data): void;
	getBuddy(): any;
	getRich(): any;
	getTextAlign(): any;
	getValue(): any;
	getWrap(): any;
	initBuddy(value: any): any;
	initRich(value: any): any;
	initTextAlign(value: any): any;
	initValue(value: any): any;
	initWrap(value: any): any;
	isRich(): bool;
	isWrap(): bool;
	resetBuddy(): void;
	resetRich(): void;
	resetTextAlign(): void;
	resetValue(): void;
	resetWrap(): void;
	setBuddy(value: any): any;
	setRich(value: any): any;
	setTextAlign(value: any): any;
	setValue(value: any): any;
	setWrap(value: any): any;
	toggleRich(): bool;
	toggleWrap(): bool;
}
interface qx_ui_container_CompositeStatic {
	new(layout: qx_ui_layout_Abstract): qx_ui_container_Composite;
}
interface qx_ui_container_Composite extends qx_ui_core_Widget {
	_afterAddChild(child: any): void;
	_afterRemoveChild(child: any): void;
}
interface qx_ui_container_ResizerStatic {
}
interface qx_ui_container_Resizer extends qx_ui_container_Composite {
}
interface qx_ui_container_ScrollStatic {
	new(content: qx_ui_core_LayoutItem): qx_ui_container_Scroll;
}
interface qx_ui_container_Scroll extends qx_ui_core_scroll_AbstractScrollArea {
	_getContentPaddingTarget(): qx_ui_core_Widget;
	add(widget: qx_ui_core_Widget): void;
	getChildren(): any;
	remove(widget: qx_ui_core_Widget): qx_ui_core_Widget;
}
interface qx_ui_container_SlideBarStatic {
	new(orientation: string): qx_ui_container_SlideBar;
}
interface qx_ui_container_SlideBar extends qx_ui_core_Widget {
	_applyEnabled(value: bool, old: bool): void;
	_applyOrientation(value: any, old: any): void;
	_createChildControlImpl(id: any, hash: any): void;
	_hideArrows(): void;
	_onExecuteBackward(): void;
	_onExecuteForward(): void;
	_onMouseWheel(e: qx_event_type_Mouse): void;
	_onRemoveChild(): void;
	_onResize(e: qx_bom_client_Event): void;
	_onScroll(): void;
	_showArrows(): void;
	_updateArrowsEnabled(): void;
	getChildrenContainer(): void;
	getOrientation(): any;
	getScrollStep(): any;
	initOrientation(value: any): any;
	initScrollStep(value: any): any;
	resetOrientation(): void;
	resetScrollStep(): void;
	scrollBy(offset: number): void;
	scrollTo(value: number): void;
	setOrientation(value: any): any;
	setScrollStep(value: any): any;
}
interface qx_ui_container_StackStatic {
	new(): qx_ui_container_Stack;
}
interface qx_ui_container_Stack extends qx_ui_core_Widget {
	__onChangeSelection(e: qx_event_type_Data): void;
	_afterAddChild(child: any): void;
	_afterRemoveChild(child: any): void;
	_applyDynamic(value: bool, old: bool): void;
	_getItems(): qx_ui_core_Widget;
	_isAllowEmptySelection(): bool;
	_isItemSelectable(item: qx_ui_core_Widget): bool;
	getDynamic(): any;
	initDynamic(value: any): any;
	isDynamic(): bool;
	next(): void;
	previous(): void;
	resetDynamic(): void;
	setDynamic(value: any): any;
	toggleDynamic(): bool;
}
interface qx_ui_control_ColorPopupStatic {
	new(): qx_ui_control_ColorPopup;
}
interface qx_ui_control_ColorPopup extends qx_ui_popup_Popup {
	_applyValue(value: any, old: any): void;
	_createBoxes(): void;
	_createChildControlImpl(id: any, hash: any): void;
	_createColorSelector(): void;
	_onAutomaticBtnExecute(): void;
	_onChangeVisibility(e: qx_event_type_Data): void;
	_onColorSelectorCancel(): void;
	_onColorSelectorOk(): void;
	_onFieldMouseDown(e: qx_event_type_Mouse): void;
	_onFieldMouseOut(e: qx_event_type_Mouse): void;
	_onFieldMouseOver(e: qx_event_type_Mouse): void;
	_onSelectorButtonExecute(): void;
	_rotatePreviousColors(): void;
	getBlue(): any;
	getGreen(): any;
	getRed(): any;
	getValue(): any;
	initBlue(value: any): any;
	initGreen(value: any): any;
	initRed(value: any): any;
	initValue(value: any): any;
	resetBlue(): void;
	resetGreen(): void;
	resetRed(): void;
	resetValue(): void;
	setBlue(value: any): any;
	setGreen(value: any): any;
	setRed(value: any): any;
	setValue(value: any): any;
}
interface qx_ui_control_ColorSelectorStatic {
	new(): qx_ui_control_ColorSelector;
}
interface qx_ui_control_ColorSelector extends qx_ui_core_Widget {
	__fireChangeValueEvent(): void;
	_applyBlue(value: number, old: number): void;
	_applyBrightness(value: number, old: number): void;
	_applyGreen(value: number, old: number): void;
	_applyHue(value: number, old: number): void;
	_applyRed(value: number, old: number): void;
	_applySaturation(value: number, old: number): void;
	_createChildControlImpl(id: any, hash: any): void;
	_onAppear(e: qx_event_type_Data): void;
	_onBrightnessFieldMouseDown(e: qx_event_type_Mouse): void;
	_onBrightnessHandleMouseDown(e: qx_event_type_Mouse): void;
	_onBrightnessHandleMouseMove(e: qx_event_type_Mouse): void;
	_onBrightnessHandleMouseUp(e: qx_event_type_Mouse): void;
	_onBrightnessPaneMouseWheel(e: qx_event_type_Mouse): void;
	_onColorFieldClick(e: qx_event_type_Mouse): void;
	_onHexFieldChange(e: qx_event_type_Data): void;
	_onHueSaturationFieldMouseDown(e: qx_event_type_Mouse): void;
	_onHueSaturationHandleMouseMove(e: qx_event_type_Mouse): void;
	_onHueSaturationHandleMouseUp(e: qx_event_type_Mouse): void;
	_onHueSaturationPaneMouseWheel(e: qx_event_type_Mouse): void;
	_setBlueFromSpinner(): void;
	_setBrightnessFromSpinner(): void;
	_setBrightnessGradiant(): void;
	_setBrightnessOnFieldEvent(e: qx_event_type_Mouse): void;
	_setGreenFromSpinner(): void;
	_setHexFromRgb(): void;
	_setHueFromRgb(): void;
	_setHueFromSpinner(): void;
	_setHueSaturationOnFieldEvent(e: qx_event_type_Mouse): void;
	_setPreviewFromRgb(): void;
	_setRedFromSpinner(): void;
	_setRgbFromHue(): void;
	_setSaturationFromSpinner(): void;
	getBlue(): any;
	getBrightness(): any;
	getGreen(): any;
	getHue(): any;
	getRed(): any;
	getSaturation(): any;
	getValue(): string;
	initBlue(value: any): any;
	initBrightness(value: any): any;
	initGreen(value: any): any;
	initHue(value: any): any;
	initRed(value: any): any;
	initSaturation(value: any): any;
	resetBlue(): void;
	resetBrightness(): void;
	resetGreen(): void;
	resetHue(): void;
	resetRed(): void;
	resetSaturation(): void;
	resetValue(): void;
	setBlue(value: any): any;
	setBrightness(value: any): any;
	setGreen(value: any): any;
	setHue(value: any): any;
	setPreviousColor(red: number, green: number, blue: number): void;
	setRed(value: any): any;
	setSaturation(value: any): any;
	setValue(value: string): void;
}
interface qx_ui_control_DateChooserStatic {
	new(date: qx_lang_Date): qx_ui_control_DateChooser;
}
interface qx_ui_control_DateChooser extends qx_ui_core_Widget {
	_applyValue(value: qx_lang_Date, old: qx_lang_Date): void;
	_createChildControlImpl(id: any, hash: any): void;
	_onDayClicked(evt: qx_event_type_Data): void;
	_onDayDblClicked(): void;
	_onKeyPress(evt: qx_event_type_Data): void;
	_onMouseUpDown(e: qx_event_type_Mouse): void;
	_onNavButtonClicked(evt: qx_event_type_Data): void;
	_updateDatePane(): void;
	getShownMonth(): any;
	getShownYear(): any;
	getValue(): any;
	handleKeyPress(e: qx_event_type_Data): void;
	initShownMonth(value: any): any;
	initShownYear(value: any): any;
	initValue(value: any): any;
	resetShownMonth(): void;
	resetShownYear(): void;
	resetValue(): void;
	setShownMonth(value: any): any;
	setShownYear(value: any): any;
	setValue(value: any): any;
	showMonth(month: number, year: number): void;
}
interface qx_ui_core_BlockerStatic {
	new(widget: qx_ui_core_Widget): qx_ui_core_Blocker;
}
interface qx_ui_core_Blocker extends qx_core_Object {
	__activateBlockerElement(): void;
	__createBlockerElement(): qx_html_Element;
	__onResize(e: qx_event_type_Data): void;
	__setBlockersStyle(key: string, value: string): void;
	__stopTabEvent(e: qx_event_type_KeySequence): void;
	__syncBlocker(): void;
	__unblock(): void;
	__unblockContent(): void;
	_applyColor(value: qx_theme_classic_Color, old: qx_theme_classic_Color): void;
	_applyOpacity(value: number, old: number): void;
	_backupActiveWidget(): void;
	_restoreActiveWidget(): void;
	block(): void;
	blockContent(zIndex: number): void;
	forceUnblock(): void;
	forceUnblockContent(): void;
	getBlockerElement(): qx_html_Element;
	getColor(): any;
	getContentBlockerElement(): qx_html_Element;
	getKeepBlockerActive(): any;
	getOpacity(): any;
	initColor(value: any): any;
	initKeepBlockerActive(value: any): any;
	initOpacity(value: any): any;
	isBlocked(): bool;
	isContentBlocked(): bool;
	isKeepBlockerActive(): bool;
	resetColor(): void;
	resetKeepBlockerActive(): void;
	resetOpacity(): void;
	setColor(value: any): any;
	setKeepBlockerActive(value: any): any;
	setOpacity(value: any): any;
	toggleKeepBlockerActive(): bool;
	unblock(): void;
	unblockContent(): void;
}
interface qx_ui_core_ColumnDataStatic {
	new(): qx_ui_core_ColumnData;
}
interface qx_ui_core_ColumnData extends qx_ui_core_LayoutItem {
	getComputedWidth(): void;
	getFlex(): number;
	renderLayout(left: any, top: any, width: any, height: any): void;
	setColumnWidth(width: number, flex: number): void;
	setColumnWidth(width: string, flex: number): void;
}
interface qx_ui_core_CommandStatic {
	new(shortcut: string): qx_ui_core_Command;
}
interface qx_ui_core_Command extends qx_core_Object {
	_applyEnabled(value: bool, old: bool): void;
	_applyShortcut(value: string, old: string): void;
	execute(target: any): void;
	getEnabled(): any;
	getIcon(): any;
	getLabel(): any;
	getMenu(): any;
	getShortcut(): any;
	getToolTipText(): any;
	getValue(): any;
	initEnabled(value: any): any;
	initIcon(value: any): any;
	initLabel(value: any): any;
	initMenu(value: any): any;
	initShortcut(value: any): any;
	initToolTipText(value: any): any;
	initValue(value: any): any;
	isEnabled(): bool;
	resetEnabled(): void;
	resetIcon(): void;
	resetLabel(): void;
	resetMenu(): void;
	resetShortcut(): void;
	resetToolTipText(): void;
	resetValue(): void;
	setEnabled(value: any): any;
	setIcon(value: any): any;
	setLabel(value: any): any;
	setMenu(value: any): any;
	setShortcut(value: any): any;
	setToolTipText(value: any): any;
	setValue(value: any): any;
	toggleEnabled(): bool;
	toString(): string;
}
interface qx_ui_core_DecoratorFactoryStatic {
	new(): qx_ui_core_DecoratorFactory;
}
interface qx_ui_core_DecoratorFactory extends qx_core_Object {
	_createDecoratorElement(decorator: qx_ui_decoration_IDecorator, id: string): qx_html_Decorator;
	getDecoratorElement(decorator: qx_ui_decoration_IDecorator): qx_html_Decorator;
	poolDecorator(decoratorElement: qx_html_Decorator): void;
}
interface qx_ui_core_DragDropCursorStatic {
	getInstance(): qx_ui_core_DragDropCursor;
	new(): qx_ui_core_DragDropCursor;
}
interface qx_ui_core_DragDropCursor extends qx_ui_basic_Image {
	_applyAction(value: any, old: any): void;
	getAction(): any;
	initAction(value: any): any;
	resetAction(): void;
	setAction(value: any): any;
}
interface qx_ui_core_EventHandlerStatic {
	new(): qx_ui_core_EventHandler;
}
interface qx_ui_core_EventHandler extends qx_core_Object {
	_dispatchEvent(domEvent: qx_event_type_Event): void;
	canHandleEvent(target: any, type: any): void;
	registerEvent(target: any, type: any, capture: any): void;
	unregisterEvent(target: any, type: any, capture: any): void;
}
interface qx_ui_core_FocusHandlerStatic {
	getInstance(): qx_ui_core_FocusHandler;
	new(): qx_ui_core_FocusHandler;
}
interface qx_ui_core_FocusHandler extends qx_core_Object {
	__collectAllAfter(parent: qx_ui_core_Widget, widget: qx_ui_core_Widget, result: any[]): void;
	__collectAllBefore(parent: qx_ui_core_Widget, widget: qx_ui_core_Widget, result: any[]): void;
	__compareTabOrder(widget1: qx_ui_core_Widget, widget2: qx_ui_core_Widget): number;
	__findFocusRoot(widget: qx_ui_core_Widget): void;
	__getFirst(parent: qx_ui_core_Widget, firstWidget: qx_ui_core_Widget): qx_ui_core_Widget;
	__getFirstWidget(): qx_ui_core_Widget;
	__getLast(parent: qx_ui_core_Widget, lastWidget: qx_ui_core_Widget): qx_ui_core_Widget;
	__getLastWidget(): qx_ui_core_Widget;
	__getWidgetAfter(widget: qx_ui_core_Widget): qx_ui_core_Widget;
	__getWidgetBefore(widget: qx_ui_core_Widget): qx_ui_core_Widget;
	__onKeyPress(e: qx_event_type_KeySequence): void;
	_onActivate(e: qx_event_type_Focus): void;
	_onDeactivate(e: qx_event_type_Focus): void;
	_onFocusIn(e: qx_event_type_Focus): void;
	_onFocusOut(e: qx_event_type_Focus): void;
	addRoot(widget: qx_ui_core_Widget): void;
	connectTo(root: qx_ui_root_Abstract): void;
	getActiveWidget(): qx_ui_core_Widget;
	getFocusedWidget(): qx_ui_core_Widget;
	isActive(widget: qx_ui_core_Widget): void;
	isFocused(widget: qx_ui_core_Widget): void;
	isFocusRoot(widget: qx_ui_core_Widget): void;
	removeRoot(widget: qx_ui_core_Widget): void;
}
interface qx_ui_core_IMultiSelectionStatic {
}
interface qx_ui_core_IMultiSelection {
	addToSelection(item: qx_ui_core_Widget): void;
	removeFromSelection(item: qx_ui_core_Widget): void;
	selectAll(): void;
}
interface qx_ui_core_ISingleSelectionStatic {
}
interface qx_ui_core_ISingleSelection {
	getSelectables(all: bool): qx_ui_core_Widget;
	getSelection(): qx_ui_core_Widget;
	isSelected(item: qx_ui_core_Widget): bool;
	isSelectionEmpty(): bool;
	resetSelection(): void;
	setSelection(items: qx_ui_core_Widget): void;
}
interface qx_ui_core_ISingleSelectionProviderStatic {
}
interface qx_ui_core_ISingleSelectionProvider {
	getItems(): qx_ui_core_Widget;
	isItemSelectable(item: qx_ui_core_Widget): bool;
}
interface qx_ui_core_LayoutItemStatic {
}
interface qx_ui_core_LayoutItem extends qx_core_Object {
	_applyAlign(value: any, old: any): void;
	_applyDimension(value: number, old: number): void;
	_applyMargin(value: number, old: number): void;
	_applyStretching(value: bool, old: bool): void;
	_computeSizeHint(): void;
	_getHeightForWidth(width: number): number;
	_getLayout(): qx_ui_layout_Abstract;
	_getRoot(): qx_ui_core_Widget;
	_hasHeightForWidth(): bool;
	clearLayoutProperties(): void;
	clearSeparators(): void;
	clone(): void;
	getAlignX(): any;
	getAlignY(): any;
	getAllowGrowX(): any;
	getAllowGrowY(): any;
	getAllowShrinkX(): any;
	getAllowShrinkY(): any;
	getApplicationRoot(): qx_ui_root_Abstract;
	getBounds(): any;
	getHeight(): any;
	getLayoutParent(): qx_ui_core_Widget;
	getLayoutProperties(): any;
	getMarginBottom(): any;
	getMarginLeft(): any;
	getMarginRight(): any;
	getMarginTop(): any;
	getMaxHeight(): any;
	getMaxWidth(): any;
	getMinHeight(): any;
	getMinWidth(): any;
	getSizeHint(compute: bool): any;
	getWidth(): any;
	hasUserBounds(): bool;
	hasValidLayout(): bool;
	initAlignX(value: any): any;
	initAlignY(value: any): any;
	initAllowGrowX(value: any): any;
	initAllowGrowY(value: any): any;
	initAllowShrinkX(value: any): any;
	initAllowShrinkY(value: any): any;
	initHeight(value: any): any;
	initMarginBottom(value: any): any;
	initMarginLeft(value: any): any;
	initMarginRight(value: any): any;
	initMarginTop(value: any): any;
	initMaxHeight(value: any): any;
	initMaxWidth(value: any): any;
	initMinHeight(value: any): any;
	initMinWidth(value: any): any;
	initWidth(value: any): any;
	invalidateLayoutCache(): void;
	isAllowGrowX(): bool;
	isAllowGrowY(): bool;
	isAllowShrinkX(): bool;
	isAllowShrinkY(): bool;
	isExcluded(): bool;
	isRootWidget(): bool;
	renderLayout(left: number, top: number, width: number, height: number): any;
	renderSeparator(separator: qx_html_Decorator, bounds: any): void;
	resetAlignX(): void;
	resetAlignY(): void;
	resetAllowGrowX(): void;
	resetAllowGrowY(): void;
	resetAllowShrinkX(): void;
	resetAllowShrinkY(): void;
	resetAllowStretchX(): void;
	resetAllowStretchY(): void;
	resetHeight(): void;
	resetMargin(): void;
	resetMarginBottom(): void;
	resetMarginLeft(): void;
	resetMarginRight(): void;
	resetMarginTop(): void;
	resetMaxHeight(): void;
	resetMaxWidth(): void;
	resetMinHeight(): void;
	resetMinWidth(): void;
	resetUserBounds(): void;
	resetWidth(): void;
	scheduleLayoutUpdate(): void;
	setAlignX(value: any): any;
	setAlignY(value: any): any;
	setAllowGrowX(value: any): any;
	setAllowGrowY(value: any): any;
	setAllowShrinkX(value: any): any;
	setAllowShrinkY(value: any): any;
	setAllowStretchX(allowGrowX: any, allowShrinkX: any): void;
	setAllowStretchY(allowGrowY: any, allowShrinkY: any): void;
	setHeight(value: any): any;
	setLayoutParent(parent: qx_ui_core_Widget): void;
	setLayoutParent(parent: any): void;
	setLayoutProperties(props: any): void;
	setMargin(marginTop: any, marginRight: any, marginBottom: any, marginLeft: any): void;
	setMarginBottom(value: any): any;
	setMarginLeft(value: any): any;
	setMarginRight(value: any): any;
	setMarginTop(value: any): any;
	setMaxHeight(value: any): any;
	setMaxWidth(value: any): any;
	setMinHeight(value: any): any;
	setMinWidth(value: any): any;
	setUserBounds(left: number, top: number, width: number, height: number): void;
	setWidth(value: any): any;
	toggleAllowGrowX(): bool;
	toggleAllowGrowY(): bool;
	toggleAllowShrinkX(): bool;
	toggleAllowShrinkY(): bool;
	updateLayoutProperties(props: any): void;
}
interface qx_ui_core_MBlockerStatic {
	new(): qx_ui_core_MBlocker;
}
interface qx_ui_core_MBlocker {
	_applyBlockerColor(value: qx_theme_classic_Color, old: qx_theme_classic_Color): void;
	_applyBlockerOpacity(value: number, old: number): void;
	_createBlocker(): qx_ui_core_Blocker;
	block(): void;
	blockContent(zIndex: number): void;
	forceUnblock(): void;
	forceUnblockContent(): void;
	getBlocker(): qx_ui_core_Blocker;
	getBlockerColor(): any;
	getBlockerOpacity(): any;
	initBlockerColor(value: any): any;
	initBlockerOpacity(value: any): any;
	isBlocked(): bool;
	isContentBlocked(): bool;
	resetBlockerColor(): void;
	resetBlockerOpacity(): void;
	setBlockerColor(value: any): any;
	setBlockerOpacity(value: any): any;
	unblock(): void;
	unblockContent(): void;
}
interface qx_ui_core_MChildrenHandlingStatic {
	remap(members: any): void;
}
interface qx_ui_core_MChildrenHandling {
	add(child: qx_ui_core_LayoutItem, options: any): void;
	addAfter(child: qx_ui_core_LayoutItem, after: qx_ui_core_LayoutItem, options: any): void;
	addAt(child: qx_ui_core_LayoutItem, index: number, options: any): void;
	addBefore(child: qx_ui_core_LayoutItem, before: qx_ui_core_LayoutItem, options: any): void;
	getChildren(): qx_ui_core_LayoutItem;
	hasChildren(): bool;
	indexOf(child: qx_ui_core_Widget): number;
	remove(child: qx_ui_core_LayoutItem): void;
	removeAll(): any[];
	removeAt(index: number): qx_ui_core_LayoutItem;
}
interface qx_ui_core_MContentPaddingStatic {
}
interface qx_ui_core_MContentPadding {
	_applyContentPadding(value: number, old: number): void;
	getContentPaddingBottom(): any;
	getContentPaddingLeft(): any;
	getContentPaddingRight(): any;
	getContentPaddingTop(): any;
	initContentPaddingBottom(value: any): any;
	initContentPaddingLeft(value: any): any;
	initContentPaddingRight(value: any): any;
	initContentPaddingTop(value: any): any;
	resetContentPadding(): void;
	resetContentPaddingBottom(): void;
	resetContentPaddingLeft(): void;
	resetContentPaddingRight(): void;
	resetContentPaddingTop(): void;
	setContentPadding(contentPaddingTop: any, contentPaddingRight: any, contentPaddingBottom: any, contentPaddingLeft: any): void;
	setContentPaddingBottom(value: any): any;
	setContentPaddingLeft(value: any): any;
	setContentPaddingRight(value: any): any;
	setContentPaddingTop(value: any): any;
}
interface qx_ui_core_MExecutableStatic {
}
interface qx_ui_core_MExecutable {
	__onCommandExecute(e: qx_event_type_Event): void;
	_applyCommand(value: qx_ui_core_Command, old: qx_ui_core_Command): void;
	execute(): void;
	getCommand(): any;
	initCommand(value: any): any;
	resetCommand(): void;
	setCommand(value: any): any;
}
interface qx_ui_core_MLayoutHandlingStatic {
	remap(members: any): void;
}
interface qx_ui_core_MLayoutHandling {
	getLayout(): qx_ui_layout_Abstract;
	setLayout(layout: qx_ui_layout_Abstract): void;
}
interface qx_ui_core_MMovableStatic {
}
interface qx_ui_core_MMovable {
	__computeMoveCoordinates(e: qx_event_type_Mouse): void;
	__getMoveFrame(): qx_ui_core_Widget;
	__onMoveLoseCapture(e: qx_event_type_Event): void;
	__showMoveFrame(): void;
	_activateMoveHandle(widget: qx_ui_core_Widget): void;
	_onMoveMouseDown(e: qx_event_type_Mouse): void;
	_onMoveMouseMove(e: qx_event_type_Event): void;
	_onMoveMouseUp(e: qx_event_type_Mouse): void;
	getMovable(): any;
	getUseMoveFrame(): any;
	initMovable(value: any): any;
	initUseMoveFrame(value: any): any;
	isMovable(): bool;
	isUseMoveFrame(): bool;
	resetMovable(): void;
	resetUseMoveFrame(): void;
	setMovable(value: any): any;
	setUseMoveFrame(value: any): any;
	toggleMovable(): bool;
	toggleUseMoveFrame(): bool;
}
interface qx_ui_core_MMultiSelectionHandlingStatic {
	new(): qx_ui_core_MMultiSelectionHandling;
}
interface qx_ui_core_MMultiSelectionHandling {
	_applyDragSelection(value: bool, old: bool): void;
	_applyQuickSelection(value: bool, old: bool): void;
	_applySelectionMode(value: any, old: any): void;
	_getLeadItem(): qx_ui_core_Widget;
	_getManager(): qx_ui_core_selection_Abstract;
	_onSelectionChange(e: qx_event_type_Data): void;
	addToSelection(item: qx_ui_core_Widget): void;
	getDragSelection(): any;
	getQuickSelection(): any;
	getSelectables(all: bool): qx_ui_core_Widget;
	getSelection(): qx_ui_core_Widget;
	getSelectionContext(): string;
	getSelectionMode(): any;
	getSortedSelection(): qx_ui_core_Widget;
	initDragSelection(value: any): any;
	initQuickSelection(value: any): any;
	initSelectionMode(value: any): any;
	invertSelection(): void;
	isDragSelection(): bool;
	isQuickSelection(): bool;
	isSelected(item: qx_ui_core_Widget): bool;
	isSelectionEmpty(): bool;
	removeFromSelection(item: qx_ui_core_Widget): void;
	resetDragSelection(): void;
	resetQuickSelection(): void;
	resetSelection(): void;
	resetSelectionMode(): void;
	selectAll(): void;
	selectRange(begin: qx_ui_core_Widget, end: qx_ui_core_Widget): void;
	setDragSelection(value: any): any;
	setQuickSelection(value: any): any;
	setSelection(items: qx_ui_core_Widget): void;
	setSelectionMode(value: any): any;
	toggleDragSelection(): bool;
	toggleQuickSelection(): bool;
}
interface qx_ui_core_MNativeOverflowStatic {
}
interface qx_ui_core_MNativeOverflow {
	_applyOverflowX(value: any, old: any): void;
	_applyOverflowY(value: any, old: any): void;
	getOverflowX(): any;
	getOverflowY(): any;
	initOverflowX(value: any): any;
	initOverflowY(value: any): any;
	resetOverflow(): void;
	resetOverflowX(): void;
	resetOverflowY(): void;
	setOverflow(overflowX: any, overflowY: any): void;
	setOverflowX(value: any): any;
	setOverflowY(value: any): any;
}
interface qx_ui_core_MPlacementStatic {
	getMoveDirection(): string;
	getVisibleElement(): qx_ui_core_Widget;
	setMoveDirection(direction: string): void;
	setVisibleElement(elem: qx_ui_core_Widget): void;
}
interface qx_ui_core_MPlacement {
	__cleanupFromLastPlaceToWidgetLiveUpdate(): void;
	__getPlacementSize(callback: qx_lang_Function): void;
	__place(coords: any): void;
	_getPlacementOffsets(): any;
	getDomMove(): any;
	getLayoutLocation(widget: qx_ui_core_Widget): any;
	getOffsetBottom(): any;
	getOffsetLeft(): any;
	getOffsetRight(): any;
	getOffsetTop(): any;
	getPlacementModeX(): any;
	getPlacementModeY(): any;
	getPlaceMethod(): any;
	getPosition(): any;
	initDomMove(value: any): any;
	initOffsetBottom(value: any): any;
	initOffsetLeft(value: any): any;
	initOffsetRight(value: any): any;
	initOffsetTop(value: any): any;
	initPlacementModeX(value: any): any;
	initPlacementModeY(value: any): any;
	initPlaceMethod(value: any): any;
	initPosition(value: any): any;
	isDomMove(): bool;
	moveTo(left: number, top: number): void;
	placeToElement(elem: Element, liveupdate: bool): void;
	placeToMouse(event: qx_event_type_Mouse): void;
	placeToPoint(point: any): void;
	placeToWidget(target: qx_ui_core_Widget, liveupdate: bool): void;
	resetDomMove(): void;
	resetOffset(): void;
	resetOffsetBottom(): void;
	resetOffsetLeft(): void;
	resetOffsetRight(): void;
	resetOffsetTop(): void;
	resetPlacementModeX(): void;
	resetPlacementModeY(): void;
	resetPlaceMethod(): void;
	resetPosition(): void;
	setDomMove(value: any): any;
	setOffset(offsetTop: any, offsetRight: any, offsetBottom: any, offsetLeft: any): void;
	setOffsetBottom(value: any): any;
	setOffsetLeft(value: any): any;
	setOffsetRight(value: any): any;
	setOffsetTop(value: any): any;
	setPlacementModeX(value: any): any;
	setPlacementModeY(value: any): any;
	setPlaceMethod(value: any): any;
	setPosition(value: any): any;
	toggleDomMove(): bool;
}
interface qx_ui_core_MRemoteChildrenHandlingStatic {
}
interface qx_ui_core_MRemoteChildrenHandling {
	__forward(functionName: string, a1: any, a2: any, a3: any): any;
	add(child: qx_ui_core_LayoutItem, options: any): qx_ui_core_Widget;
	addAfter(child: qx_ui_core_LayoutItem, after: qx_ui_core_LayoutItem, options: any): void;
	addAt(child: qx_ui_core_LayoutItem, index: number, options: any): void;
	addBefore(child: qx_ui_core_LayoutItem, before: qx_ui_core_LayoutItem, options: any): void;
	getChildren(): qx_ui_core_LayoutItem;
	hasChildren(): bool;
	indexOf(child: qx_ui_core_LayoutItem): number;
	remove(child: qx_ui_core_LayoutItem): qx_ui_core_Widget;
	removeAll(): void;
	removeAt(index: number): qx_ui_core_LayoutItem;
}
interface qx_ui_core_MRemoteLayoutHandlingStatic {
}
interface qx_ui_core_MRemoteLayoutHandling {
	getLayout(): qx_ui_layout_Abstract;
	setLayout(layout: qx_ui_layout_Abstract): void;
}
interface qx_ui_core_MResizableStatic {
	new(): qx_ui_core_MResizable;
}
interface qx_ui_core_MResizable {
	__computeResizeActive(location: any, mouseLeft: number, mouseTop: number, mouseTolerance: number): number;
	__computeResizeMode(e: qx_event_type_Mouse): void;
	__computeResizeResult(e: qx_event_type_Mouse): void;
	__getLocation(): any;
	__onResizeLoseCapture(e: qx_event_type_Event): void;
	__onResizeMouseDown(e: qx_event_type_Mouse): void;
	__onResizeMouseMove(e: qx_event_type_Mouse): void;
	__onResizeMouseOut(e: qx_event_type_Mouse): void;
	__onResizeMouseUp(e: qx_event_type_Mouse): void;
	__showResizeFrame(): void;
	_getResizeFrame(): qx_ui_core_Widget;
	getResizableBottom(): any;
	getResizableLeft(): any;
	getResizableRight(): any;
	getResizableTop(): any;
	getResizeSensitivity(): any;
	getUseResizeFrame(): any;
	initResizableBottom(value: any): any;
	initResizableLeft(value: any): any;
	initResizableRight(value: any): any;
	initResizableTop(value: any): any;
	initResizeSensitivity(value: any): any;
	initUseResizeFrame(value: any): any;
	isResizableBottom(): bool;
	isResizableLeft(): bool;
	isResizableRight(): bool;
	isResizableTop(): bool;
	isUseResizeFrame(): bool;
	resetResizable(): void;
	resetResizableBottom(): void;
	resetResizableLeft(): void;
	resetResizableRight(): void;
	resetResizableTop(): void;
	resetResizeSensitivity(): void;
	resetUseResizeFrame(): void;
	setResizable(resizableTop: any, resizableRight: any, resizableBottom: any, resizableLeft: any): void;
	setResizableBottom(value: any): any;
	setResizableLeft(value: any): any;
	setResizableRight(value: any): any;
	setResizableTop(value: any): any;
	setResizeSensitivity(value: any): any;
	setUseResizeFrame(value: any): any;
	toggleResizableBottom(): bool;
	toggleResizableLeft(): bool;
	toggleResizableRight(): bool;
	toggleResizableTop(): bool;
	toggleUseResizeFrame(): bool;
}
interface qx_ui_core_MSingleSelectionHandlingStatic {
}
interface qx_ui_core_MSingleSelectionHandling {
	__getManager(): qx_ui_core_SingleSelectionManager;
	_onChangeSelected(e: qx_event_type_Data): void;
	getSelectables(all: bool): qx_ui_core_Widget;
	getSelection(): qx_ui_core_Widget;
	isSelected(item: qx_ui_core_Widget): bool;
	isSelectionEmpty(): bool;
	resetSelection(): void;
	setSelection(items: qx_ui_core_Widget): void;
}
interface qx_ui_core_queue_AppearanceStatic {
	add(widget: qx_ui_core_Widget): void;
	flush(): void;
	has(widget: qx_ui_core_Widget): void;
	remove(widget: qx_ui_core_Widget): void;
}
interface qx_ui_core_queue_Appearance {
}
interface qx_ui_core_queue_DisposeStatic {
	add(widget: qx_ui_core_Widget): void;
	flush(): void;
	isEmpty(): bool;
}
interface qx_ui_core_queue_Dispose {
}
interface qx_ui_core_queue_LayoutStatic {
	__getLevelGroupedWidgets(): any;
	__getSortedQueue(): qx_ui_core_Widget;
	add(widget: qx_ui_core_Widget): void;
	flush(): void;
	getNestingLevel(widget: qx_ui_core_Widget): number;
	isScheduled(widget: qx_ui_core_Widget): bool;
	remove(widget: qx_ui_core_Widget): void;
}
interface qx_ui_core_queue_Layout {
}
interface qx_ui_core_queue_ManagerStatic {
	__executeAndRescheduleOnError(callback: qx_lang_Function, finallyCode: qx_lang_Function): void;
	__onUserAction(e: qx_event_type_Data): void;
	flush(): void;
	scheduleFlush(job: string): void;
}
interface qx_ui_core_queue_Manager {
}
interface qx_ui_core_queue_VisibilityStatic {
	__computeVisible(widget: qx_ui_core_Widget): bool;
	add(widget: qx_ui_core_Widget): void;
	flush(): void;
	isVisible(widget: qx_ui_core_Widget): bool;
	remove(widget: qx_ui_core_Widget): void;
}
interface qx_ui_core_queue_Visibility {
}
interface qx_ui_core_queue_WidgetStatic {
	add(widget: qx_ui_core_Widget, job: string): void;
	flush(): void;
	remove(widget: qx_ui_core_Widget, job: string): void;
}
interface qx_ui_core_queue_Widget {
}
interface qx_ui_core_scroll_AbstractScrollAreaStatic {
	new(): qx_ui_core_scroll_AbstractScrollArea;
}
interface qx_ui_core_scroll_AbstractScrollArea extends qx_ui_core_Widget {
	__handleScrollImpulse(delta: number, dir: string): void;
	_computeScrollbars(): void;
	_createChildControlImpl(id: any, hash: any): void;
	_onChangeScrollbarXVisibility(e: qx_event_type_Event): void;
	_onChangeScrollbarYVisibility(e: qx_event_type_Event): void;
	_onScrollBarX(e: qx_event_type_Data): void;
	_onScrollBarY(e: qx_event_type_Data): void;
	_onScrollPaneX(e: qx_event_type_Data): void;
	_onScrollPaneY(e: qx_event_type_Data): void;
	_onTouchMove(e: qx_event_type_Touch): void;
	_onTouchMoveDirectional(dir: string, e: qx_event_type_Touch): void;
	getItemBottom(item: qx_ui_core_Widget): number;
	getItemLeft(item: qx_ui_core_Widget): number;
	getItemRight(item: qx_ui_core_Widget): number;
	getItemTop(item: qx_ui_core_Widget): number;
	getPaneSize(): any;
	getScrollbarX(): any;
	getScrollbarY(): any;
	getScrollX(): number;
	getScrollY(): number;
	initScrollbarX(value: any): any;
	initScrollbarY(value: any): any;
	resetScrollbar(): void;
	resetScrollbarX(): void;
	resetScrollbarY(): void;
	scrollByX(value: number): void;
	scrollByY(value: number): void;
	scrollToX(value: number): void;
	scrollToY(value: number): void;
	setScrollbar(scrollbarX: any, scrollbarY: any): void;
	setScrollbarX(value: any): any;
	setScrollbarY(value: any): any;
}
interface qx_ui_core_scroll_IScrollBarStatic {
}
interface qx_ui_core_scroll_IScrollBar {
	getKnobFactor(): any;
	getMaximum(): any;
	getOrientation(): any;
	getPosition(): any;
	initKnobFactor(value: any): any;
	initMaximum(value: any): any;
	initOrientation(value: any): any;
	initPosition(value: any): any;
	resetKnobFactor(): void;
	resetMaximum(): void;
	resetOrientation(): void;
	resetPosition(): void;
	scrollBy(offset: number): void;
	scrollBySteps(steps: number): void;
	scrollTo(position: number): void;
	setKnobFactor(value: any): any;
	setMaximum(value: any): any;
	setOrientation(value: any): any;
	setPosition(value: any): any;
}
interface qx_ui_core_scroll_MScrollBarFactoryStatic {
}
interface qx_ui_core_scroll_MScrollBarFactory {
	_createScrollBar(orientation: string): qx_ui_core_scroll_IScrollBar;
}
interface qx_ui_core_scroll_MTouchScrollStatic {
	new(): qx_ui_core_scroll_MTouchScroll;
}
interface qx_ui_core_scroll_MTouchScroll {
	__handleScrollImpulse(delta: number, dir: string): void;
	_onTouchEnd(e: qx_event_type_Touch): void;
	_onTouchMove(e: qx_event_type_Touch): void;
	_onTouchMoveDirectional(dir: string, e: qx_event_type_Touch): void;
	_onTouchStart(e: qx_event_type_Touch): void;
	inTouchMomentum(): bool;
}
interface qx_ui_core_scroll_MWheelHandlingStatic {
}
interface qx_ui_core_scroll_MWheelHandling {
	_onMouseWheel(e: qx_event_type_Mouse): void;
}
interface qx_ui_core_scroll_NativeScrollBarStatic {
	new(orientation: string): qx_ui_core_scroll_NativeScrollBar;
}
interface qx_ui_core_scroll_NativeScrollBar extends qx_ui_core_Widget {
	_applyEnabled(value: bool, old: bool): void;
	_applyMaximum(value: number, old: number): void;
	_applyOrientation(value: any, old: any): void;
	_applyPosition(value: number, old: number): void;
	_getContentHint(): void;
	_getScrollPaneElement(): qx_html_Element;
	_onAppear(e: qx_event_type_Data): void;
	_onScroll(e: qx_event_type_Event): void;
	_stopPropagation(e: qx_event_type_Event): void;
	_updateScrollBar(): void;
	getKnobFactor(): any;
	getMaximum(): any;
	getOrientation(): any;
	getPosition(): any;
	getSingleStep(): any;
	initKnobFactor(value: any): any;
	initMaximum(value: any): any;
	initOrientation(value: any): any;
	initPosition(value: any): any;
	initSingleStep(value: any): any;
	renderLayout(left: any, top: any, width: any, height: any): void;
	resetKnobFactor(): void;
	resetMaximum(): void;
	resetOrientation(): void;
	resetPosition(): void;
	resetSingleStep(): void;
	scrollBy(offset: any): void;
	scrollBySteps(steps: any): void;
	scrollTo(position: any): void;
	setKnobFactor(value: any): any;
	setMaximum(value: any): any;
	setOrientation(value: any): any;
	setPosition(value: any): any;
	setSingleStep(value: any): any;
}
interface qx_ui_core_scroll_ScrollBarStatic {
	new(orientation: string): qx_ui_core_scroll_ScrollBar;
}
interface qx_ui_core_scroll_ScrollBar extends qx_ui_core_Widget {
	_applyKnobFactor(value: number, old: number): void;
	_applyMaximum(value: number, old: number): void;
	_applyOrientation(value: any, old: any): void;
	_applyPageStep(value: number, old: number): void;
	_applyPosition(value: any, old: any): void;
	_computeSizeHint(): void;
	_createChildControlImpl(id: any, hash: any): void;
	_onChangeSliderValue(e: qx_event_type_Data): void;
	_onExecuteBegin(e: qx_event_type_Event): void;
	_onExecuteEnd(e: qx_event_type_Event): void;
	_onResizeSlider(e: qx_event_type_Data): void;
	getKnobFactor(): any;
	getMaximum(): any;
	getOrientation(): any;
	getPageStep(): any;
	getPosition(): any;
	getSingleStep(): any;
	initKnobFactor(value: any): any;
	initMaximum(value: any): any;
	initOrientation(value: any): any;
	initPageStep(value: any): any;
	initPosition(value: any): any;
	initSingleStep(value: any): any;
	renderLayout(left: any, top: any, width: any, height: any): void;
	resetKnobFactor(): void;
	resetMaximum(): void;
	resetOrientation(): void;
	resetPageStep(): void;
	resetPosition(): void;
	resetSingleStep(): void;
	scrollBy(offset: number): void;
	scrollBySteps(steps: number): void;
	scrollTo(position: number): void;
	setKnobFactor(value: any): any;
	setMaximum(value: any): any;
	setOrientation(value: any): any;
	setPageStep(value: any): any;
	setPosition(value: any): any;
	setSingleStep(value: any): any;
}
interface qx_ui_core_scroll_ScrollPaneStatic {
	new(): qx_ui_core_scroll_ScrollPane;
}
interface qx_ui_core_scroll_ScrollPane extends qx_ui_core_Widget {
	_applyScrollX(value: any, old: any): void;
	_applyScrollY(value: any, old: any): void;
	_onAppear(e: qx_event_type_Event): void;
	_onScroll(e: qx_event_type_Event): void;
	_onUpdate(e: qx_bom_client_Event): void;
	add(widget: qx_ui_core_Widget): void;
	getChildren(): any;
	getItemBottom(item: qx_ui_core_Widget): number;
	getItemLeft(item: qx_ui_core_Widget): number;
	getItemRight(item: qx_ui_core_Widget): number;
	getItemTop(item: qx_ui_core_Widget): number;
	getScrollMaxX(): number;
	getScrollMaxY(): number;
	getScrollSize(): any;
	getScrollX(): any;
	getScrollY(): any;
	initScrollX(value: any): any;
	initScrollY(value: any): any;
	remove(widget: qx_ui_core_Widget): void;
	resetScrollX(): void;
	resetScrollY(): void;
	scrollByX(x: number): void;
	scrollByY(y: number): void;
	scrollToX(value: number): void;
	scrollToY(value: number): void;
	setScrollX(value: any): any;
	setScrollY(value: any): any;
}
interface qx_ui_core_scroll_ScrollSliderStatic {
	new(orientation: any): qx_ui_core_scroll_ScrollSlider;
}
interface qx_ui_core_scroll_ScrollSlider extends qx_ui_form_Slider {
	getSizeHint(compute: any): void;
}
interface qx_ui_core_selection_AbstractStatic {
	new(): qx_ui_core_selection_Abstract;
}
interface qx_ui_core_selection_Abstract extends qx_core_Object {
	__rangeToMap(range: any[]): void;
	_addToSelection(item: any): void;
	_applyDefaultSelection(force: bool): any;
	_applyMode(value: any, old: any): void;
	_autoSelect(): void;
	_capture(): void;
	_cleanup(): void;
	_clearSelection(): void;
	_deselectItemRange(item1: any, item2: any): void;
	_fireChange(context: string): void;
	_getAnchorItem(): any;
	_getDimension(): any;
	_getFirstSelectable(): any;
	_getLastSelectable(): any;
	_getLocation(): any;
	_getPage(lead: any, up: bool): void;
	_getRelatedSelectable(item: any, relation: string): any;
	_getScroll(): any;
	_getSelectableFromMouseEvent(event: qx_event_type_Mouse): any;
	_getSelectableLocationX(item: any): any;
	_getSelectableLocationY(item: any): any;
	_getSelectableRange(item1: any, item2: any): any[];
	_getSelectedItem(): any;
	_isSelectable(item: any): bool;
	_onInterval(e: qx_event_type_Event): void;
	_releaseCapture(): void;
	_removeFromSelection(item: any): void;
	_replaceMultiSelection(items: any[]): void;
	_scrollBy(xoff: number, yoff: number): void;
	_scrollItemIntoView(item: any): void;
	_selectableToHashCode(item: any): string;
	_selectAllItems(): void;
	_selectItemRange(item1: any, item2: any, extend: bool): void;
	_setAnchorItem(value: any): void;
	_setLeadItem(value: any): void;
	_setSelectedItem(item: any): void;
	_styleSelectable(item: any, type: string, enabled: bool): void;
	_toggleInSelection(item: any): void;
	addItem(item: any): void;
	clearSelection(): void;
	getDrag(): any;
	getLeadItem(): any;
	getMode(): any;
	getQuick(): any;
	getSelectables(all: bool): any[];
	getSelectedItem(): any;
	getSelection(): any;
	getSelectionContext(): string;
	getSortedSelection(): any;
	handleAddItem(e: qx_event_type_Data): void;
	handleKeyPress(event: qx_event_type_KeySequence): void;
	handleLoseCapture(event: qx_event_type_Mouse): void;
	handleMouseDown(event: qx_event_type_Mouse): void;
	handleMouseMove(event: qx_event_type_Mouse): void;
	handleMouseOver(event: qx_event_type_Mouse): void;
	handleMouseUp(event: qx_event_type_Mouse): void;
	handleRemoveItem(e: qx_event_type_Data): void;
	initDrag(value: any): any;
	initMode(value: any): any;
	initQuick(value: any): any;
	invertSelection(): void;
	isDrag(): bool;
	isItemSelected(item: any): bool;
	isQuick(): bool;
	isSelectionEmpty(): bool;
	removeItem(item: any): void;
	replaceSelection(items: any[]): void;
	resetDrag(): void;
	resetMode(): void;
	resetQuick(): void;
	selectAll(): void;
	selectItem(item: any): void;
	selectItemRange(begin: any, end: any): void;
	setDrag(value: any): any;
	setMode(value: any): any;
	setQuick(value: any): any;
	toggleDrag(): bool;
	toggleQuick(): bool;
}
interface qx_ui_core_selection_ScrollAreaStatic {
}
interface qx_ui_core_selection_ScrollArea extends qx_ui_core_selection_Widget {
	_getDimension(): void;
	_getPage(lead: any, up: any): void;
	_getScroll(): void;
	_isSelectable(item: any): void;
	_scrollBy(xoff: any, yoff: any): void;
}
interface qx_ui_core_selection_WidgetStatic {
	new(widget: qx_ui_core_Widget): qx_ui_core_selection_Widget;
}
interface qx_ui_core_selection_Widget extends qx_ui_core_selection_Abstract {
	_capture(): void;
	_getDimension(): void;
	_getFirstSelectable(): void;
	_getLastSelectable(): void;
	_getLocation(): void;
	_getPage(lead: any, up: any): void;
	_getRelatedSelectable(item: any, relation: any): void;
	_getScroll(): void;
	_getSelectableLocationX(item: any): void;
	_getSelectableLocationY(item: any): void;
	_getSelectableRange(item1: any, item2: any): void;
	_getWidget(): qx_ui_core_Widget;
	_isItemSelectable(item: qx_ui_core_Widget): bool;
	_isSelectable(item: any): void;
	_releaseCapture(): void;
	_scrollBy(xoff: any, yoff: any): void;
	_scrollItemIntoView(item: any): void;
	_selectableToHashCode(item: any): void;
	_styleSelectable(item: any, type: any, enabled: any): void;
	getSelectables(all: any): void;
}
interface qx_ui_core_SingleSelectionManagerStatic {
	new(selectionProvider: qx_ui_core_ISingleSelectionProvider): qx_ui_core_SingleSelectionManager;
}
interface qx_ui_core_SingleSelectionManager extends qx_core_Object {
	__applyAllowEmptySelection(value: bool, old: bool): void;
	__isChildElement(item: qx_ui_core_Widget): bool;
	__setSelected(item: qx_ui_core_Widget): void;
	__setSelected(item: any): void;
	getAllowEmptySelection(): any;
	getSelectables(all: bool): qx_ui_core_Widget;
	getSelected(): qx_ui_core_Widget;
	initAllowEmptySelection(value: any): any;
	isAllowEmptySelection(): bool;
	isSelected(item: qx_ui_core_Widget): bool;
	isSelectionEmpty(): bool;
	resetAllowEmptySelection(): void;
	resetSelected(): void;
	setAllowEmptySelection(value: any): any;
	setSelected(item: qx_ui_core_Widget): void;
	toggleAllowEmptySelection(): bool;
}
interface qx_ui_core_SpacerStatic {
	new(width: number, height: number): qx_ui_core_Spacer;
}
interface qx_ui_core_Spacer extends qx_ui_core_LayoutItem {
	addChildrenToQueue(queue: any): void;
	checkAppearanceNeeds(): void;
	destroy(): void;
}
interface qx_ui_core_WidgetStatic {
	contains(parent: qx_ui_core_Widget, child: qx_ui_core_Widget): bool;
	getWidgetByElement(element: Element, considerAnonymousState: bool): qx_ui_core_Widget;
	new(): qx_ui_core_Widget;
}
interface qx_ui_core_Widget extends qx_ui_core_LayoutItem {
	__addHelper(child: qx_ui_core_LayoutItem, options: any): void;
	__checkInsetsModified(a: qx_html_Decorator, b: qx_html_Decorator): bool;
	__createContentElement(): qx_html_Element;
	__removeHelper(child: qx_ui_core_LayoutItem): void;
	_add(child: qx_ui_core_LayoutItem, options: any): void;
	_addAfter(child: qx_ui_core_LayoutItem, after: qx_ui_core_LayoutItem, options: any): void;
	_addAt(child: qx_ui_core_LayoutItem, index: number, options: any): void;
	_addBefore(child: qx_ui_core_LayoutItem, before: qx_ui_core_LayoutItem, options: any): void;
	_afterAddChild(child: qx_ui_core_LayoutItem): void;
	_afterRemoveChild(child: qx_ui_core_LayoutItem): void;
	_applyAppearance(value: string, old: string): void;
	_applyBackgroundColor(value: qx_theme_classic_Color, old: qx_theme_classic_Color): void;
	_applyContextMenu(value: qx_ui_menu_Menu, old: qx_ui_menu_Menu): void;
	_applyCursor(value: string, old: string): void;
	_applyDecorator(value: qx_html_Decorator, old: qx_html_Decorator): void;
	_applyDraggable(value: bool, old: bool): void;
	_applyDroppable(value: bool, old: bool): void;
	_applyEnabled(value: bool, old: bool): void;
	_applyFocusable(value: bool, old: bool): void;
	_applyFont(value: qx_bom_Font, old: qx_bom_Font): void;
	_applyKeepActive(value: bool, old: bool): void;
	_applyKeepFocus(value: bool, old: bool): void;
	_applyNativeContextMenu(value: bool, old: bool): void;
	_applyOpacity(value: number, old: number): void;
	_applyPadding(value: number, old: number): void;
	_applySelectable(value: bool, old: bool): void;
	_applyShadow(value: qx_html_Decorator, old: qx_html_Decorator): void;
	_applyTabIndex(value: number, old: number): void;
	_applyTextColor(value: qx_theme_classic_Color, old: qx_theme_classic_Color): void;
	_applyToolTipText(value: string, old: string): void;
	_applyVisibility(value: any, old: any): void;
	_applyZIndex(value: number, old: number): void;
	_computeSizeHint(): void;
	_createChildControl(id: string): qx_ui_core_Widget;
	_createChildControlImpl(id: string, hash: string): qx_ui_core_Widget;
	_createContainerElement(): qx_html_Element;
	_createContentElement(): void;
	_createProtectorElement(): qx_html_Element;
	_disposeChildControls(): void;
	_excludeChildControl(id: string): void;
	_findTopControl(): qx_ui_core_Widget;
	_getChildren(): qx_ui_core_LayoutItem;
	_getContentHeightForWidth(width: number): number;
	_getContentHint(): any;
	_getCreatedChildControls(): any;
	_getHeightForWidth(width: any): void;
	_getLayout(): void;
	_hasChildren(): bool;
	_indexOf(child: qx_ui_core_Widget): number;
	_isChildControlVisible(id: string): bool;
	_onBeforeContextMenuOpen(e: qx_event_type_Data): void;
	_onContextMenuOpen(e: qx_event_type_Mouse): void;
	_onDrag(e: qx_event_type_Drag): void;
	_onDragChange(e: qx_event_type_Drag): void;
	_onDragEnd(e: qx_event_type_Drag): void;
	_onDragStart(e: qx_event_type_Drag): void;
	_onStopEvent(e: qx_event_type_Event): void;
	_remove(child: qx_ui_core_LayoutItem): void;
	_removeAll(): any[];
	_removeAt(index: number): qx_ui_core_LayoutItem;
	_setLayout(layout: qx_ui_layout_Abstract): void;
	_showChildControl(id: string): qx_ui_core_Widget;
	activate(): void;
	addChildrenToQueue(queue: any[]): void;
	addState(state: string): void;
	blur(): void;
	capture(containerCapture: bool): void;
	checkAppearanceNeeds(): void;
	clearSeparators(): void;
	clone(): void;
	deactivate(): void;
	destroy(): void;
	exclude(): void;
	focus(): void;
	getAnonymous(): any;
	getAppearance(): any;
	getBackgroundColor(): any;
	getBlockToolTip(): any;
	getChildControl(id: string, notcreate: bool): qx_ui_core_Widget;
	getChildrenContainer(): qx_ui_core_Widget;
	getContainerElement(): qx_html_Element;
	getContainerLocation(mode: string): any;
	getContentElement(): qx_html_Element;
	getContentLocation(mode: string): any;
	getContextMenu(): any;
	getCursor(): any;
	getDecorator(): any;
	getDecoratorElement(): qx_html_Decorator;
	getDraggable(): any;
	getDroppable(): any;
	getEnabled(): any;
	getEventTarget(): qx_ui_core_Widget;
	getFocusable(): any;
	getFocusElement(): qx_html_Element;
	getFocusTarget(): qx_ui_core_Widget;
	getFont(): any;
	getInnerSize(): any;
	getInsets(): any;
	getKeepActive(): any;
	getKeepFocus(): any;
	getLayoutChildren(): qx_ui_core_Widget;
	getNativeContextMenu(): any;
	getOpacity(): any;
	getPaddingBottom(): any;
	getPaddingLeft(): any;
	getPaddingRight(): any;
	getPaddingTop(): any;
	getSelectable(): any;
	getShadow(): any;
	getShadowElement(): qx_html_Decorator;
	getTabIndex(): any;
	getTextColor(): any;
	getToolTip(): any;
	getToolTipIcon(): any;
	getToolTipText(): any;
	getVisibility(): any;
	getZIndex(): any;
	hasChildControl(id: string): bool;
	hasLayoutChildren(): bool;
	hasState(state: string): bool;
	hide(): void;
	initAnonymous(value: any): any;
	initAppearance(value: any): any;
	initBackgroundColor(value: any): any;
	initBlockToolTip(value: any): any;
	initContextMenu(value: any): any;
	initCursor(value: any): any;
	initDecorator(value: any): any;
	initDraggable(value: any): any;
	initDroppable(value: any): any;
	initEnabled(value: any): any;
	initFocusable(value: any): any;
	initFont(value: any): any;
	initKeepActive(value: any): any;
	initKeepFocus(value: any): any;
	initNativeContextMenu(value: any): any;
	initOpacity(value: any): any;
	initPaddingBottom(value: any): any;
	initPaddingLeft(value: any): any;
	initPaddingRight(value: any): any;
	initPaddingTop(value: any): any;
	initSelectable(value: any): any;
	initShadow(value: any): any;
	initTabIndex(value: any): any;
	initTextColor(value: any): any;
	initToolTip(value: any): any;
	initToolTipIcon(value: any): any;
	initToolTipText(value: any): any;
	initVisibility(value: any): any;
	initZIndex(value: any): any;
	invalidateLayoutCache(): void;
	invalidateLayoutChildren(): void;
	isAnonymous(): bool;
	isBlockToolTip(): bool;
	isDraggable(): bool;
	isDroppable(): bool;
	isEnabled(): bool;
	isExcluded(): bool;
	isFocusable(): bool;
	isHidden(): bool;
	isKeepActive(): bool;
	isKeepFocus(): bool;
	isNativeContextMenu(): bool;
	isSeeable(): bool;
	isSelectable(): bool;
	isTabable(): bool;
	isVisible(): bool;
	releaseCapture(): void;
	removeState(state: string): void;
	renderLayout(left: any, top: any, width: any, height: any): void;
	renderSeparator(separator: any, bounds: any): void;
	replaceState(old: string, value: string): void;
	resetAnonymous(): void;
	resetAppearance(): void;
	resetBackgroundColor(): void;
	resetBlockToolTip(): void;
	resetContextMenu(): void;
	resetCursor(): void;
	resetDecorator(): void;
	resetDraggable(): void;
	resetDroppable(): void;
	resetEnabled(): void;
	resetFocusable(): void;
	resetFont(): void;
	resetKeepActive(): void;
	resetKeepFocus(): void;
	resetNativeContextMenu(): void;
	resetOpacity(): void;
	resetPadding(): void;
	resetPaddingBottom(): void;
	resetPaddingLeft(): void;
	resetPaddingRight(): void;
	resetPaddingTop(): void;
	resetSelectable(): void;
	resetShadow(): void;
	resetTabIndex(): void;
	resetTextColor(): void;
	resetToolTip(): void;
	resetToolTipIcon(): void;
	resetToolTipText(): void;
	resetVisibility(): void;
	resetZIndex(): void;
	scheduleLayoutUpdate(): void;
	scrollChildIntoView(child: qx_ui_core_Widget, alignX: string, alignY: string, direct: bool): void;
	scrollChildIntoViewX(child: qx_ui_core_Widget, align: string, direct: bool): void;
	scrollChildIntoViewY(child: qx_ui_core_Widget, align: string, direct: bool): void;
	setAnonymous(value: any): any;
	setAppearance(value: any): any;
	setBackgroundColor(value: any): any;
	setBlockToolTip(value: any): any;
	setContextMenu(value: any): any;
	setCursor(value: any): any;
	setDecorator(value: any): any;
	setDomLeft(value: number): void;
	setDomPosition(left: number, top: number): void;
	setDomTop(value: number): void;
	setDraggable(value: any): any;
	setDroppable(value: any): any;
	setEnabled(value: any): any;
	setFocusable(value: any): any;
	setFont(value: any): any;
	setKeepActive(value: any): any;
	setKeepFocus(value: any): any;
	setLayoutParent(parent: any): void;
	setNativeContextMenu(value: any): any;
	setOpacity(value: any): any;
	setPadding(paddingTop: any, paddingRight: any, paddingBottom: any, paddingLeft: any): void;
	setPaddingBottom(value: any): any;
	setPaddingLeft(value: any): any;
	setPaddingRight(value: any): any;
	setPaddingTop(value: any): any;
	setSelectable(value: any): any;
	setShadow(value: any): any;
	setTabIndex(value: any): any;
	setTextColor(value: any): any;
	setToolTip(value: any): any;
	setToolTipIcon(value: any): any;
	setToolTipText(value: any): any;
	setVisibility(value: any): any;
	setZIndex(value: any): any;
	show(): void;
	syncAppearance(): void;
	syncWidget(jobs: any): void;
	tabFocus(): void;
	toggleAnonymous(): bool;
	toggleBlockToolTip(): bool;
	toggleDraggable(): bool;
	toggleDroppable(): bool;
	toggleEnabled(): bool;
	toggleFocusable(): bool;
	toggleKeepActive(): bool;
	toggleKeepFocus(): bool;
	toggleNativeContextMenu(): bool;
	toggleSelectable(): bool;
	updateAppearance(): void;
	visualizeBlur(): void;
	visualizeFocus(): void;
}
interface qx_ui_decoration_AbstractStatic {
}
interface qx_ui_decoration_Abstract extends qx_core_Object {
	_applyInsets(value: number, old: number): void;
	_getDefaultInsets(): any;
	_isInitialized(): bool;
	_resetInsets(): void;
	getInsetBottom(): any;
	getInsetLeft(): any;
	getInsetRight(): any;
	getInsets(): void;
	getInsetTop(): any;
	initInsetBottom(value: any): any;
	initInsetLeft(value: any): any;
	initInsetRight(value: any): any;
	initInsetTop(value: any): any;
	resetInsetBottom(): void;
	resetInsetLeft(): void;
	resetInsetRight(): void;
	resetInsets(): void;
	resetInsetTop(): void;
	setInsetBottom(value: any): any;
	setInsetLeft(value: any): any;
	setInsetRight(value: any): any;
	setInsets(insetTop: any, insetRight: any, insetBottom: any, insetLeft: any): void;
	setInsetTop(value: any): any;
}
interface qx_ui_decoration_AbstractBoxStatic {
	new(baseImage: string, insets: number, orientation: string): qx_ui_decoration_AbstractBox;
	new(baseImage: string, insets: any[], orientation: string): qx_ui_decoration_AbstractBox;
}
interface qx_ui_decoration_AbstractBox extends qx_ui_decoration_Abstract {
	__setBorderImage(baseImage: string): void;
	_applyBaseImage(value: string, old: string): void;
	_applyFill(value: any, old: any): void;
	_applyInsets(value: number, old: number): void;
	_applySlices(value: number, old: number): void;
	_setOrientation(orientation: string): void;
	getBaseImage(): any;
	getFill(): any;
	getInsets(): void;
	getMarkup(): void;
	getSliceBottom(): any;
	getSliceLeft(): any;
	getSliceRight(): any;
	getSliceTop(): any;
	initBaseImage(value: any): any;
	initFill(value: any): any;
	initSliceBottom(value: any): any;
	initSliceLeft(value: any): any;
	initSliceRight(value: any): any;
	initSliceTop(value: any): any;
	resetBaseImage(): void;
	resetFill(): void;
	resetSliceBottom(): void;
	resetSliceLeft(): void;
	resetSliceRight(): void;
	resetSlices(): void;
	resetSliceTop(): void;
	resize(element: any, width: any, height: any): void;
	setBaseImage(value: any): any;
	setFill(value: any): any;
	setSliceBottom(value: any): any;
	setSliceLeft(value: any): any;
	setSliceRight(value: any): any;
	setSlices(sliceTop: any, sliceRight: any, sliceBottom: any, sliceLeft: any): void;
	setSliceTop(value: any): any;
	tint(element: any, bgcolor: any): void;
}
interface qx_ui_decoration_BackgroundStatic {
	new(backgroundColor: qx_theme_classic_Color): qx_ui_decoration_Background;
}
interface qx_ui_decoration_Background extends qx_ui_decoration_Abstract {
	_getDefaultInsets(): void;
	_isInitialized(): void;
	getMarkup(): void;
	resize(element: any, width: any, height: any): void;
	tint(element: any, bgcolor: any): void;
}
interface qx_ui_decoration_BeveledStatic {
	new(outerColor: qx_theme_classic_Color, innerColor: qx_theme_classic_Color, innerOpacity: number): qx_ui_decoration_Beveled;
}
interface qx_ui_decoration_Beveled extends qx_ui_decoration_Abstract {
	_applyStyle(value: any, old: any): void;
	_getDefaultInsets(): void;
	_isInitialized(): void;
	getInnerColor(): any;
	getInnerOpacity(): any;
	getMarkup(): void;
	getOuterColor(): any;
	initInnerColor(value: any): any;
	initInnerOpacity(value: any): any;
	initOuterColor(value: any): any;
	resetInnerColor(): void;
	resetInnerOpacity(): void;
	resetOuterColor(): void;
	resize(element: any, width: any, height: any): void;
	setInnerColor(value: any): any;
	setInnerOpacity(value: any): any;
	setOuterColor(value: any): any;
	tint(element: any, bgcolor: any): void;
}
interface qx_ui_decoration_BoxDivStatic {
	new(baseImage: string, insets: number, orientation: string): qx_ui_decoration_BoxDiv;
	new(baseImage: string, insets: any[], orientation: string): qx_ui_decoration_BoxDiv;
}
interface qx_ui_decoration_BoxDiv extends qx_ui_decoration_Abstract {
	_applyBaseImage(value: string, old: string): void;
	_getDefaultInsets(): void;
	_isInitialized(): void;
	_setOrientation(orientation: string): void;
	getBaseImage(): any;
	getMarkup(): void;
	initBaseImage(value: any): any;
	resetBaseImage(): void;
	resize(element: any, width: any, height: any): void;
	setBaseImage(value: any): any;
	tint(element: any, bgcolor: any): void;
}
interface qx_ui_decoration_css3_BorderImageStatic {
	new(borderImage: string, slice: number): qx_ui_decoration_css3_BorderImage;
	new(borderImage: string, slice: any[]): qx_ui_decoration_css3_BorderImage;
}
interface qx_ui_decoration_css3_BorderImage extends qx_ui_decoration_Abstract {
	_applyStyle(value: any, old: any): void;
	_getDefaultInsets(): void;
	_isInitialized(): void;
	_resolveImageUrl(image: string): string;
	getBorderImage(): any;
	getFill(): any;
	getMarkup(): void;
	getRepeatX(): any;
	getRepeatY(): any;
	getSliceBottom(): any;
	getSliceLeft(): any;
	getSliceRight(): any;
	getSliceTop(): any;
	initBorderImage(value: any): any;
	initFill(value: any): any;
	initRepeatX(value: any): any;
	initRepeatY(value: any): any;
	initSliceBottom(value: any): any;
	initSliceLeft(value: any): any;
	initSliceRight(value: any): any;
	initSliceTop(value: any): any;
	isFill(): bool;
	resetBorderImage(): void;
	resetFill(): void;
	resetRepeat(): void;
	resetRepeatX(): void;
	resetRepeatY(): void;
	resetSlice(): void;
	resetSliceBottom(): void;
	resetSliceLeft(): void;
	resetSliceRight(): void;
	resetSliceTop(): void;
	resize(element: any, width: any, height: any): void;
	setBorderImage(value: any): any;
	setFill(value: any): any;
	setRepeat(repeatX: any, repeatY: any): void;
	setRepeatX(value: any): any;
	setRepeatY(value: any): any;
	setSlice(sliceTop: any, sliceRight: any, sliceBottom: any, sliceLeft: any): void;
	setSliceBottom(value: any): any;
	setSliceLeft(value: any): any;
	setSliceRight(value: any): any;
	setSliceTop(value: any): any;
	tint(element: any, bgcolor: any): void;
	toggleFill(): bool;
}
interface qx_ui_decoration_DoubleStatic {
	new(width: number, style: string, color: qx_theme_classic_Color, innerWidth: string, innerColor: qx_theme_classic_Color): qx_ui_decoration_Double;
}
interface qx_ui_decoration_Double extends qx_ui_decoration_Abstract {
	_getDefaultInsets(): void;
	_isInitialized(): void;
	getMarkup(): void;
	resize(element: any, width: any, height: any): void;
	tint(element: any, bgcolor: any): void;
}
interface qx_ui_decoration_DynamicDecoratorStatic {
}
interface qx_ui_decoration_DynamicDecorator extends qx_ui_decoration_Abstract {
	_getDefaultInsets(): void;
	_getStyles(): any;
	_isInitialized(): void;
	getMarkup(): void;
	getStyles(): any;
	resize(element: any, width: any, height: any): void;
	tint(element: any, bgcolor: any): void;
}
interface qx_ui_decoration_GridStatic {
	new(baseImage: string, insets: number): qx_ui_decoration_Grid;
	new(baseImage: string, insets: any[]): qx_ui_decoration_Grid;
}
interface qx_ui_decoration_Grid extends qx_core_Object {
	__setBorderImage(baseImage: string): void;
	_applyBaseImage(value: string, old: string): void;
	_applyFill(value: any, old: any): void;
	_applyInsets(value: number, old: number): void;
	_applySlices(value: number, old: number): void;
	getBaseImage(): any;
	getFill(): any;
	getInsetBottom(): any;
	getInsetLeft(): any;
	getInsetRight(): any;
	getInsets(): void;
	getInsetTop(): any;
	getMarkup(): void;
	getSliceBottom(): any;
	getSliceLeft(): any;
	getSliceRight(): any;
	getSliceTop(): any;
	initBaseImage(value: any): any;
	initFill(value: any): any;
	initInsetBottom(value: any): any;
	initInsetLeft(value: any): any;
	initInsetRight(value: any): any;
	initInsetTop(value: any): any;
	initSliceBottom(value: any): any;
	initSliceLeft(value: any): any;
	initSliceRight(value: any): any;
	initSliceTop(value: any): any;
	resetBaseImage(): void;
	resetFill(): void;
	resetInsetBottom(): void;
	resetInsetLeft(): void;
	resetInsetRight(): void;
	resetInsets(): void;
	resetInsetTop(): void;
	resetSliceBottom(): void;
	resetSliceLeft(): void;
	resetSliceRight(): void;
	resetSlices(): void;
	resetSliceTop(): void;
	resize(element: any, width: any, height: any): void;
	setBaseImage(value: any): any;
	setFill(value: any): any;
	setInsetBottom(value: any): any;
	setInsetLeft(value: any): any;
	setInsetRight(value: any): any;
	setInsets(insetTop: any, insetRight: any, insetBottom: any, insetLeft: any): void;
	setInsetTop(value: any): any;
	setSliceBottom(value: any): any;
	setSliceLeft(value: any): any;
	setSliceRight(value: any): any;
	setSlices(sliceTop: any, sliceRight: any, sliceBottom: any, sliceLeft: any): void;
	setSliceTop(value: any): any;
	tint(element: any, bgcolor: any): void;
}
interface qx_ui_decoration_GridDivStatic {
	new(baseImage: string, insets: number): qx_ui_decoration_GridDiv;
	new(baseImage: string, insets: any[]): qx_ui_decoration_GridDiv;
}
interface qx_ui_decoration_GridDiv extends qx_ui_decoration_Abstract {
	_applyBaseImage(value: string, old: string): void;
	_computeEdgeSizes(images: any): any;
	_getDefaultInsets(): void;
	_isInitialized(): void;
	_resolveImageUrl(image: string): string;
	getBaseImage(): any;
	getMarkup(): void;
	initBaseImage(value: any): any;
	resetBaseImage(): void;
	resize(element: any, width: any, height: any): void;
	setBaseImage(value: any): any;
	tint(element: any, bgcolor: any): void;
}
interface qx_ui_decoration_HBoxStatic {
	new(baseImage: string, insets: number): qx_ui_decoration_HBox;
	new(baseImage: string, insets: any[]): qx_ui_decoration_HBox;
}
interface qx_ui_decoration_HBox extends qx_ui_decoration_AbstractBox {
}
interface qx_ui_decoration_IDecoratorStatic {
}
interface qx_ui_decoration_IDecorator {
	getInsets(): any;
	getMarkup(): string;
	resize(element: qx_html_Element, width: number, height: number): void;
	tint(element: qx_html_Element, bgcolor: qx_theme_classic_Color): void;
}
interface qx_ui_decoration_MBackgroundColorStatic {
}
interface qx_ui_decoration_MBackgroundColor {
	_applyBackgroundColor(value: qx_theme_classic_Color, old: qx_theme_classic_Color): void;
	_resizeBackgroundColor(element: Element, width: number, height: number): any;
	_tintBackgroundColor(element: Element, bgcolor: qx_theme_classic_Color, styles: any): void;
	getBackgroundColor(): any;
	initBackgroundColor(value: any): any;
	resetBackgroundColor(): void;
	setBackgroundColor(value: any): any;
}
interface qx_ui_decoration_MBackgroundImageStatic {
}
interface qx_ui_decoration_MBackgroundImage {
	_applyBackgroundImage(value: any, old: any): void;
	_generateBackgroundMarkup(styles: any, content: string): string;
	getBackgroundImage(): any;
	getBackgroundPositionX(): any;
	getBackgroundPositionY(): any;
	getBackgroundRepeat(): any;
	initBackgroundImage(value: any): any;
	initBackgroundPositionX(value: any): any;
	initBackgroundPositionY(value: any): any;
	initBackgroundRepeat(value: any): any;
	resetBackgroundImage(): void;
	resetBackgroundPosition(): void;
	resetBackgroundPositionX(): void;
	resetBackgroundPositionY(): void;
	resetBackgroundRepeat(): void;
	setBackgroundImage(value: any): any;
	setBackgroundPosition(backgroundPositionY: any, backgroundPositionX: any): void;
	setBackgroundPositionX(value: any): any;
	setBackgroundPositionY(value: any): any;
	setBackgroundRepeat(value: any): any;
}
interface qx_ui_decoration_MBorderRadiusStatic {
}
interface qx_ui_decoration_MBorderRadius {
	_applyBorderRadius(value: number, old: number): void;
	_styleBorderRadius(styles: any): void;
	getRadiusBottomLeft(): any;
	getRadiusBottomRight(): any;
	getRadiusTopLeft(): any;
	getRadiusTopRight(): any;
	initRadiusBottomLeft(value: any): any;
	initRadiusBottomRight(value: any): any;
	initRadiusTopLeft(value: any): any;
	initRadiusTopRight(value: any): any;
	resetRadius(): void;
	resetRadiusBottomLeft(): void;
	resetRadiusBottomRight(): void;
	resetRadiusTopLeft(): void;
	resetRadiusTopRight(): void;
	setRadius(radiusTopLeft: any, radiusTopRight: any, radiusBottomRight: any, radiusBottomLeft: any): void;
	setRadiusBottomLeft(value: any): any;
	setRadiusBottomRight(value: any): any;
	setRadiusTopLeft(value: any): any;
	setRadiusTopRight(value: any): any;
}
interface qx_ui_decoration_MBoxShadowStatic {
}
interface qx_ui_decoration_MBoxShadow {
	_applyBoxShadow(value: any, old: any): void;
	_styleBoxShadow(styles: any): void;
	getInset(): any;
	getShadowBlurRadius(): any;
	getShadowColor(): any;
	getShadowHorizontalLength(): any;
	getShadowSpreadRadius(): any;
	getShadowVerticalLength(): any;
	initInset(value: any): any;
	initShadowBlurRadius(value: any): any;
	initShadowColor(value: any): any;
	initShadowHorizontalLength(value: any): any;
	initShadowSpreadRadius(value: any): any;
	initShadowVerticalLength(value: any): any;
	isInset(): bool;
	resetInset(): void;
	resetShadowBlurRadius(): void;
	resetShadowColor(): void;
	resetShadowHorizontalLength(): void;
	resetShadowLength(): void;
	resetShadowSpreadRadius(): void;
	resetShadowVerticalLength(): void;
	setInset(value: any): any;
	setShadowBlurRadius(value: any): any;
	setShadowColor(value: any): any;
	setShadowHorizontalLength(value: any): any;
	setShadowLength(shadowHorizontalLength: any, shadowVerticalLength: any): void;
	setShadowSpreadRadius(value: any): any;
	setShadowVerticalLength(value: any): any;
	toggleInset(): bool;
}
interface qx_ui_decoration_MDoubleBorderStatic {
	new(): qx_ui_decoration_MDoubleBorder;
}
interface qx_ui_decoration_MDoubleBorder {
	__generateMarkupDoubleBorder(styles: any): string;
	__getDefaultInsetsForDoubleBorder(): any;
	__resizeDoubleBorder(element: Element, width: number, height: number): any;
	__styleDoubleBorder(styles: any): void;
	getInnerColorBottom(): any;
	getInnerColorLeft(): any;
	getInnerColorRight(): any;
	getInnerColorTop(): any;
	getInnerWidthBottom(): any;
	getInnerWidthLeft(): any;
	getInnerWidthRight(): any;
	getInnerWidthTop(): any;
	initInnerColorBottom(value: any): any;
	initInnerColorLeft(value: any): any;
	initInnerColorRight(value: any): any;
	initInnerColorTop(value: any): any;
	initInnerWidthBottom(value: any): any;
	initInnerWidthLeft(value: any): any;
	initInnerWidthRight(value: any): any;
	initInnerWidthTop(value: any): any;
	resetInnerColor(): void;
	resetInnerColorBottom(): void;
	resetInnerColorLeft(): void;
	resetInnerColorRight(): void;
	resetInnerColorTop(): void;
	resetInnerWidth(): void;
	resetInnerWidthBottom(): void;
	resetInnerWidthLeft(): void;
	resetInnerWidthRight(): void;
	resetInnerWidthTop(): void;
	setInnerColor(innerColorTop: any, innerColorRight: any, innerColorBottom: any, innerColorLeft: any): void;
	setInnerColorBottom(value: any): any;
	setInnerColorLeft(value: any): any;
	setInnerColorRight(value: any): any;
	setInnerColorTop(value: any): any;
	setInnerWidth(innerWidthTop: any, innerWidthRight: any, innerWidthBottom: any, innerWidthLeft: any): void;
	setInnerWidthBottom(value: any): any;
	setInnerWidthLeft(value: any): any;
	setInnerWidthRight(value: any): any;
	setInnerWidthTop(value: any): any;
}
interface qx_ui_decoration_MLinearBackgroundGradientStatic {
}
interface qx_ui_decoration_MLinearBackgroundGradient {
	__getColors(): any;
	_applyLinearBackgroundGradient(value: any, old: any): void;
	_getContent(): string;
	_resizeLinearBackgroundGradient(element: Element, width: number, height: number): any;
	_styleLinearBackgroundGradient(styles: any): void;
	getColorPositionUnit(): any;
	getEndColor(): any;
	getEndColorPosition(): any;
	getOrientation(): any;
	getStartColor(): any;
	getStartColorPosition(): any;
	initColorPositionUnit(value: any): any;
	initEndColor(value: any): any;
	initEndColorPosition(value: any): any;
	initOrientation(value: any): any;
	initStartColor(value: any): any;
	initStartColorPosition(value: any): any;
	resetColorPositionUnit(): void;
	resetEndColor(): void;
	resetEndColorPosition(): void;
	resetGradientEnd(): void;
	resetGradientStart(): void;
	resetOrientation(): void;
	resetStartColor(): void;
	resetStartColorPosition(): void;
	setColorPositionUnit(value: any): any;
	setEndColor(value: any): any;
	setEndColorPosition(value: any): any;
	setGradientEnd(endColor: any, endColorPosition: any): void;
	setGradientStart(startColor: any, startColorPosition: any): void;
	setOrientation(value: any): any;
	setStartColor(value: any): any;
	setStartColorPosition(value: any): any;
}
interface qx_ui_decoration_MSingleBorderStatic {
}
interface qx_ui_decoration_MSingleBorder {
	_applyStyle(value: any, old: any): void;
	_applyWidth(value: number, old: number): void;
	_getDefaultInsetsForBorder(): any;
	_resizeBorder(element: Element, width: number, height: number): any;
	_styleBorder(styles: any): void;
	getColorBottom(): any;
	getColorLeft(): any;
	getColorRight(): any;
	getColorTop(): any;
	getStyleBottom(): any;
	getStyleLeft(): any;
	getStyleRight(): any;
	getStyleTop(): any;
	getWidthBottom(): any;
	getWidthLeft(): any;
	getWidthRight(): any;
	getWidthTop(): any;
	initColorBottom(value: any): any;
	initColorLeft(value: any): any;
	initColorRight(value: any): any;
	initColorTop(value: any): any;
	initStyleBottom(value: any): any;
	initStyleLeft(value: any): any;
	initStyleRight(value: any): any;
	initStyleTop(value: any): any;
	initWidthBottom(value: any): any;
	initWidthLeft(value: any): any;
	initWidthRight(value: any): any;
	initWidthTop(value: any): any;
	resetBottom(): void;
	resetColor(): void;
	resetColorBottom(): void;
	resetColorLeft(): void;
	resetColorRight(): void;
	resetColorTop(): void;
	resetLeft(): void;
	resetRight(): void;
	resetStyle(): void;
	resetStyleBottom(): void;
	resetStyleLeft(): void;
	resetStyleRight(): void;
	resetStyleTop(): void;
	resetTop(): void;
	resetWidth(): void;
	resetWidthBottom(): void;
	resetWidthLeft(): void;
	resetWidthRight(): void;
	resetWidthTop(): void;
	setBottom(widthBottom: any, styleBottom: any, colorBottom: any): void;
	setColor(colorTop: any, colorRight: any, colorBottom: any, colorLeft: any): void;
	setColorBottom(value: any): any;
	setColorLeft(value: any): any;
	setColorRight(value: any): any;
	setColorTop(value: any): any;
	setLeft(widthLeft: any, styleLeft: any, colorLeft: any): void;
	setRight(widthRight: any, styleRight: any, colorRight: any): void;
	setStyle(styleTop: any, styleRight: any, styleBottom: any, styleLeft: any): void;
	setStyleBottom(value: any): any;
	setStyleLeft(value: any): any;
	setStyleRight(value: any): any;
	setStyleTop(value: any): any;
	setTop(widthTop: any, styleTop: any, colorTop: any): void;
	setWidth(widthTop: any, widthRight: any, widthBottom: any, widthLeft: any): void;
	setWidthBottom(value: any): any;
	setWidthLeft(value: any): any;
	setWidthRight(value: any): any;
	setWidthTop(value: any): any;
}
interface qx_ui_decoration_SingleStatic {
	new(width: number, style: string, color: qx_theme_classic_Color): qx_ui_decoration_Single;
}
interface qx_ui_decoration_Single extends qx_ui_decoration_Abstract {
	_getDefaultInsets(): void;
	_isInitialized(): void;
	getMarkup(): void;
	resize(element: any, width: any, height: any): void;
	tint(element: any, bgcolor: any): void;
}
interface qx_ui_decoration_UniformStatic {
	new(width: number, style: string, color: qx_theme_classic_Color): qx_ui_decoration_Uniform;
}
interface qx_ui_decoration_Uniform extends qx_ui_decoration_Single {
}
interface qx_ui_decoration_VBoxStatic {
	new(baseImage: string, insets: number): qx_ui_decoration_VBox;
	new(baseImage: string, insets: any[]): qx_ui_decoration_VBox;
}
interface qx_ui_decoration_VBox extends qx_ui_decoration_AbstractBox {
}
interface qx_ui_embed_AbstractIframeStatic {
	new(source: string): qx_ui_embed_AbstractIframe;
}
interface qx_ui_embed_AbstractIframe extends qx_ui_core_Widget {
	__onNavigate(e: qx_event_type_Data): void;
	_applyFrameName(value: string, old: string): void;
	_applySource(value: string, old: string): void;
	_getIframeElement(): qx_html_Iframe;
	getBody(): Element;
	getDocument(): qx_bom_Document;
	getFrameName(): any;
	getName(): string;
	getSource(): any;
	getWindow(): qx_bom_Window;
	initFrameName(value: any): any;
	initSource(value: any): any;
	reload(): void;
	resetFrameName(): void;
	resetSource(): void;
	setFrameName(value: any): any;
	setSource(value: any): any;
}
interface qx_ui_embed_CanvasStatic {
	new(canvasWidth: number, canvasHeight: number): qx_ui_embed_Canvas;
}
interface qx_ui_embed_Canvas extends qx_ui_core_Widget {
	__redraw(): void;
	_applyCanvasHeight(value: number, old: number): void;
	_applyCanvasWidth(value: number, old: number): void;
	_createContentElement(): void;
	_draw(width: number, height: number, context: CanvasRenderingContext2D): void;
	_onResize(e: qx_event_type_Data): void;
	getCanvasHeight(): any;
	getCanvasWidth(): any;
	getContext2d(): CanvasRenderingContext2D;
	getSyncDimension(): any;
	initCanvasHeight(value: any): any;
	initCanvasWidth(value: any): any;
	initSyncDimension(value: any): any;
	isSyncDimension(): bool;
	resetCanvasHeight(): void;
	resetCanvasWidth(): void;
	resetSyncDimension(): void;
	setCanvasHeight(value: any): any;
	setCanvasWidth(value: any): any;
	setSyncDimension(value: any): any;
	toggleSyncDimension(): bool;
	update(): void;
}
interface qx_ui_embed_FlashStatic {
	new(source: string, id: string): qx_ui_embed_Flash;
}
interface qx_ui_embed_Flash extends qx_ui_core_Widget {
	__flashParamHelper(key: string, value: string): void;
	_applyAllowScriptAccess(value: any, old: any): void;
	_applyId(value: string, old: string): void;
	_applyLiveConnect(value: bool, old: bool): void;
	_applyLoop(value: bool, old: bool): void;
	_applyMayScript(value: bool, old: bool): void;
	_applyMenu(value: bool, old: bool): void;
	_applyPlay(value: bool, old: bool): void;
	_applyQuality(value: any, old: any): void;
	_applyScale(value: any, old: any): void;
	_applySource(value: string, old: string): void;
	_applyVariables(value: any, old: any): void;
	_applyWmode(value: any, old: any): void;
	_checkLoading(): void;
	_createContentElement(): void;
	getAllowScriptAccess(): any;
	getFlashElement(): Element;
	getId(): any;
	getLiveConnect(): any;
	getLoadTimeout(): any;
	getLoop(): any;
	getMayScript(): any;
	getMenu(): any;
	getPercentLoaded(): number;
	getPlay(): any;
	getQuality(): any;
	getScale(): any;
	getSource(): any;
	getVariables(): any;
	getWmode(): any;
	initAllowScriptAccess(value: any): any;
	initId(value: any): any;
	initLiveConnect(value: any): any;
	initLoadTimeout(value: any): any;
	initLoop(value: any): any;
	initMayScript(value: any): any;
	initMenu(value: any): any;
	initPlay(value: any): any;
	initQuality(value: any): any;
	initScale(value: any): any;
	initSource(value: any): any;
	initVariables(value: any): any;
	initWmode(value: any): any;
	isLiveConnect(): bool;
	isLoaded(): bool;
	isLoop(): bool;
	isMayScript(): bool;
	isMenu(): bool;
	isPlay(): bool;
	resetAllowScriptAccess(): void;
	resetId(): void;
	resetLiveConnect(): void;
	resetLoadTimeout(): void;
	resetLoop(): void;
	resetMayScript(): void;
	resetMenu(): void;
	resetPlay(): void;
	resetQuality(): void;
	resetScale(): void;
	resetSource(): void;
	resetVariables(): void;
	resetWmode(): void;
	setAllowScriptAccess(value: any): any;
	setId(value: any): any;
	setLiveConnect(value: any): any;
	setLoadTimeout(value: any): any;
	setLoop(value: any): any;
	setMayScript(value: any): any;
	setMenu(value: any): any;
	setPlay(value: any): any;
	setQuality(value: any): any;
	setScale(value: any): any;
	setSource(value: any): any;
	setVariables(value: any): any;
	setWmode(value: any): any;
	toggleLiveConnect(): bool;
	toggleLoop(): bool;
	toggleMayScript(): bool;
	toggleMenu(): bool;
	togglePlay(): bool;
}
interface qx_ui_embed_HtmlStatic {
	new(html: string): qx_ui_embed_Html;
}
interface qx_ui_embed_Html extends qx_ui_core_Widget {
	_applyCssClass(value: string, old: string): void;
	_applyFont(value: qx_bom_Font, old: qx_bom_Font): void;
	_applyHtml(value: string, old: string): void;
	_applySelectable(value: bool, old: bool): void;
	_applyTextColor(value: qx_theme_classic_Color, old: qx_theme_classic_Color): void;
	getCssClass(): any;
	getFocusElement(): void;
	getHtml(): any;
	initCssClass(value: any): any;
	initHtml(value: any): any;
	resetCssClass(): void;
	resetHtml(): void;
	setCssClass(value: any): any;
	setHtml(value: any): any;
}
interface qx_ui_embed_HtmlAreaStatic {
	isBlockNode(node: qx_dom_Node): bool;
	isParagraphParent(node: qx_dom_Node): bool;
	new(value: string, styleInformation: string, source: string): qx_ui_embed_HtmlArea;
	new(value: string, styleInformation: any, source: string): qx_ui_embed_HtmlArea;
}
interface qx_ui_embed_HtmlArea extends qx_ui_core_Widget {
	__addAppearListener(): void;
	__applyPostPonedProperties(): void;
	__delegateDataEvent(e: qx_event_type_Data): void;
	__delegateEvent(e: qx_event_type_Event): void;
	__focusContent(): void;
	__setupDelegateListeners(): void;
	__setupEditorComponent(): void;
	__setupInvalidateListener(): void;
	_applyContentType(value: string, old: string): void;
	_applyDefaultFontFamily(value: string, old: string): void;
	_applyDefaultFontSize(value: number, old: number): void;
	_applyInsertLinebreakOnCtrlEnter(value: bool, old: bool): void;
	_applyInsertParagraphOnLinebreak(value: bool, old: bool): void;
	_applyMessengerMode(value: bool, old: bool): void;
	_applyNativeContextMenu(value: bool, old: bool): void;
	_applyPostProcess(value: qx_lang_Function, old: qx_lang_Function): void;
	_applyUseUndoRedo(value: bool, old: bool): void;
	_createBlockerElement(): any;
	_initBlockerElement(): void;
	block(): void;
	clearSelection(): void;
	containsOnlyPlaceholder(): bool;
	focus(): void;
	forceEditable(): void;
	getCommandManager(): any;
	getCompleteHtml(): string;
	getComputedValue(skipHtmlEncoding: bool): string;
	getContentBody(): any;
	getContentDocument(): any;
	getContentType(): any;
	getContentWindow(): any;
	getContextInformation(): any;
	getDefaultFontFamily(): any;
	getDefaultFontSize(): any;
	getEditable(): bool;
	getFocusNode(): qx_dom_Node;
	getHtml(skipHtmlEncoding: bool): string;
	getIframeObject(): HTMLIFrameElement;
	getInsertLinebreakOnCtrlEnter(): any;
	getInsertParagraphOnLinebreak(): any;
	getMessengerMode(): any;
	getPostProcess(): any;
	getRange(): qx_bom_Range;
	getSavedRange(): qx_bom_Range;
	getSelectedHtml(): string;
	getSelectedText(): string;
	getSelection(): qx_bom_Selection;
	getTextNodes(): any[];
	getUseUndoRedo(): any;
	getValue(): string;
	getWords(node: any): string;
	getWordsWithElement(): any;
	initContentType(value: any): any;
	initDefaultFontFamily(value: any): any;
	initDefaultFontSize(value: any): any;
	initInsertLinebreakOnCtrlEnter(value: any): any;
	initInsertParagraphOnLinebreak(value: any): any;
	initMessengerMode(value: any): any;
	initPostProcess(value: any): any;
	initUseUndoRedo(value: any): any;
	insertHorizontalRuler(): bool;
	insertHtml(value: string): bool;
	insertHyperLink(url: string): bool;
	insertImage(attributes: any): bool;
	insertIndent(): bool;
	insertOrderedList(): bool;
	insertOutdent(): bool;
	insertUnorderedList(): bool;
	isEditable(): bool;
	isInsertLinebreakOnCtrlEnter(): bool;
	isInsertParagraphOnLinebreak(): bool;
	isLoaded(): bool;
	isMessengerMode(): bool;
	isReady(): bool;
	isUseUndoRedo(): bool;
	redo(): void;
	release(): void;
	removeBackgroundColor(): bool;
	removeBackgroundImage(): bool;
	removeFormat(): bool;
	renderLayout(left: any, top: any, width: any, height: any): void;
	resetContentType(): void;
	resetDefaultFontFamily(): void;
	resetDefaultFontSize(): void;
	resetHtml(): void;
	resetInsertLinebreakOnCtrlEnter(): void;
	resetInsertParagraphOnLinebreak(): void;
	resetMessengerMode(): void;
	resetPostProcess(): void;
	resetSavedRange(): void;
	resetUseUndoRedo(): void;
	saveRange(): void;
	selectAll(): bool;
	setBackgroundColor(value: string): bool;
	setBackgroundImage(url: string, repeat: string, position: string): bool;
	setBold(): bool;
	setContentType(value: any): any;
	setDefaultFontFamily(value: any): any;
	setDefaultFontSize(value: any): any;
	setEditable(value: bool): void;
	setFontFamily(value: string): bool;
	setFontSize(value: number): bool;
	setInsertLinebreakOnCtrlEnter(value: any): any;
	setInsertParagraphOnLinebreak(value: any): any;
	setItalic(): bool;
	setJustifyCenter(): bool;
	setJustifyFull(): bool;
	setJustifyLeft(): bool;
	setJustifyRight(): bool;
	setMessengerMode(value: any): any;
	setPostProcess(value: any): any;
	setStrikeThrough(): bool;
	setTextBackgroundColor(value: string): bool;
	setTextColor(value: string): bool;
	setUnderline(): bool;
	setUseUndoRedo(value: any): any;
	setValue(value: string): void;
	tabFocus(): void;
	toggleInsertLinebreakOnCtrlEnter(): bool;
	toggleInsertParagraphOnLinebreak(): bool;
	toggleMessengerMode(): bool;
	toggleUseUndoRedo(): bool;
	undo(): void;
}
interface qx_ui_embed_IframeStatic {
	new(source: string): qx_ui_embed_Iframe;
}
interface qx_ui_embed_Iframe extends qx_ui_embed_AbstractIframe {
	_applyNativeContextMenu(value: bool, old: bool): void;
	_applyNativeHelp(value: bool, old: bool): void;
	_applyScrollbar(value: any, old: any): void;
	_createBlockerElement(): any;
	_createContentElement(): void;
	_getIframeElement(): void;
	_onIframeLoad(e: qx_event_type_Event): void;
	_onNativeContextMenu(e: qx_event_type_Mouse): void;
	_syncSourceAfterDOMMove(): void;
	block(): void;
	getNativeHelp(): any;
	getScrollbar(): any;
	initNativeHelp(value: any): any;
	initScrollbar(value: any): any;
	isNativeHelp(): bool;
	release(): void;
	renderLayout(left: any, top: any, width: any, height: any): void;
	resetNativeHelp(): void;
	resetScrollbar(): void;
	setNativeHelp(value: any): any;
	setScrollbar(value: any): any;
	toggleNativeHelp(): bool;
}
interface qx_ui_embed_ThemedIframeStatic {
	new(source: any): qx_ui_embed_ThemedIframe;
}
interface qx_ui_embed_ThemedIframe extends qx_ui_embed_AbstractIframe {
	_addWheelListener(): void;
	_configureScrollbar(scrollbarId: string, show: bool, containerSize: number, contentSize: number): void;
	_createChildControlImpl(id: any, hash: any): void;
	_disableScollbars(): void;
	_getIframeElement(): void;
	_getIframeSize(): any;
	_onIframeLoad(): void;
	_onIframeObserverInterval(): void;
	_onIframeResize(): void;
	_onScrollBarX(e: qx_event_type_Data): void;
	_onScrollBarY(e: qx_event_type_Data): void;
	_preventIframeScrolling(): void;
	_startIframeObserver(): void;
	_stopIframeObserver(): void;
	_updateCornerWidget(): void;
	_updateScrollbars(): void;
	getScrollbarX(): any;
	getScrollbarY(): any;
	initScrollbarX(value: any): any;
	initScrollbarY(value: any): any;
	resetScrollbar(): void;
	resetScrollbarX(): void;
	resetScrollbarY(): void;
	scrollToX(x: number): void;
	scrollToY(y: number): void;
	setScrollbar(scrollbarX: any, scrollbarY: any): void;
	setScrollbarX(value: any): any;
	setScrollbarY(value: any): any;
}
interface qx_ui_form_AbstractFieldStatic {
	new(value: string): qx_ui_form_AbstractField;
}
interface qx_ui_form_AbstractField extends qx_ui_core_Widget {
	__fireChangeValueEvent(value: string): void;
	__getPlaceholderElement(): void;
	_applyEnabled(value: bool, old: bool): void;
	_applyFont(value: qx_bom_Font, old: qx_bom_Font): void;
	_applyPlaceholder(value: string, old: string): void;
	_applyReadOnly(value: bool, old: bool): void;
	_applyTextAlign(value: any, old: any): void;
	_applyTextColor(value: qx_theme_classic_Color, old: qx_theme_classic_Color): void;
	_createContentElement(): void;
	_createInputElement(): qx_html_Input;
	_getContentHint(): void;
	_getTextSize(): any;
	_onChangeContent(e: qx_event_type_Data): void;
	_onChangeLocale(e: qx_bom_client_Event): void;
	_onHtmlInput(e: qx_event_type_Data): void;
	_onWebFontStatusChange(ev: qx_event_type_Data): void;
	_removePlaceholder(): void;
	_renderContentElement(innerHeight: number, element: Element): void;
	_showPlaceholder(): void;
	_syncPlaceholder(): void;
	clearTextSelection(): void;
	getFilter(): any;
	getFocusElement(): void;
	getLiveUpdate(): any;
	getMaxLength(): any;
	getPlaceholder(): any;
	getReadOnly(): any;
	getTextAlign(): any;
	getTextSelection(): string;
	getTextSelectionEnd(): number;
	getTextSelectionLength(): number;
	getTextSelectionStart(): number;
	getValue(): string;
	initFilter(value: any): any;
	initLiveUpdate(value: any): any;
	initMaxLength(value: any): any;
	initPlaceholder(value: any): any;
	initReadOnly(value: any): any;
	initTextAlign(value: any): any;
	isLiveUpdate(): bool;
	isReadOnly(): bool;
	renderLayout(left: any, top: any, width: any, height: any): void;
	resetFilter(): void;
	resetLiveUpdate(): void;
	resetMaxLength(): void;
	resetPlaceholder(): void;
	resetReadOnly(): void;
	resetTextAlign(): void;
	resetValue(): void;
	selectAllText(): void;
	setFilter(value: any): any;
	setLiveUpdate(value: any): any;
	setMaxLength(value: any): any;
	setPlaceholder(value: any): any;
	setReadOnly(value: any): any;
	setTextAlign(value: any): any;
	setTextSelection(start: number, end: number): void;
	setValue(value: string): void;
	tabFocus(): void;
	toggleLiveUpdate(): bool;
	toggleReadOnly(): bool;
}
interface qx_ui_form_AbstractSelectBoxStatic {
	new(): qx_ui_form_AbstractSelectBox;
}
interface qx_ui_form_AbstractSelectBox extends qx_ui_core_Widget {
	_applyMaxListHeight(value: number, old: number): void;
	_createChildControlImpl(id: any, hash: any): void;
	_defaultFormat(item: qx_ui_form_ListItem): string;
	_onBlur(e: qx_event_type_Focus): void;
	_onKeyPress(e: qx_event_type_KeySequence): void;
	_onListChangeSelection(e: qx_event_type_Data): void;
	_onListMouseDown(e: qx_event_type_Mouse): void;
	_onMousewheel(e: qx_event_type_Mouse): void;
	_onPopupChangeVisibility(e: qx_event_type_Data): void;
	_onResize(e: qx_event_type_Data): void;
	close(): void;
	getChildrenContainer(): qx_ui_form_List;
	getFormat(): any;
	getMaxListHeight(): any;
	initFormat(value: any): any;
	initMaxListHeight(value: any): any;
	open(): void;
	resetFormat(): void;
	resetMaxListHeight(): void;
	setFormat(value: any): any;
	setMaxListHeight(value: any): any;
	toggle(): void;
}
interface qx_ui_form_ButtonStatic {
	new(label: string, icon: string, command: qx_ui_core_Command): qx_ui_form_Button;
}
interface qx_ui_form_Button extends qx_ui_basic_Atom {
	_onKeyDown(e: qx_bom_client_Event): void;
	_onKeyUp(e: qx_bom_client_Event): void;
	_onMouseDown(e: qx_bom_client_Event): void;
	_onMouseOut(e: qx_bom_client_Event): void;
	_onMouseOver(e: qx_bom_client_Event): void;
	_onMouseUp(e: qx_bom_client_Event): void;
	press(): void;
	release(): void;
	reset(): void;
}
interface qx_ui_form_CheckBoxStatic {
	new(label: string): qx_ui_form_CheckBox;
}
interface qx_ui_form_CheckBox extends qx_ui_form_ToggleButton {
}
interface qx_ui_form_ComboBoxStatic {
	new(): qx_ui_form_ComboBox;
}
interface qx_ui_form_ComboBox extends qx_ui_form_AbstractSelectBox {
	_applyPlaceholder(value: string, old: string): void;
	_createChildControlImpl(id: any, hash: any): void;
	_onClick(e: qx_event_type_Mouse): void;
	_onKeyPress(e: any): void;
	_onListChangeSelection(e: any): void;
	_onListMouseDown(e: any): void;
	_onPopupChangeVisibility(e: any): void;
	_onTextFieldChangeValue(e: qx_event_type_Data): void;
	_setPreselectedItem(): void;
	clearTextSelection(): void;
	focus(): void;
	getPlaceholder(): any;
	getTextSelection(): string;
	getTextSelectionLength(): number;
	getValue(): void;
	initPlaceholder(value: any): any;
	resetAllTextSelection(): void;
	resetPlaceholder(): void;
	resetValue(): void;
	selectAllText(): void;
	setPlaceholder(value: any): any;
	setTextSelection(start: number, end: number): void;
	setValue(value: any): void;
	tabFocus(): void;
}
interface qx_ui_form_core_AbstractVirtualBoxStatic {
	new(model: qx_data_Array): qx_ui_form_core_AbstractVirtualBox;
}
interface qx_ui_form_core_AbstractVirtualBox extends qx_ui_core_Widget {
	_applyDelegate(value: any, old: any): void;
	_applyIconOptions(value: any, old: any): void;
	_applyIconPath(value: string, old: string): void;
	_applyLabelOptions(value: any, old: any): void;
	_applyLabelPath(value: string, old: string): void;
	_applyMaxListHeight(value: number, old: number): void;
	_applyModel(value: qx_data_Array, old: qx_data_Array): void;
	_applyRowHeight(value: number, old: number): void;
	_beforeClose(): void;
	_beforeOpen(): void;
	_createChildControlImpl(id: any, hash: any): void;
	_getAction(event: qx_event_type_KeySequence): string;
	_getBindPath(source: string, path: string): string;
	_handleKeyboard(event: qx_event_type_KeySequence): void;
	_handleMouse(event: qx_event_type_Mouse): void;
	_handleMouse(event: qx_event_type_MouseWheel): void;
	_isModifierPressed(event: qx_event_type_KeySequence): bool;
	_onBlur(event: qx_event_type_Focus): void;
	_onPopupChangeVisibility(event: qx_event_type_Data): void;
	_onResize(event: qx_event_type_Data): void;
	close(): void;
	getDelegate(): any;
	getIconOptions(): any;
	getIconPath(): any;
	getItemHeight(): any;
	getLabelOptions(): any;
	getLabelPath(): any;
	getMaxListHeight(): any;
	getModel(): any;
	initDelegate(value: any): any;
	initIconOptions(value: any): any;
	initIconPath(value: any): any;
	initItemHeight(value: any): any;
	initLabelOptions(value: any): any;
	initLabelPath(value: any): any;
	initMaxListHeight(value: any): any;
	initModel(value: any): any;
	open(): void;
	refresh(): void;
	resetDelegate(): void;
	resetIconOptions(): void;
	resetIconPath(): void;
	resetItemHeight(): void;
	resetLabelOptions(): void;
	resetLabelPath(): void;
	resetMaxListHeight(): void;
	resetModel(): void;
	setDelegate(value: any): any;
	setIconOptions(value: any): any;
	setIconPath(value: any): any;
	setItemHeight(value: any): any;
	setLabelOptions(value: any): any;
	setLabelPath(value: any): any;
	setMaxListHeight(value: any): any;
	setModel(value: any): any;
	toggle(): void;
}
interface qx_ui_form_core_VirtualDropDownListStatic {
	new(target: qx_ui_form_core_AbstractVirtualBox): qx_ui_form_core_VirtualDropDownList;
}
interface qx_ui_form_core_VirtualDropDownList extends qx_ui_popup_Popup {
	__adjustHeight(): void;
	__adjustSize(): void;
	__adjustWidth(): void;
	__getAvailableHeigth(): number;
	__onChangeSelection(event: qx_event_type_Data): void;
	__onChangeVisibility(event: qx_event_type_Data): void;
	__selectPreselected(): void;
	__synchronizeSelection(source: qx_data_Array, target: qx_data_Array): void;
	_applySelection(value: qx_data_Array, old: qx_data_Array): void;
	_createChildControlImpl(id: any, hash: any): void;
	_handleKeyboard(event: qx_event_type_KeySequence): void;
	_handleMouse(event: qx_event_type_Mouse): void;
	_onChangeDelegate(event: qx_event_type_Data): void;
	_onChangeModel(event: qx_event_type_Data): void;
	_onListChangeSelection(event: qx_event_type_Data): void;
	close(): void;
	getSelection(): any;
	initSelection(value: any): any;
	open(): void;
	resetSelection(): void;
	setPreselected(modelItem: any): void;
	setSelection(value: any): any;
}
interface qx_ui_form_DateFieldStatic {
	getDefaultDateFormatter(): qx_util_format_DateFormat;
	new(): qx_ui_form_DateField;
}
interface qx_ui_form_DateField extends qx_ui_core_Widget {
	_addLocaleChangeLeistener(): void;
	_applyDateFormat(value: qx_util_format_DateFormat, old: qx_util_format_DateFormat): void;
	_applyPlaceholder(value: string, old: string): void;
	_createChildControlImpl(id: any, hash: any): void;
	_onBlur(e: qx_event_type_Focus): void;
	_onChangeDate(e: qx_event_type_Mouse): void;
	_onClick(e: qx_event_type_Mouse): void;
	_onKeyPress(e: qx_event_type_KeySequence): void;
	_onPopupChangeVisibility(e: qx_event_type_Data): void;
	_onTextFieldChangeValue(e: qx_event_type_Data): void;
	_setDefaultDateFormat(): void;
	close(): void;
	getDateFormat(): any;
	getPlaceholder(): any;
	getValue(): qx_lang_Date;
	initDateFormat(value: any): any;
	initPlaceholder(value: any): any;
	isEmpty(): bool;
	open(): void;
	resetDateFormat(): void;
	resetPlaceholder(): void;
	resetValue(): void;
	setDateFormat(value: any): any;
	setPlaceholder(value: any): any;
	setValue(value: qx_lang_Date): void;
	toggle(): void;
}
interface qx_ui_form_FormStatic {
	new(): qx_ui_form_Form;
}
interface qx_ui_form_Form extends qx_core_Object {
	__isFirstAdd(): bool;
	_createResetter(): qx_ui_form_Resetter;
	add(item: qx_ui_form_IForm, label: string, validator: qx_lang_Function, name: string, validatorContext: any, options: any): void;
	add(item: qx_ui_form_IForm, label: string, validator: qx_ui_form_validation_AsyncValidator, name: string, validatorContext: any, options: any): void;
	addButton(button: qx_ui_form_Button, options: any): void;
	addGroupHeader(title: string, options: any): void;
	getButtonOptions(): any[];
	getButtons(): any[];
	getGroups(): any[];
	getItems(): any;
	getValidationManager(): qx_ui_form_validation_Manager;
	redefineResetter(): void;
	reset(): void;
	validate(): bool;
}
interface qx_ui_form_HoverButtonStatic {
	new(label: string, icon: string): qx_ui_form_HoverButton;
}
interface qx_ui_form_HoverButton extends qx_ui_basic_Atom {
	_onInterval(): void;
	_onMouseOut(e: qx_event_type_Mouse): void;
	_onMouseOver(e: qx_event_type_Mouse): void;
	getFirstInterval(): any;
	getInterval(): any;
	getMinTimer(): any;
	getTimerDecrease(): any;
	initFirstInterval(value: any): any;
	initInterval(value: any): any;
	initMinTimer(value: any): any;
	initTimerDecrease(value: any): any;
	resetFirstInterval(): void;
	resetInterval(): void;
	resetMinTimer(): void;
	resetTimerDecrease(): void;
	setFirstInterval(value: any): any;
	setInterval(value: any): any;
	setMinTimer(value: any): any;
	setTimerDecrease(value: any): any;
}
interface qx_ui_form_IBooleanFormStatic {
}
interface qx_ui_form_IBooleanForm {
	getValue(): bool;
	resetValue(): void;
	setValue(value: bool): void;
	setValue(value: any): void;
}
interface qx_ui_form_IColorFormStatic {
}
interface qx_ui_form_IColorForm {
	getValue(): qx_theme_classic_Color;
	resetValue(): void;
	setValue(value: qx_theme_classic_Color): void;
	setValue(value: any): void;
}
interface qx_ui_form_IDateFormStatic {
}
interface qx_ui_form_IDateForm {
	getValue(): qx_lang_Date;
	resetValue(): void;
	setValue(value: qx_lang_Date): void;
	setValue(value: any): void;
}
interface qx_ui_form_IExecutableStatic {
}
interface qx_ui_form_IExecutable {
	execute(): void;
	getCommand(): qx_ui_core_Command;
	setCommand(command: qx_ui_core_Command): void;
}
interface qx_ui_form_IFormStatic {
}
interface qx_ui_form_IForm {
	getEnabled(): bool;
	getInvalidMessage(): string;
	getRequired(): bool;
	getRequiredInvalidMessage(): string;
	getValid(): bool;
	setEnabled(enabled: bool): void;
	setInvalidMessage(message: string): void;
	setRequired(required: bool): void;
	setRequiredInvalidMessage(message: string): void;
	setValid(valid: bool): void;
}
interface qx_ui_form_IModelStatic {
}
interface qx_ui_form_IModel {
	getModel(): any;
	resetModel(): void;
	setModel(value: any): void;
}
interface qx_ui_form_IModelSelectionStatic {
}
interface qx_ui_form_IModelSelection {
	getModelSelection(): any[];
	setModelSelection(value: any[]): void;
}
interface qx_ui_form_INumberFormStatic {
}
interface qx_ui_form_INumberForm {
	getValue(): number;
	resetValue(): void;
	setValue(value: number): void;
	setValue(value: any): void;
}
interface qx_ui_form_IRadioItemStatic {
}
interface qx_ui_form_IRadioItem {
	getGroup(): qx_ui_form_RadioGroup;
	getValue(): bool;
	setGroup(value: qx_ui_form_RadioGroup): void;
	setValue(value: bool): void;
}
interface qx_ui_form_IRangeStatic {
}
interface qx_ui_form_IRange {
	getMaximum(): number;
	getMinimum(): number;
	getPageStep(): number;
	getSingleStep(): number;
	setMaximum(max: number): void;
	setMinimum(min: number): void;
	setPageStep(step: number): void;
	setSingleStep(step: number): void;
}
interface qx_ui_form_IStringFormStatic {
}
interface qx_ui_form_IStringForm {
	getValue(): string;
	resetValue(): void;
	setValue(value: string): void;
	setValue(value: any): void;
}
interface qx_ui_form_ListStatic {
	new(horizontal: bool): qx_ui_form_List;
}
interface qx_ui_form_List extends qx_ui_core_scroll_AbstractScrollArea {
	_applyOrientation(value: any, old: any): void;
	_applySpacing(value: number, old: number): void;
	_createListItemContainer(): qx_ui_container_Composite;
	_onAddChild(e: qx_event_type_Data): void;
	_onKeyInput(e: qx_event_type_KeyInput): void;
	_onKeyPress(e: qx_event_type_KeySequence): bool;
	_onRemoveChild(e: qx_event_type_Data): void;
	findItem(search: string, ignoreCase: bool): qx_ui_form_ListItem;
	findItemByLabelFuzzy(search: string): qx_ui_form_ListItem;
	getChildrenContainer(): void;
	getEnableInlineFind(): any;
	getOrientation(): any;
	getSpacing(): any;
	handleKeyPress(e: qx_event_type_KeySequence): void;
	initEnableInlineFind(value: any): any;
	initOrientation(value: any): any;
	initSpacing(value: any): any;
	isEnableInlineFind(): bool;
	resetEnableInlineFind(): void;
	resetOrientation(): void;
	resetSpacing(): void;
	setEnableInlineFind(value: any): any;
	setOrientation(value: any): any;
	setSpacing(value: any): any;
	toggleEnableInlineFind(): bool;
}
interface qx_ui_form_ListItemStatic {
	new(label: string, icon: string, model: string): qx_ui_form_ListItem;
}
interface qx_ui_form_ListItem extends qx_ui_basic_Atom {
	_onMouseOut(): void;
	_onMouseOver(): void;
}
interface qx_ui_form_MenuButtonStatic {
	new(label: string, icon: string, menu: qx_ui_menu_Menu): qx_ui_form_MenuButton;
}
interface qx_ui_form_MenuButton extends qx_ui_form_Button {
	_applyMenu(value: qx_ui_menu_Menu, old: qx_ui_menu_Menu): void;
	_applyVisibility(value: any, old: any): void;
	_onKeyDown(e: any): void;
	_onKeyUp(e: any): void;
	_onMenuChange(e: qx_event_type_Data): void;
	_onMouseDown(e: any): void;
	_onMouseOut(e: any): void;
	_onMouseOver(e: any): void;
	_onMouseUp(e: any): void;
	getMenu(): any;
	initMenu(value: any): any;
	open(selectFirst: bool): void;
	resetMenu(): void;
	setMenu(value: any): any;
}
interface qx_ui_form_MFormStatic {
	new(): qx_ui_form_MForm;
}
interface qx_ui_form_MForm {
	__onChangeLocale(e: qx_bom_client_Event): void;
	_applyValid(value: bool, old: bool): void;
	getInvalidMessage(): any;
	getRequired(): any;
	getRequiredInvalidMessage(): any;
	getValid(): any;
	initInvalidMessage(value: any): any;
	initRequired(value: any): any;
	initRequiredInvalidMessage(value: any): any;
	initValid(value: any): any;
	isRequired(): bool;
	isValid(): bool;
	resetInvalidMessage(): void;
	resetRequired(): void;
	resetRequiredInvalidMessage(): void;
	resetValid(): void;
	setInvalidMessage(value: any): any;
	setRequired(value: any): any;
	setRequiredInvalidMessage(value: any): any;
	setValid(value: any): any;
	toggleRequired(): bool;
	toggleValid(): bool;
}
interface qx_ui_form_MModelPropertyStatic {
}
interface qx_ui_form_MModelProperty {
	getModel(): any;
	initModel(value: any): any;
	resetModel(): void;
	setModel(value: any): any;
}
interface qx_ui_form_MModelSelectionStatic {
	new(): qx_ui_form_MModelSelection;
}
interface qx_ui_form_MModelSelection {
	__onModelSelectionArrayChange(): void;
	__onModelSelectionChange(): void;
	getModelSelection(): qx_data_Array;
	setModelSelection(modelSelection: any[]): void;
}
interface qx_ui_form_PasswordFieldStatic {
}
interface qx_ui_form_PasswordField extends qx_ui_form_TextField {
	_createInputElement(): void;
}
interface qx_ui_form_RadioButtonStatic {
	new(label: string): qx_ui_form_RadioButton;
}
interface qx_ui_form_RadioButton extends qx_ui_form_Button {
	_applyGroup(value: any, old: any): void;
	_applyValue(value: bool, old: bool): void;
	_onExecute(e: qx_event_type_Event): void;
	_onKeyPress(e: qx_event_type_KeySequence): void;
	getGroup(): any;
	getValue(): any;
	initGroup(value: any): any;
	initValue(value: any): any;
	isValue(): bool;
	resetGroup(): void;
	resetValue(): void;
	setGroup(value: any): any;
	setValue(value: any): any;
	toggleValue(): bool;
}
interface qx_ui_form_RadioButtonGroupStatic {
	new(layout: qx_ui_layout_Abstract): qx_ui_form_RadioButtonGroup;
}
interface qx_ui_form_RadioButtonGroup extends qx_ui_core_Widget {
	_applyInvalidMessage(value: string, old: string): void;
	_applyValid(value: bool, old: bool): void;
	add(child: qx_ui_core_LayoutItem, options: any): void;
	getChildren(): qx_ui_core_LayoutItem;
	getInvalidMessage(): any;
	getRadioGroup(): qx_ui_form_RadioGroup;
	getRequired(): any;
	getRequiredInvalidMessage(): any;
	getSelectables(all: bool): qx_ui_core_Widget;
	getSelection(): qx_ui_core_Widget;
	getValid(): any;
	initInvalidMessage(value: any): any;
	initRequired(value: any): any;
	initRequiredInvalidMessage(value: any): any;
	initValid(value: any): any;
	isRequired(): bool;
	isSelected(item: qx_ui_core_Widget): bool;
	isSelectionEmpty(): bool;
	isValid(): bool;
	remove(child: qx_ui_core_LayoutItem): void;
	removeAll(): any[];
	resetInvalidMessage(): void;
	resetRequired(): void;
	resetRequiredInvalidMessage(): void;
	resetSelection(): void;
	resetValid(): void;
	setInvalidMessage(value: any): any;
	setRequired(value: any): any;
	setRequiredInvalidMessage(value: any): any;
	setSelection(items: qx_ui_core_Widget): void;
	setValid(value: any): any;
	toggleRequired(): bool;
	toggleValid(): bool;
}
interface qx_ui_form_RadioGroupStatic {
	new(varargs: qx_core_Object): qx_ui_form_RadioGroup;
}
interface qx_ui_form_RadioGroup extends qx_core_Object {
	__onChangeSelection(e: qx_event_type_Data): void;
	_applyAllowEmptySelection(value: bool, old: bool): void;
	_applyEnabled(value: bool, old: bool): void;
	_applyInvalidMessage(value: string, old: string): void;
	_applyValid(value: bool, old: bool): void;
	_getItems(): qx_ui_form_IRadioItem;
	_isAllowEmptySelection(): bool;
	_isItemSelectable(item: qx_ui_form_IRadioItem): bool;
	_onItemChangeChecked(e: qx_event_type_Data): void;
	add(varargs: qx_ui_form_IRadioItem): void;
	getAllowEmptySelection(): any;
	getChildren(): qx_ui_form_IRadioItem;
	getEnabled(): any;
	getInvalidMessage(): any;
	getItems(): qx_ui_form_IRadioItem;
	getRequired(): any;
	getRequiredInvalidMessage(): any;
	getValid(): any;
	getWrap(): any;
	initAllowEmptySelection(value: any): any;
	initEnabled(value: any): any;
	initInvalidMessage(value: any): any;
	initRequired(value: any): any;
	initRequiredInvalidMessage(value: any): any;
	initValid(value: any): any;
	initWrap(value: any): any;
	isAllowEmptySelection(): bool;
	isEnabled(): bool;
	isRequired(): bool;
	isValid(): bool;
	isWrap(): bool;
	remove(item: qx_ui_form_IRadioItem): void;
	resetAllowEmptySelection(): void;
	resetEnabled(): void;
	resetInvalidMessage(): void;
	resetRequired(): void;
	resetRequiredInvalidMessage(): void;
	resetValid(): void;
	resetWrap(): void;
	selectNext(): void;
	selectPrevious(): void;
	setAllowEmptySelection(value: any): any;
	setEnabled(value: any): any;
	setInvalidMessage(value: any): any;
	setRequired(value: any): any;
	setRequiredInvalidMessage(value: any): any;
	setValid(value: any): any;
	setWrap(value: any): any;
	toggleAllowEmptySelection(): bool;
	toggleEnabled(): bool;
	toggleRequired(): bool;
	toggleValid(): bool;
	toggleWrap(): bool;
}
interface qx_ui_form_renderer_AbstractRendererStatic {
	new(form: qx_ui_form_Form): qx_ui_form_renderer_AbstractRenderer;
}
interface qx_ui_form_renderer_AbstractRenderer extends qx_ui_core_Widget {
	_connectVisibility(item: qx_ui_core_Widget, label: qx_ui_basic_Label): void;
	_createLabelText(name: string, item: qx_ui_form_IForm): string;
	_onChangeLocale(e: qx_bom_client_Event): void;
	addButton(button: any): void;
	addItems(items: any, names: any, title: any): void;
}
interface qx_ui_form_renderer_DoubleStatic {
	new(form: any): qx_ui_form_renderer_Double;
}
interface qx_ui_form_renderer_Double extends qx_ui_form_renderer_AbstractRenderer {
	_createHeader(title: string): qx_ui_basic_Label;
	_createLabel(name: string, item: qx_ui_core_Widget): qx_ui_basic_Label;
	addButton(button: qx_ui_form_Button): void;
	addItems(items: qx_ui_core_Widget, names: string, title: string): void;
	getLayout(): qx_ui_layout_Grid;
}
interface qx_ui_form_renderer_IFormRendererStatic {
}
interface qx_ui_form_renderer_IFormRenderer {
	addButton(button: qx_ui_form_Button, options: any): void;
	addItems(items: qx_ui_core_Widget, names: string, title: string, itemsOptions: any[], headerOptions: any): void;
}
interface qx_ui_form_renderer_SingleStatic {
	new(form: any): qx_ui_form_renderer_Single;
}
interface qx_ui_form_renderer_Single extends qx_ui_form_renderer_AbstractRenderer {
	_createHeader(title: string): qx_ui_basic_Label;
	_createLabel(name: string, item: qx_ui_core_Widget): qx_ui_basic_Label;
	addButton(button: qx_ui_form_Button): void;
	addItems(items: qx_ui_core_Widget, names: string, title: string): void;
	getLayout(): qx_ui_layout_Grid;
}
interface qx_ui_form_renderer_SinglePlaceholderStatic {
}
interface qx_ui_form_renderer_SinglePlaceholder extends qx_ui_form_renderer_Single {
	addItems(items: any, names: any, title: any): void;
}
interface qx_ui_form_RepeatButtonStatic {
	new(label: string, icon: string): qx_ui_form_RepeatButton;
}
interface qx_ui_form_RepeatButton extends qx_ui_form_Button {
	__startInternalTimer(): void;
	__stopInternalTimer(): void;
	_applyEnabled(value: bool, old: bool): void;
	_onInterval(e: qx_event_type_Event): void;
	_onKeyDown(e: qx_bom_client_Event): void;
	_onKeyUp(e: qx_bom_client_Event): void;
	_onMouseDown(e: qx_event_type_Mouse): void;
	_onMouseOut(e: qx_bom_client_Event): void;
	_onMouseOver(e: qx_bom_client_Event): void;
	_onMouseUp(e: qx_event_type_Mouse): void;
	getFirstInterval(): any;
	getInterval(): any;
	getMinTimer(): any;
	getTimerDecrease(): any;
	initFirstInterval(value: any): any;
	initInterval(value: any): any;
	initMinTimer(value: any): any;
	initTimerDecrease(value: any): any;
	press(): void;
	release(fireExecuteEvent: bool): void;
	resetFirstInterval(): void;
	resetInterval(): void;
	resetMinTimer(): void;
	resetTimerDecrease(): void;
	setFirstInterval(value: any): any;
	setInterval(value: any): any;
	setMinTimer(value: any): any;
	setTimerDecrease(value: any): any;
}
interface qx_ui_form_ResetterStatic {
	new(): qx_ui_form_Resetter;
}
interface qx_ui_form_Resetter extends qx_core_Object {
	__getCurrentValue(item: qx_ui_core_Widget): void;
	__setItem(item: qx_ui_core_Widget, init: any): void;
	__supportsDataBindingSelection(formItem: qx_core_Object): bool;
	__supportsSingleSelection(formItem: qx_core_Object): bool;
	_supportsValue(formItem: qx_core_Object): bool;
	add(item: qx_ui_core_Widget): void;
	redefine(): void;
	redefineItem(item: qx_ui_core_Widget): void;
	reset(): void;
	resetItem(item: qx_ui_core_Widget): void;
}
interface qx_ui_form_SelectBoxStatic {
	new(): qx_ui_form_SelectBox;
}
interface qx_ui_form_SelectBox extends qx_ui_form_AbstractSelectBox {
	__onChangeSelection(e: qx_event_type_Data): void;
	__updateIcon(): void;
	__updateLabel(): void;
	_createChildControlImpl(id: any, hash: any): void;
	_getItems(): qx_ui_form_ListItem;
	_isAllowEmptySelection(): bool;
	_onClick(e: qx_event_type_Mouse): void;
	_onKeyInput(e: qx_event_type_KeyInput): void;
	_onKeyPress(e: any): void;
	_onListChangeSelection(e: any): void;
	_onListMouseDown(e: any): void;
	_onMouseOut(e: qx_bom_client_Event): void;
	_onMouseOver(e: qx_bom_client_Event): void;
	_onMouseWheel(e: qx_event_type_Mouse): void;
	_onPopupChangeVisibility(e: any): void;
}
interface qx_ui_form_SliderStatic {
	new(orientation: string): qx_ui_form_Slider;
}
interface qx_ui_form_Slider extends qx_ui_core_Widget {
	__computeTrackingEnd(e: qx_event_type_Mouse): void;
	_applyKnobFactor(value: number, old: number): void;
	_applyMaximum(value: number, old: number): void;
	_applyMinimum(value: number, old: number): void;
	_applyOrientation(value: any, old: any): void;
	_applyValue(value: any, old: any): void;
	_createChildControlImpl(id: any, hash: any): void;
	_fireValue(): void;
	_onInterval(e: qx_event_type_Event): void;
	_onKeyPress(e: qx_event_type_KeySequence): void;
	_onMouseDown(e: qx_event_type_Mouse): void;
	_onMouseMove(e: qx_event_type_Mouse): void;
	_onMouseOut(e: qx_event_type_Mouse): void;
	_onMouseOver(e: qx_event_type_Mouse): void;
	_onMouseUp(e: qx_event_type_Mouse): void;
	_onMouseWheel(e: qx_event_type_Mouse): void;
	_onUpdate(e: qx_event_type_Data): void;
	_positionToValue(position: number): number;
	_setKnobPosition(position: number): void;
	_updateKnobPosition(): void;
	_updateKnobSize(): void;
	_valueToPosition(value: number): number;
	getKnobFactor(): any;
	getMaximum(): any;
	getMinimum(): any;
	getOrientation(): any;
	getPageStep(): any;
	getSingleStep(): any;
	getValue(): any;
	initKnobFactor(value: any): any;
	initMaximum(value: any): any;
	initMinimum(value: any): any;
	initOrientation(value: any): any;
	initPageStep(value: any): any;
	initSingleStep(value: any): any;
	initValue(value: any): any;
	resetKnobFactor(): void;
	resetMaximum(): void;
	resetMinimum(): void;
	resetOrientation(): void;
	resetPageStep(): void;
	resetSingleStep(): void;
	resetValue(): void;
	setKnobFactor(value: any): any;
	setMaximum(value: any): any;
	setMinimum(value: any): any;
	setOrientation(value: any): any;
	setPageStep(value: any): any;
	setSingleStep(value: any): any;
	setValue(value: any): any;
	slideBack(): void;
	slideBy(offset: number): void;
	slideForward(): void;
	slidePageBack(): void;
	slidePageForward(): void;
	slideTo(value: number): void;
	slideToBegin(): void;
	slideToEnd(): void;
}
interface qx_ui_form_SpinnerStatic {
	new(min: number, value: number, max: number): qx_ui_form_Spinner;
}
interface qx_ui_form_Spinner extends qx_ui_core_Widget {
	_applyEditable(value: bool, old: bool): void;
	_applyEnabled(value: bool, old: bool): void;
	_applyMaximum(value: number, old: number): void;
	_applyMinimum(value: number, old: number): void;
	_applyNumberFormat(value: bool, old: bool): void;
	_applyValue(value: number, old: number): void;
	_applyWrap(value: bool, old: bool): void;
	_checkValue(value: any): bool;
	_countDown(): void;
	_countUp(): void;
	_createChildControlImpl(id: any, hash: any): void;
	_getContentPaddingTarget(): qx_ui_core_Widget;
	_getFilterRegExp(): RegExp;
	_onChangeLocale(ev: qx_event_type_Event): void;
	_onChangeNumberFormat(ev: qx_event_type_Event): void;
	_onKeyDown(e: qx_event_type_KeySequence): void;
	_onKeyUp(e: qx_event_type_KeySequence): void;
	_onMouseWheel(e: qx_event_type_Mouse): void;
	_onTextChange(e: qx_event_type_Event): void;
	_updateButtons(): void;
	getEditable(): any;
	getMaximum(): any;
	getMinimum(): any;
	getNumberFormat(): any;
	getPageStep(): any;
	getSingleStep(): any;
	getValue(): any;
	getWrap(): any;
	gotoValue(value: number): number;
	initEditable(value: any): any;
	initMaximum(value: any): any;
	initMinimum(value: any): any;
	initNumberFormat(value: any): any;
	initPageStep(value: any): any;
	initSingleStep(value: any): any;
	initValue(value: any): any;
	initWrap(value: any): any;
	isEditable(): bool;
	isWrap(): bool;
	resetEditable(): void;
	resetMaximum(): void;
	resetMinimum(): void;
	resetNumberFormat(): void;
	resetPageStep(): void;
	resetSingleStep(): void;
	resetValue(): void;
	resetWrap(): void;
	setEditable(value: any): any;
	setMaximum(value: any): any;
	setMinimum(value: any): any;
	setNumberFormat(value: any): any;
	setPageStep(value: any): any;
	setSingleStep(value: any): any;
	setValue(value: any): any;
	setWrap(value: any): any;
	tabFocus(): void;
	toggleEditable(): bool;
	toggleWrap(): bool;
}
interface qx_ui_form_SplitButtonStatic {
	new(label: string, icon: string, menu: qx_ui_menu_Menu, command: qx_ui_core_Command): qx_ui_form_SplitButton;
}
interface qx_ui_form_SplitButton extends qx_ui_core_Widget {
	_applyIcon(value: string, old: string): void;
	_applyLabel(value: string, old: string): void;
	_applyMenu(value: qx_ui_menu_Menu, old: qx_ui_menu_Menu): void;
	_applyShow(value: any, old: any): void;
	_createChildControlImpl(id: any, hash: any): void;
	_onButtonExecute(e: qx_event_type_Event): void;
	_onChangeMenuVisibility(e: qx_event_type_Data): void;
	_onKeyDown(e: qx_event_type_KeySequence): void;
	_onKeyUp(e: qx_event_type_KeySequence): void;
	_onMouseOut(e: qx_event_type_Mouse): void;
	_onMouseOver(e: qx_event_type_Mouse): void;
	getIcon(): any;
	getLabel(): any;
	getMenu(): any;
	getShow(): any;
	initIcon(value: any): any;
	initLabel(value: any): any;
	initMenu(value: any): any;
	initShow(value: any): any;
	resetIcon(): void;
	resetLabel(): void;
	resetMenu(): void;
	resetShow(): void;
	setIcon(value: any): any;
	setLabel(value: any): any;
	setMenu(value: any): any;
	setShow(value: any): any;
}
interface qx_ui_form_TextAreaStatic {
	new(value: string): qx_ui_form_TextArea;
}
interface qx_ui_form_TextArea extends qx_ui_form_AbstractField {
	__autoSize(): void;
	__createAreaClone(): Element;
	__forceRewrap(): void;
	__getAreaClone(): Element;
	__scrollCloneToBottom(clone: Element): void;
	__warnAutoSizeAndHeight(): void;
	_applyAutoSize(value: bool, old: bool): void;
	_applyDimension(value: number, old: number): void;
	_applyMinimalLineHeight(value: number, old: number): void;
	_applyWrap(value: bool, old: bool): void;
	_createInputElement(): void;
	_getAreaHeight(): number;
	_getContentHint(): void;
	_getScrolledAreaHeight(): number;
	_onMousewheel(e: qx_event_type_MouseWheel): void;
	_setAreaHeight(height: number): void;
	getAutoSize(): any;
	getMinimalLineHeight(): any;
	getSingleStep(): any;
	getWrap(): any;
	initAutoSize(value: any): any;
	initMinimalLineHeight(value: any): any;
	initSingleStep(value: any): any;
	initWrap(value: any): any;
	isAutoSize(): bool;
	isWrap(): bool;
	resetAutoSize(): void;
	resetMinimalLineHeight(): void;
	resetSingleStep(): void;
	resetWrap(): void;
	setAutoSize(value: any): any;
	setMinimalLineHeight(value: any): any;
	setSingleStep(value: any): any;
	setValue(value: any): void;
	setWrap(value: any): any;
	toggleAutoSize(): bool;
	toggleWrap(): bool;
}
interface qx_ui_form_TextFieldStatic {
}
interface qx_ui_form_TextField extends qx_ui_form_AbstractField {
	_renderContentElement(innerHeight: any, element: any): void;
}
interface qx_ui_form_ToggleButtonStatic {
	new(label: string, icon: string): qx_ui_form_ToggleButton;
}
interface qx_ui_form_ToggleButton extends qx_ui_basic_Atom {
	_applyGroup(value: any, old: any): void;
	_applyTriState(value: bool, old: bool): void;
	_applyValue(value: bool, old: bool): void;
	_onExecute(e: qx_event_type_Event): void;
	_onKeyDown(e: qx_bom_client_Event): void;
	_onKeyUp(e: qx_bom_client_Event): void;
	_onMouseDown(e: qx_bom_client_Event): void;
	_onMouseOut(e: qx_bom_client_Event): void;
	_onMouseOver(e: qx_bom_client_Event): void;
	_onMouseUp(e: qx_bom_client_Event): void;
	getGroup(): any;
	getTriState(): any;
	getValue(): any;
	initGroup(value: any): any;
	initTriState(value: any): any;
	initValue(value: any): any;
	isTriState(): bool;
	isValue(): bool;
	resetGroup(): void;
	resetTriState(): void;
	resetValue(): void;
	setGroup(value: any): any;
	setTriState(value: any): any;
	setValue(value: any): any;
	toggleTriState(): bool;
	toggleValue(): bool;
}
interface qx_ui_form_validation_AsyncValidatorStatic {
	new(validator: qx_lang_Function): qx_ui_form_validation_AsyncValidator;
}
interface qx_ui_form_validation_AsyncValidator extends qx_core_Object {
	setValid(valid: bool, message: string): void;
	validate(item: qx_ui_core_Widget, value: any, manager: qx_ui_form_validation_Manager, context: any): void;
	validateForm(items: qx_ui_core_Widget, manager: qx_ui_form_validation_Manager, context: any): void;
}
interface qx_ui_form_validation_ManagerStatic {
	new(): qx_ui_form_validation_Manager;
}
interface qx_ui_form_validation_Manager extends qx_core_Object {
	__checkValidationComplete(): void;
	__isAsyncValidator(validator: qx_lang_Function): bool;
	__isAsyncValidator(validator: any): bool;
	__setValid(value: bool): void;
	__setValid(value: any): void;
	__supportsInvalid(formItem: qx_core_Object): bool;
	__supportsSingleSelection(formItem: qx_core_Object): bool;
	__validateForm(items: qx_ui_core_Widget): bool;
	__validateItem(dataEntry: any, value: any): void;
	__validateRequired(formItem: qx_ui_core_Widget): void;
	add(formItem: qx_ui_core_Widget, validator: qx_lang_Function, context: any): void;
	add(formItem: qx_ui_core_Widget, validator: qx_ui_form_validation_AsyncValidator, context: any): void;
	getContext(): any;
	getInvalidFormItems(): any[];
	getInvalidMessage(): any;
	getInvalidMessages(): string;
	getItems(): any[];
	getRequiredFieldMessage(): any;
	getValid(): bool;
	getValidator(): any;
	initContext(value: any): any;
	initInvalidMessage(value: any): any;
	initRequiredFieldMessage(value: any): any;
	initValidator(value: any): any;
	isValid(): bool;
	remove(formItem: qx_ui_core_Widget): qx_ui_core_Widget;
	reset(): void;
	resetContext(): void;
	resetInvalidMessage(): void;
	resetRequiredFieldMessage(): void;
	resetValidator(): void;
	setContext(value: any): any;
	setFormValid(valid: bool): void;
	setInvalidMessage(value: any): any;
	setItemValid(formItem: qx_ui_core_Widget, valid: bool): void;
	setRequiredFieldMessage(value: any): any;
	setValidator(value: any): any;
	validate(): bool;
}
interface qx_ui_form_VirtualComboBoxStatic {
	new(model: any): qx_ui_form_VirtualComboBox;
}
interface qx_ui_form_VirtualComboBox extends qx_ui_form_core_AbstractVirtualBox {
	__convertValue(modelItem: any): string;
	__onSelectionChange(event: qx_event_type_Data): void;
	__selectFirstMatch(): void;
	_applyPlaceholder(value: string, old: string): void;
	_beforeOpen(): void;
	_createChildControlImpl(id: any, hash: any): void;
	_getAction(event: any): void;
	_handleKeyboard(event: any): void;
	_handleMouse(event: any): void;
	clearTextSelection(): void;
	focus(): void;
	getDefaultFormat(): any;
	getPlaceholder(): any;
	getTextSelection(): string;
	getTextSelectionLength(): number;
	getValue(): any;
	initDefaultFormat(value: any): any;
	initPlaceholder(value: any): any;
	initValue(value: any): any;
	resetAllTextSelection(): void;
	resetDefaultFormat(): void;
	resetPlaceholder(): void;
	resetValue(): void;
	selectAllText(): void;
	setDefaultFormat(value: any): any;
	setPlaceholder(value: any): any;
	setTextSelection(start: number, end: number): void;
	setValue(value: any): any;
	tabFocus(): void;
}
interface qx_ui_form_VirtualSelectBoxStatic {
	new(model: any): qx_ui_form_VirtualSelectBox;
}
interface qx_ui_form_VirtualSelectBox extends qx_ui_form_core_AbstractVirtualBox {
	__convertKeyIdentifier(keyIdentifier: string): string;
	__preselect(): void;
	_addBindings(): void;
	_applySelection(value: qx_data_Array, old: qx_data_Array): void;
	_createChildControlImpl(id: any, hash: any): void;
	_getAction(event: any): void;
	_handleKeyboard(event: any): void;
	_handleMouse(event: any): void;
	_onMouseOut(event: qx_bom_client_Event): void;
	_onMouseOver(event: qx_bom_client_Event): void;
	_removeBindings(): void;
	getSelection(): any;
	initSelection(value: any): any;
	resetSelection(): void;
	setSelection(value: any): any;
	syncWidget(jobs: any): void;
}
interface qx_ui_groupbox_CheckGroupBoxStatic {
}
interface qx_ui_groupbox_CheckGroupBox extends qx_ui_groupbox_GroupBox {
	_createChildControlImpl(id: any, hash: any): void;
	_onExecute(e: qx_event_type_Event): void;
	_onRadioChangeValue(e: qx_event_type_Data): void;
	execute(): void;
	getCommand(): void;
	getValue(): bool;
	resetValue(): void;
	setCommand(command: any): void;
	setValue(value: bool): void;
}
interface qx_ui_groupbox_GroupBoxStatic {
	new(legend: string, icon: string): qx_ui_groupbox_GroupBox;
}
interface qx_ui_groupbox_GroupBox extends qx_ui_core_Widget {
	_applyLegendPosition(e: any): void;
	_createChildControlImpl(id: any, hash: any): void;
	_getContentPaddingTarget(): qx_ui_core_Widget;
	_repositionFrame(): void;
	getChildrenContainer(): qx_ui_container_Composite;
	getIcon(): string;
	getLegend(): string;
	getLegendPosition(): any;
	initLegendPosition(value: any): any;
	resetLegendPosition(): void;
	setIcon(icon: string): void;
	setLegend(legend: string): void;
	setLegendPosition(value: any): any;
}
interface qx_ui_groupbox_RadioGroupBoxStatic {
}
interface qx_ui_groupbox_RadioGroupBox extends qx_ui_groupbox_GroupBox {
	_applyEnabled(value: bool, old: bool): void;
	_createChildControlImpl(id: any, hash: any): void;
	_onExecute(e: qx_event_type_Event): void;
	_onRadioChangeValue(e: qx_event_type_Data): void;
	execute(): void;
	getCommand(): void;
	getGroup(): qx_ui_form_RadioGroup;
	getLabel(): string;
	getValue(): bool;
	resetValue(): void;
	setCommand(command: any): void;
	setGroup(value: qx_ui_form_RadioGroup): void;
	setValue(value: bool): void;
}
interface qx_ui_indicator_ProgressBarStatic {
	new(value: number, maximum: number): qx_ui_indicator_ProgressBar;
}
interface qx_ui_indicator_ProgressBar extends qx_ui_container_Composite {
	_changeProgress(value: number): void;
	_createChildControlImpl(id: any, hash: any): void;
	getMaximum(): void;
	getValue(): void;
	setMaximum(value: number): void;
	setValue(value: number): void;
}
interface qx_ui_layout_AbstractStatic {
}
interface qx_ui_layout_Abstract extends qx_core_Object {
	_applyLayoutChange(): void;
	_clearSeparators(): void;
	_computeSizeHint(): any;
	_getLayoutChildren(): any[];
	_getWidget(): qx_ui_core_Widget;
	_renderSeparator(separator: qx_ui_menu_Separator, bounds: any): void;
	connectToWidget(widget: qx_ui_core_Widget): void;
	getHeightForWidth(width: number): number;
	getSizeHint(): any;
	hasHeightForWidth(): bool;
	invalidateChildrenCache(): void;
	invalidateLayoutCache(): void;
	renderLayout(availWidth: number, availHeight: number): void;
	verifyLayoutProperty(item: any, name: any, value: any): void;
}
interface qx_ui_layout_AtomStatic {
}
interface qx_ui_layout_Atom extends qx_ui_layout_Abstract {
	_computeSizeHint(): void;
	getCenter(): any;
	getGap(): any;
	getIconPosition(): any;
	initCenter(value: any): any;
	initGap(value: any): any;
	initIconPosition(value: any): any;
	isCenter(): bool;
	renderLayout(availWidth: any, availHeight: any): void;
	resetCenter(): void;
	resetGap(): void;
	resetIconPosition(): void;
	setCenter(value: any): any;
	setGap(value: any): any;
	setIconPosition(value: any): any;
	toggleCenter(): bool;
}
interface qx_ui_layout_BasicStatic {
}
interface qx_ui_layout_Basic extends qx_ui_layout_Abstract {
	_computeSizeHint(): void;
	renderLayout(availWidth: any, availHeight: any): void;
}
interface qx_ui_layout_CanvasStatic {
}
interface qx_ui_layout_Canvas extends qx_ui_layout_Abstract {
	_computeSizeHint(): void;
	renderLayout(availWidth: any, availHeight: any): void;
}
interface qx_ui_layout_DockStatic {
	new(spacingX: number, spacingY: number, separatorX: qx_html_Decorator, separatorY: qx_html_Decorator): qx_ui_layout_Dock;
}
interface qx_ui_layout_Dock extends qx_ui_layout_Abstract {
	__rebuildCache(): void;
	_applySort(value: any, old: any): void;
	_computeSizeHint(): void;
	_getSeparatorWidths(): any;
	getConnectSeparators(): any;
	getSeparatorX(): any;
	getSeparatorY(): any;
	getSort(): any;
	getSpacingX(): any;
	getSpacingY(): any;
	initConnectSeparators(value: any): any;
	initSeparatorX(value: any): any;
	initSeparatorY(value: any): any;
	initSort(value: any): any;
	initSpacingX(value: any): any;
	initSpacingY(value: any): any;
	isConnectSeparators(): bool;
	renderLayout(availWidth: any, availHeight: any): void;
	resetConnectSeparators(): void;
	resetSeparatorX(): void;
	resetSeparatorY(): void;
	resetSort(): void;
	resetSpacingX(): void;
	resetSpacingY(): void;
	setConnectSeparators(value: any): any;
	setSeparatorX(value: any): any;
	setSeparatorY(value: any): any;
	setSort(value: any): any;
	setSpacingX(value: any): any;
	setSpacingY(value: any): any;
	toggleConnectSeparators(): bool;
}
interface qx_ui_layout_FlowStatic {
	new(spacingX: number, spacingY: number, alignX: string): qx_ui_layout_Flow;
}
interface qx_ui_layout_Flow extends qx_ui_layout_Abstract {
	__computeSize(availWidth: number): any;
	__renderLine(line: any, lineTop: number, availWidth: number): void;
	_computeSizeHint(): void;
	connectToWidget(widget: any): void;
	getAlignX(): any;
	getAlignY(): any;
	getHeightForWidth(width: any): void;
	getReversed(): any;
	getSpacingX(): any;
	getSpacingY(): any;
	hasHeightForWidth(): void;
	initAlignX(value: any): any;
	initAlignY(value: any): any;
	initReversed(value: any): any;
	initSpacingX(value: any): any;
	initSpacingY(value: any): any;
	isReversed(): bool;
	renderLayout(availWidth: number, availHeight: number): void;
	resetAlignX(): void;
	resetAlignY(): void;
	resetReversed(): void;
	resetSpacingX(): void;
	resetSpacingY(): void;
	setAlignX(value: any): any;
	setAlignY(value: any): any;
	setReversed(value: any): any;
	setSpacingX(value: any): any;
	setSpacingY(value: any): any;
	toggleReversed(): bool;
}
interface qx_ui_layout_GridStatic {
	new(spacingX: number, spacingY: number): qx_ui_layout_Grid;
}
interface qx_ui_layout_Grid extends qx_ui_layout_Abstract {
	__buildGrid(): void;
	__getOuterSize(widget: qx_ui_core_LayoutItem): any;
	_computeSizeHint(): void;
	_fixHeightsRowSpan(rowHeights: any): void;
	_fixWidthsColSpan(colWidths: any): void;
	_getColumnFlexOffsets(width: number): number;
	_getColWidths(): any;
	_getRowFlexOffsets(height: number): number;
	_getRowHeights(): any;
	_setColumnData(column: number, key: string, value: any): void;
	_setRowData(row: number, key: string, value: any): void;
	getCellAlign(row: number, column: number): any;
	getCellWidget(row: number, column: number): qx_ui_core_Widget;
	getColumnAlign(column: number): any;
	getColumnCount(): number;
	getColumnFlex(column: number): number;
	getColumnMaxWidth(column: number): number;
	getColumnMinWidth(column: number): number;
	getColumnWidth(column: number): number;
	getRowAlign(row: number): any;
	getRowCount(): number;
	getRowFlex(row: number): number;
	getRowHeight(row: number): number;
	getRowMaxHeight(row: number): number;
	getRowMinHeight(row: number): number;
	getSpacingX(): any;
	getSpacingY(): any;
	initSpacingX(value: any): any;
	initSpacingY(value: any): any;
	invalidateLayoutCache(): void;
	renderLayout(availWidth: any, availHeight: any): void;
	resetSpacingX(): void;
	resetSpacingY(): void;
	setColumnAlign(column: number, hAlign: string, vAlign: string): qx_ui_layout_Grid;
	setColumnFlex(column: number, flex: number): qx_ui_layout_Grid;
	setColumnMaxWidth(column: number, maxWidth: number): qx_ui_layout_Grid;
	setColumnMinWidth(column: number, minWidth: number): qx_ui_layout_Grid;
	setColumnWidth(column: number, width: number): qx_ui_layout_Grid;
	setRowAlign(row: number, hAlign: string, vAlign: string): qx_ui_layout_Grid;
	setRowFlex(row: number, flex: number): qx_ui_layout_Grid;
	setRowHeight(row: number, height: number): qx_ui_layout_Grid;
	setRowMaxHeight(row: number, maxHeight: number): qx_ui_layout_Grid;
	setRowMinHeight(row: number, minHeight: number): qx_ui_layout_Grid;
	setSpacing(spacing: number): qx_ui_layout_Grid;
	setSpacingX(value: any): any;
	setSpacingY(value: any): any;
}
interface qx_ui_layout_GrowStatic {
}
interface qx_ui_layout_Grow extends qx_ui_layout_Abstract {
	_computeSizeHint(): void;
	renderLayout(availWidth: any, availHeight: any): void;
}
interface qx_ui_layout_HBoxStatic {
	new(spacing: number, alignX: string, separator: qx_html_Decorator): qx_ui_layout_HBox;
}
interface qx_ui_layout_HBox extends qx_ui_layout_Abstract {
	__rebuildCache(): void;
	_applyReversed(value: bool, old: bool): void;
	_computeSizeHint(): void;
	getAlignX(): any;
	getAlignY(): any;
	getReversed(): any;
	getSeparator(): any;
	getSpacing(): any;
	initAlignX(value: any): any;
	initAlignY(value: any): any;
	initReversed(value: any): any;
	initSeparator(value: any): any;
	initSpacing(value: any): any;
	isReversed(): bool;
	renderLayout(availWidth: any, availHeight: any): void;
	resetAlignX(): void;
	resetAlignY(): void;
	resetReversed(): void;
	resetSeparator(): void;
	resetSpacing(): void;
	setAlignX(value: any): any;
	setAlignY(value: any): any;
	setReversed(value: any): any;
	setSeparator(value: any): any;
	setSpacing(value: any): any;
	toggleReversed(): bool;
}
interface qx_ui_layout_LineSizeIteratorStatic {
	new(children: qx_ui_core_Widget, spacing: number): qx_ui_layout_LineSizeIterator;
}
interface qx_ui_layout_LineSizeIterator {
	__computeGapBeforeChild(childIndex: number): number;
	computeNextLine(availWidth: number): any;
	hasMoreLines(): bool;
}
interface qx_ui_layout_UtilStatic {
	arrangeIdeals(beginMin: number, beginIdeal: number, beginMax: number, endMin: number, endIdeal: number, endMax: number): any;
	collapseMargins(varargs: any): number;
	computeFlexOffsets(flexibles: any, avail: number, used: number): any;
	computeHorizontalAlignOffset(align: string, width: number, availWidth: number, marginLeft: number, marginRight: number): number;
	computeHorizontalGaps(children: any[], spacing: number, collapse: bool): number;
	computeHorizontalSeparatorGaps(children: qx_ui_core_LayoutItem, spacing: number, separator: qx_ui_menu_Separator): number;
	computeVerticalAlignOffset(align: string, height: number, availHeight: number, marginTop: number, marginBottom: number): number;
	computeVerticalGaps(children: any[], spacing: number, collapse: bool): number;
	computeVerticalSeparatorGaps(children: qx_ui_core_LayoutItem, spacing: number, separator: qx_ui_menu_Separator): number;
}
interface qx_ui_layout_Util {
}
interface qx_ui_layout_VBoxStatic {
	new(spacing: number, alignY: string, separator: qx_html_Decorator): qx_ui_layout_VBox;
}
interface qx_ui_layout_VBox extends qx_ui_layout_Abstract {
	__rebuildCache(): void;
	_applyReversed(value: bool, old: bool): void;
	_computeSizeHint(): void;
	getAlignX(): any;
	getAlignY(): any;
	getReversed(): any;
	getSeparator(): any;
	getSpacing(): any;
	initAlignX(value: any): any;
	initAlignY(value: any): any;
	initReversed(value: any): any;
	initSeparator(value: any): any;
	initSpacing(value: any): any;
	isReversed(): bool;
	renderLayout(availWidth: any, availHeight: any): void;
	resetAlignX(): void;
	resetAlignY(): void;
	resetReversed(): void;
	resetSeparator(): void;
	resetSpacing(): void;
	setAlignX(value: any): any;
	setAlignY(value: any): any;
	setReversed(value: any): any;
	setSeparator(value: any): any;
	setSpacing(value: any): any;
	toggleReversed(): bool;
}
interface qx_ui_list_core_IListDelegateStatic {
}
interface qx_ui_list_core_IListDelegate {
	bindGroupItem(controller: qx_ui_list_core_MWidgetController, item: qx_ui_core_Widget, id: number): void;
	bindItem(controller: qx_ui_list_core_MWidgetController, item: qx_ui_core_Widget, id: number): void;
	configureGroupItem(item: qx_ui_core_Widget): void;
	configureItem(item: qx_ui_core_Widget): void;
	createGroupItem(): qx_ui_core_Widget;
	createItem(): qx_ui_core_Widget;
	filter(data: any): bool;
	group(data: any): string;
	onPool(item: qx_ui_core_Widget): void;
	sorter(a: any, b: any): number;
}
interface qx_ui_list_core_MWidgetControllerStatic {
	new(): qx_ui_list_core_MWidgetController;
}
interface qx_ui_list_core_MWidgetController {
	__addBinding(widget: qx_ui_core_Widget, id: any): void;
	__getBindings(widget: qx_ui_core_Widget): any[];
	__getBindPath(index: number, path: string, type: string): void;
	__getBindPath(index: number, path: any, type: string): void;
	_bindGroupItem(item: qx_ui_core_Widget, index: number): void;
	_bindItem(item: qx_ui_core_Widget, index: number): void;
	_configureGroupItem(item: qx_ui_core_Widget): void;
	_configureItem(item: qx_ui_core_Widget): void;
	_removeBindingsFrom(item: qx_ui_core_Widget): void;
	bindDefaultProperties(item: qx_ui_core_Widget, index: number): void;
	bindProperty(sourcePath: string, targetProperty: string, options: any, targetWidget: qx_ui_core_Widget, index: number): void;
	bindProperty(sourcePath: any, targetProperty: string, options: any, targetWidget: qx_ui_core_Widget, index: number): void;
	bindPropertyReverse(targetPath: string, sourceProperty: string, options: any, sourceWidget: qx_ui_core_Widget, index: number): void;
	bindPropertyReverse(targetPath: any, sourceProperty: string, options: any, sourceWidget: qx_ui_core_Widget, index: number): void;
	getDelegate(): any;
	getGroupLabelOptions(): any;
	getGroupLabelPath(): any;
	getIconOptions(): any;
	getIconPath(): any;
	getLabelOptions(): any;
	getLabelPath(): any;
	initDelegate(value: any): any;
	initGroupLabelOptions(value: any): any;
	initGroupLabelPath(value: any): any;
	initIconOptions(value: any): any;
	initIconPath(value: any): any;
	initLabelOptions(value: any): any;
	initLabelPath(value: any): any;
	removeBindings(): void;
	resetDelegate(): void;
	resetGroupLabelOptions(): void;
	resetGroupLabelPath(): void;
	resetIconOptions(): void;
	resetIconPath(): void;
	resetLabelOptions(): void;
	resetLabelPath(): void;
	setDelegate(value: any): any;
	setGroupLabelOptions(value: any): any;
	setGroupLabelPath(value: any): any;
	setIconOptions(value: any): any;
	setIconPath(value: any): any;
	setLabelOptions(value: any): any;
	setLabelPath(value: any): any;
}
interface qx_ui_list_ListStatic {
	new(model: qx_data_Array): qx_ui_list_List;
	new(model: any): qx_ui_list_List;
}
interface qx_ui_list_List extends qx_ui_virtual_core_Scroller {
	__addGroup(group: string, index: number): void;
	__addGroup(group: any, index: number): void;
	__buildUpLookupTable(): void;
	__checkGroupStructure(): void;
	__createLookupFromGroup(): any[];
	__getUniqueGroupName(group: string): string;
	__getUniqueGroupName(group: any): string;
	__updateRowCount(): void;
	_applyDelegate(value: any, old: any): void;
	_applyGroupLabelOptions(value: any, old: any): void;
	_applyGroupLabelPath(value: string, old: string): void;
	_applyIconOptions(value: any, old: any): void;
	_applyIconPath(value: string, old: string): void;
	_applyLabelOptions(value: any, old: any): void;
	_applyLabelPath(value: string, old: string): void;
	_applyModel(value: qx_data_Array, old: qx_data_Array): void;
	_applyRowHeight(value: number, old: number): void;
	_createChildControlImpl(id: any, hash: any): void;
	_getDataFromRow(row: number): any;
	_getLookupTable(): any[];
	_getSelectables(): qx_data_Array;
	_init(): void;
	_initBackground(): void;
	_initLayer(): void;
	_isGroup(row: number): bool;
	_lookup(row: number): number;
	_lookupGroup(row: number): number;
	_onModelChange(e: qx_event_type_Data): void;
	_onResize(e: qx_event_type_Data): void;
	_reverseLookup(index: number): number;
	_runDelegateFilter(model: qx_data_IListData): void;
	_runDelegateGroup(model: qx_data_IListData): void;
	_runDelegateSorter(model: qx_data_IListData): void;
	getAutoGrouping(): any;
	getDelegate(): any;
	getGroupLabelOptions(): any;
	getGroupLabelPath(): any;
	getGroups(): any;
	getIconOptions(): any;
	getIconPath(): any;
	getItemHeight(): any;
	getLabelOptions(): any;
	getLabelPath(): any;
	getModel(): any;
	initAutoGrouping(value: any): any;
	initDelegate(value: any): any;
	initGroupLabelOptions(value: any): any;
	initGroupLabelPath(value: any): any;
	initGroups(value: any): any;
	initIconOptions(value: any): any;
	initIconPath(value: any): any;
	initItemHeight(value: any): any;
	initLabelOptions(value: any): any;
	initLabelPath(value: any): any;
	initModel(value: any): any;
	isAutoGrouping(): bool;
	refresh(): void;
	resetAutoGrouping(): void;
	resetDelegate(): void;
	resetGroupLabelOptions(): void;
	resetGroupLabelPath(): void;
	resetGroups(): void;
	resetIconOptions(): void;
	resetIconPath(): void;
	resetItemHeight(): void;
	resetLabelOptions(): void;
	resetLabelPath(): void;
	resetModel(): void;
	setAutoGrouping(value: any): any;
	setDelegate(value: any): any;
	setGroupLabelOptions(value: any): any;
	setGroupLabelPath(value: any): any;
	setGroups(value: any): any;
	setIconOptions(value: any): any;
	setIconPath(value: any): any;
	setItemHeight(value: any): any;
	setLabelOptions(value: any): any;
	setLabelPath(value: any): any;
	setModel(value: any): any;
	toggleAutoGrouping(): bool;
}
interface qx_ui_list_provider_IListProviderStatic {
}
interface qx_ui_list_provider_IListProvider {
	createGroupRenderer(): any;
	createItemRenderer(): any;
	createLayer(): qx_ui_virtual_layer_Abstract;
	isSelectable(row: number): bool;
	removeBindings(): void;
	setDelegate(delegate: any): void;
	setIconOptions(options: any): void;
	setIconPath(path: string): void;
	setLabelOptions(options: any): void;
	setLabelPath(path: string): void;
	styleSelectabled(row: number): void;
	styleUnselectabled(row: number): void;
}
interface qx_ui_list_provider_WidgetProviderStatic {
	new(list: qx_ui_list_List): qx_ui_list_provider_WidgetProvider;
}
interface qx_ui_list_provider_WidgetProvider extends qx_core_Object {
	__getWidgetFrom(row: number): qx_ui_core_Widget;
	__updateStates(widget: qx_ui_core_Widget, states: any): void;
	_onChangeDelegate(event: qx_event_type_Data): void;
	_onGroupItemCreated(event: qx_event_type_Data): void;
	_onItemCreated(event: qx_event_type_Data): void;
	_onPool(item: qx_ui_core_Widget): void;
	_styleSelectabled(widget: qx_ui_core_Widget): void;
	_styleUnselectabled(widget: qx_ui_core_Widget): void;
	createGroupRenderer(): void;
	createItemRenderer(): void;
	createLayer(): void;
	getCellWidget(row: any, column: any): void;
	isSelectable(row: any): void;
	poolCellWidget(widget: any): void;
	styleSelectabled(row: any): void;
	styleUnselectabled(row: any): void;
}
interface qx_ui_menu_AbstractButtonStatic {
	new(): qx_ui_menu_AbstractButton;
}
interface qx_ui_menu_AbstractButton extends qx_ui_core_Widget {
	_applyIcon(value: string, old: string): void;
	_applyLabel(value: string, old: string): void;
	_applyMenu(value: qx_ui_menu_Menu, old: qx_ui_menu_Menu): void;
	_createChildControlImpl(id: any, hash: any): void;
	_onChangeCommand(e: qx_event_type_Data): void;
	_onClick(e: qx_event_type_Mouse): void;
	_onKeyPress(e: qx_event_type_KeySequence): void;
	getChildrenSizes(): any[];
	getIcon(): any;
	getLabel(): any;
	getMenu(): any;
	initIcon(value: any): any;
	initLabel(value: any): any;
	initMenu(value: any): any;
	resetIcon(): void;
	resetLabel(): void;
	resetMenu(): void;
	setIcon(value: any): any;
	setLabel(value: any): any;
	setMenu(value: any): any;
}
interface qx_ui_menu_ButtonStatic {
	new(label: string, icon: string, command: qx_ui_core_Command, menu: qx_ui_menu_Menu): qx_ui_menu_Button;
}
interface qx_ui_menu_Button extends qx_ui_menu_AbstractButton {
	_onClick(e: any): void;
	_onKeyPress(e: any): void;
}
interface qx_ui_menu_ButtonLayoutStatic {
}
interface qx_ui_menu_ButtonLayout extends qx_ui_layout_Abstract {
	__getMenu(widget: qx_ui_core_Widget): qx_ui_menu_Menu;
	_computeSizeHint(): void;
	renderLayout(availWidth: any, availHeight: any): void;
}
interface qx_ui_menu_CheckBoxStatic {
	new(label: string, menu: qx_ui_menu_Menu): qx_ui_menu_CheckBox;
}
interface qx_ui_menu_CheckBox extends qx_ui_menu_AbstractButton {
	_applyValue(value: bool, old: bool): void;
	_onClick(e: any): void;
	_onExecute(e: qx_event_type_Event): void;
	_onKeyPress(e: any): void;
	getValue(): any;
	initValue(value: any): any;
	isValue(): bool;
	resetValue(): void;
	setValue(value: any): any;
	toggleValue(): bool;
}
interface qx_ui_menu_LayoutStatic {
}
interface qx_ui_menu_Layout extends qx_ui_layout_VBox {
	_computeSizeHint(): void;
	getArrowColumnWidth(): any;
	getColumnSizes(): any[];
	getColumnSpacing(): any;
	getIconColumnWidth(): any;
	getSpanColumn(): any;
	initArrowColumnWidth(value: any): any;
	initColumnSpacing(value: any): any;
	initIconColumnWidth(value: any): any;
	initSpanColumn(value: any): any;
	resetArrowColumnWidth(): void;
	resetColumnSpacing(): void;
	resetIconColumnWidth(): void;
	resetSpanColumn(): void;
	setArrowColumnWidth(value: any): any;
	setColumnSpacing(value: any): any;
	setIconColumnWidth(value: any): any;
	setSpanColumn(value: any): any;
}
interface qx_ui_menu_ManagerStatic {
	getInstance(): qx_ui_menu_Manager;
	new(): qx_ui_menu_Manager;
}
interface qx_ui_menu_Manager extends qx_core_Object {
	_getChild(menu: qx_ui_menu_Menu, start: number, iter: number, loop: bool): qx_ui_menu_Button;
	_getMenuButton(widget: qx_ui_core_Widget): qx_ui_menu_Button;
	_isInMenu(widget: qx_ui_core_Widget): bool;
	_onCloseInterval(e: qx_event_type_Event): void;
	_onKeyPress(e: qx_event_type_KeySequence): void;
	_onKeyPressDown(menu: qx_ui_menu_Menu): void;
	_onKeyPressEnter(menu: qx_ui_menu_Menu, button: qx_ui_menu_AbstractButton, e: qx_event_type_KeySequence): void;
	_onKeyPressLeft(menu: qx_ui_menu_Menu): void;
	_onKeyPressRight(menu: qx_ui_menu_Menu): void;
	_onKeyPressSpace(menu: qx_ui_menu_Menu, button: qx_ui_menu_AbstractButton, e: qx_event_type_KeySequence): void;
	_onKeyPressUp(menu: qx_ui_menu_Menu): void;
	_onKeyUpDown(e: qx_event_type_KeySequence): void;
	_onMouseDown(e: qx_event_type_Mouse): void;
	_onOpenInterval(e: qx_event_type_Event): void;
	add(obj: qx_ui_menu_Menu): void;
	cancelClose(menu: qx_ui_menu_Menu): void;
	cancelOpen(menu: qx_ui_menu_Menu): void;
	getActiveMenu(): qx_ui_menu_Menu;
	hideAll(): void;
	remove(obj: qx_ui_menu_Menu): void;
	scheduleClose(menu: qx_ui_menu_Menu): void;
	scheduleOpen(menu: qx_ui_menu_Menu): void;
}
interface qx_ui_menu_MenuStatic {
	new(): qx_ui_menu_Menu;
}
interface qx_ui_menu_Menu extends qx_ui_core_Widget {
	__updateBlockerVisibility(): void;
	__updateSlideBar(): void;
	_applyArrowColumnWidth(value: number, old: number): void;
	_applyBlockerColor(value: qx_theme_classic_Color, old: qx_theme_classic_Color): void;
	_applyBlockerOpacity(value: number, old: number): void;
	_applyIconColumnWidth(value: number, old: number): void;
	_applyOpenedButton(value: qx_ui_core_Widget, old: qx_ui_core_Widget): void;
	_applySelectedButton(value: qx_ui_core_Widget, old: qx_ui_core_Widget): void;
	_applySpacingX(value: number, old: number): void;
	_applySpacingY(value: number, old: number): void;
	_applyVisibility(value: any, old: any): void;
	_assertSlideBar(callback: qx_lang_Function): void;
	_computePlacementSize(): void;
	_createChildControlImpl(id: any, hash: any): void;
	_getMenuBounds(): any;
	_getMenuLayout(): qx_ui_menu_Layout;
	_onMouseOut(e: qx_event_type_Mouse): void;
	_onMouseOver(e: qx_event_type_Mouse): void;
	_onResize(): void;
	addSeparator(): void;
	getArrowColumnWidth(): any;
	getBlockBackground(): any;
	getBlockerColor(): any;
	getBlockerOpacity(): any;
	getChildrenContainer(): void;
	getCloseInterval(): any;
	getColumnSizes(): any[];
	getIconColumnWidth(): any;
	getOpenedButton(): any;
	getOpener(): any;
	getOpenInterval(): any;
	getParentMenu(): qx_ui_menu_Menu;
	getSelectables(): qx_ui_core_Widget;
	getSelectedButton(): any;
	getSpacingX(): any;
	getSpacingY(): any;
	initArrowColumnWidth(value: any): any;
	initBlockBackground(value: any): any;
	initBlockerColor(value: any): any;
	initBlockerOpacity(value: any): any;
	initCloseInterval(value: any): any;
	initIconColumnWidth(value: any): any;
	initOpenedButton(value: any): any;
	initOpener(value: any): any;
	initOpenInterval(value: any): any;
	initSelectedButton(value: any): any;
	initSpacingX(value: any): any;
	initSpacingY(value: any): any;
	isBlockBackground(): bool;
	open(): void;
	openAtMouse(e: qx_event_type_Mouse): void;
	openAtPoint(point: any): void;
	resetArrowColumnWidth(): void;
	resetBlockBackground(): void;
	resetBlockerColor(): void;
	resetBlockerOpacity(): void;
	resetCloseInterval(): void;
	resetIconColumnWidth(): void;
	resetOpenedButton(): void;
	resetOpener(): void;
	resetOpenInterval(): void;
	resetSelectedButton(): void;
	resetSpacingX(): void;
	resetSpacingY(): void;
	setArrowColumnWidth(value: any): any;
	setBlockBackground(value: any): any;
	setBlockerColor(value: any): any;
	setBlockerOpacity(value: any): any;
	setCloseInterval(value: any): any;
	setIconColumnWidth(value: any): any;
	setOpenedButton(value: any): any;
	setOpener(value: any): any;
	setOpenInterval(value: any): any;
	setSelectedButton(value: any): any;
	setSpacingX(value: any): any;
	setSpacingY(value: any): any;
	syncWidget(jobs: any): void;
	toggleBlockBackground(): bool;
}
interface qx_ui_menu_MenuSlideBarStatic {
	new(): qx_ui_menu_MenuSlideBar;
}
interface qx_ui_menu_MenuSlideBar extends qx_ui_container_SlideBar {
	_createChildControlImpl(id: any, hash: any): void;
}
interface qx_ui_menu_RadioButtonStatic {
	new(label: string, menu: qx_ui_menu_Menu): qx_ui_menu_RadioButton;
}
interface qx_ui_menu_RadioButton extends qx_ui_menu_AbstractButton {
	_applyGroup(value: qx_ui_form_RadioGroup, old: qx_ui_form_RadioGroup): void;
	_applyValue(value: bool, old: bool): void;
	_onClick(e: any): void;
	_onExecute(e: qx_event_type_Event): void;
	_onKeyPress(e: any): void;
	getGroup(): any;
	getValue(): any;
	initGroup(value: any): any;
	initValue(value: any): any;
	isValue(): bool;
	resetGroup(): void;
	resetValue(): void;
	setGroup(value: any): any;
	setValue(value: any): any;
	toggleValue(): bool;
}
interface qx_ui_menu_SeparatorStatic {
}
interface qx_ui_menu_Separator extends qx_ui_core_Widget {
}
interface qx_ui_menubar_ButtonStatic {
	new(label: any, icon: any, menu: any): qx_ui_menubar_Button;
}
interface qx_ui_menubar_Button extends qx_ui_form_MenuButton {
	_onMenuChange(e: qx_event_type_Data): void;
	_onMouseOver(e: qx_event_type_Mouse): void;
	_onMouseUp(e: any): void;
	getMenuBar(): qx_ui_menubar_MenuBar;
	open(selectFirst: any): void;
}
interface qx_ui_menubar_MenuBarStatic {
}
interface qx_ui_menubar_MenuBar extends qx_ui_toolbar_ToolBar {
}
interface qx_ui_mobile_basic_AtomStatic {
	new(label: string, icon: string): qx_ui_mobile_basic_Atom;
}
interface qx_ui_mobile_basic_Atom extends qx_ui_mobile_core_Widget {
	__createChildren(label: string, icon: string): void;
	__getOpposedPosition(position: string): string;
	__updateGap(iconPosition: string, value: number): void;
	_applyGap(value: number, old: number): void;
	_applyIcon(value: string, old: string): void;
	_applyIconPosition(value: any, old: any): void;
	_applyLabel(value: string, old: string): void;
	_applyShow(value: any, old: any): void;
	_createIconWidget(iconUrl: string): qx_ui_mobile_basic_Image;
	_createLabelWidget(label: string): qx_ui_mobile_basic_Label;
	getGap(): any;
	getIcon(): any;
	getIconPosition(): any;
	getIconWidget(): qx_ui_mobile_basic_Image;
	getLabel(): any;
	getLabelWidget(): qx_ui_mobile_basic_Label;
	getShow(): any;
	initGap(value: any): any;
	initIcon(value: any): any;
	initIconPosition(value: any): any;
	initLabel(value: any): any;
	initShow(value: any): any;
	resetGap(): void;
	resetIcon(): void;
	resetIconPosition(): void;
	resetLabel(): void;
	resetShow(): void;
	setGap(value: any): any;
	setIcon(value: any): any;
	setIconPosition(value: any): any;
	setLabel(value: any): any;
	setShow(value: any): any;
}
interface qx_ui_mobile_basic_ImageStatic {
	new(source: string): qx_ui_mobile_basic_Image;
}
interface qx_ui_mobile_basic_Image extends qx_ui_mobile_core_Widget {
	__loaderCallback(source: string, imageInfo: any): void;
	_applySource(value: string, old: string): void;
	_getTagName(): void;
	_setSource(source: string): void;
	getSource(): any;
	initSource(value: any): any;
	resetSource(): void;
	setSource(value: any): any;
}
interface qx_ui_mobile_basic_LabelStatic {
	new(value: string): qx_ui_mobile_basic_Label;
}
interface qx_ui_mobile_basic_Label extends qx_ui_mobile_core_Widget {
	_applyValue(value: any, old: any): void;
	_applyWrap(value: bool, old: bool): void;
	getValue(): any;
	getWrap(): any;
	initValue(value: any): any;
	initWrap(value: any): any;
	isWrap(): bool;
	resetValue(): void;
	resetWrap(): void;
	setValue(value: any): any;
	setWrap(value: any): any;
	toggleWrap(): bool;
}
interface qx_ui_mobile_container_CompositeStatic {
	new(layout: qx_ui_mobile_layout_Abstract): qx_ui_mobile_container_Composite;
}
interface qx_ui_mobile_container_Composite extends qx_ui_mobile_core_Widget {
}
interface qx_ui_mobile_container_INavigationStatic {
}
interface qx_ui_mobile_container_INavigation {
	getLeftContainer(): qx_ui_mobile_container_Composite;
	getRightContainer(): qx_ui_mobile_container_Composite;
	getTitleWidget(): qx_ui_mobile_navigationbar_Title;
}
interface qx_ui_mobile_container_MasterDetailStatic {
	new(layout: qx_ui_mobile_layout_Abstract): qx_ui_mobile_container_MasterDetail;
}
interface qx_ui_mobile_container_MasterDetail extends qx_ui_mobile_container_Composite {
	__addMasterToOrigin(): void;
	__addMasterToPortraitContainer(): void;
	__createContainer(cssClass: string): qx_ui_mobile_container_Composite;
	__syncLayout(): void;
	_applyMasterContainerCss(isPortrait: bool): void;
	_createDetailContainer(): qx_ui_mobile_container_Composite;
	_createMasterContainer(): qx_ui_mobile_container_Composite;
	_onOrientationChange(evt: qx_event_type_Orientation): void;
	getDetail(): qx_ui_mobile_container_Composite;
	getMaster(): qx_ui_mobile_container_Composite;
	getPortraitMasterContainer(): qx_ui_mobile_core_Widget;
	setPortraitMasterContainer(container: qx_ui_mobile_core_Widget): void;
}
interface qx_ui_mobile_container_MIScrollStatic {
	new(useTransform: bool): qx_ui_mobile_container_MIScroll;
}
interface qx_ui_mobile_container_MIScroll {
	__createScrollInstance(): iScroll;
	__initScroll(): void;
	__onScrollLoaded(request: qx_bom_request_Script): void;
	__registerEventListeners(): void;
	__unregisterEventListeners(): void;
	_createScrollElement(): Element;
	_getScrollContentElement(): Element;
	_refresh(): void;
	_scrollTo(x: number, y: number, time: number): void;
	_setScroll(scroll: iScroll): void;
}
interface qx_ui_mobile_container_MNativeScrollStatic {
}
interface qx_ui_mobile_container_MNativeScroll {
	_createScrollElement(): Element;
	_getScrollContentElement(): Element;
	_scrollTo(x: number, y: number, time: number): void;
}
interface qx_ui_mobile_container_NavigationStatic {
	new(): qx_ui_mobile_container_Navigation;
}
interface qx_ui_mobile_container_Navigation extends qx_ui_mobile_container_Composite {
	_createContent(): qx_ui_mobile_container_Composite;
	_createNavigationBar(): qx_ui_mobile_navigationbar_NavigationBar;
	_onUpdateLayout(evt: qx_event_type_Data): void;
	_update(widget: qx_ui_mobile_core_Widget): void;
	add(widget: any): void;
	getContent(): qx_ui_mobile_container_Composite;
	getLayout(): qx_ui_mobile_layout_Card;
	getNavigationBar(): qx_ui_mobile_navigationbar_NavigationBar;
	remove(widget: any): void;
}
interface qx_ui_mobile_container_ScrollStatic {
}
interface qx_ui_mobile_container_Scroll extends qx_ui_mobile_container_Composite {
	_createContainerElement(): void;
	_getContentElement(): void;
	refresh(): void;
	scrollTo(x: number, y: number, time: number): void;
}
interface qx_ui_mobile_core_BlockerStatic {
}
interface qx_ui_mobile_core_Blocker extends qx_ui_mobile_core_Widget {
	__registerEventListener(): void;
	__unregisterEventListener(): void;
	_onScroll(evt: qx_event_type_Touch): void;
	_onTouch(evt: qx_event_type_Touch): void;
	_updateSize(): void;
	forceHide(): void;
	hide(): void;
	isShown(): void;
	show(): void;
}
interface qx_ui_mobile_core_DomUpdatedHandlerStatic {
	refresh(): void;
	new(manager: qx_event_Manager): qx_ui_mobile_core_DomUpdatedHandler;
}
interface qx_ui_mobile_core_DomUpdatedHandler extends qx_core_Object {
	canHandleEvent(target: any, type: any): void;
	refresh(): void;
	registerEvent(target: any, type: any, capture: any): void;
	unregisterEvent(target: any, type: any, capture: any): void;
}
interface qx_ui_mobile_core_EventHandlerStatic {
	__cancelActiveStateTimer(): void;
	__onTouchEnd(domEvent: qx_event_type_Touch): void;
	__onTouchMove(domEvent: qx_event_type_Touch): void;
	__onTouchStart(domEvent: qx_event_type_Touch): void;
	__removeActiveState(): void;
	new(): qx_ui_mobile_core_EventHandler;
}
interface qx_ui_mobile_core_EventHandler extends qx_core_Object {
	_dispatchEvent(domEvent: qx_event_type_Event): void;
	canHandleEvent(target: any, type: any): void;
	registerEvent(target: any, type: any, capture: any): void;
	unregisterEvent(target: any, type: any, capture: any): void;
}
interface qx_ui_mobile_core_MChildrenHandlingStatic {
	remap(members: any): void;
}
interface qx_ui_mobile_core_MChildrenHandling {
	add(child: qx_ui_mobile_core_Widget, layoutProperties: any): void;
	addAfter(child: qx_ui_mobile_core_Widget, after: qx_ui_mobile_core_Widget, layoutProperties: any): void;
	addAt(child: qx_ui_mobile_core_Widget, index: number, options: any): void;
	addBefore(child: qx_ui_mobile_core_Widget, before: qx_ui_mobile_core_Widget, layoutProperties: any): void;
	getChildren(): qx_ui_mobile_core_Widget;
	hasChildren(): bool;
	indexOf(child: qx_ui_mobile_core_Widget): number;
	remove(child: qx_ui_mobile_core_Widget): void;
	removeAll(): void;
	removeAt(index: number): void;
}
interface qx_ui_mobile_core_MLayoutHandlingStatic {
	remap(members: any): void;
}
interface qx_ui_mobile_core_MLayoutHandling {
	getLayout(): qx_ui_mobile_layout_Abstract;
	setLayout(layout: qx_ui_mobile_layout_Abstract): void;
}
interface qx_ui_mobile_core_MResizeStatic {
}
interface qx_ui_mobile_core_MResize {
	_setHeight(height: number): void;
	_setWidth(width: number): void;
	fixSize(): void;
	getFireDomUpdatedOnResize(): any;
	initFireDomUpdatedOnResize(value: any): any;
	isFireDomUpdatedOnResize(): bool;
	releaseFixedSize(): void;
	resetFireDomUpdatedOnResize(): void;
	setFireDomUpdatedOnResize(value: any): any;
	toggleFireDomUpdatedOnResize(): bool;
}
interface qx_ui_mobile_core_RootStatic {
	new(root: Element, layout: qx_ui_mobile_layout_Abstract): qx_ui_mobile_core_Root;
}
interface qx_ui_mobile_core_Root extends qx_ui_mobile_container_Composite {
	_applyShowScrollbarY(value: bool, old: bool): void;
	_createContainerElement(): void;
	getShowScrollbarY(): any;
	initShowScrollbarY(value: any): any;
	isShowScrollbarY(): bool;
	resetShowScrollbarY(): void;
	setShowScrollbarY(value: any): any;
	toggleShowScrollbarY(): bool;
}
interface qx_ui_mobile_core_WidgetStatic {
	addAttributeMapping(property: string, attribute: string, values: any): void;
	addStyleMapping(property: string, style: string, values: any): void;
	getCurrentId(): number;
	getWidgetById(id: string): qx_ui_mobile_core_Widget;
	onShutdown(): void;
	registerWidget(widget: qx_ui_mobile_core_Widget): void;
	scheduleDomUpdated(): void;
	unregisterWidget(id: string): void;
	new(): qx_ui_mobile_core_Widget;
}
interface qx_ui_mobile_core_Widget extends qx_core_Object {
	__setVisibility(action: string, properties: any): void;
	_add(child: qx_ui_mobile_core_Widget, layoutProperties: any): void;
	_addAfter(child: qx_ui_mobile_core_Widget, afterWidget: qx_ui_mobile_core_Widget, layoutProperties: any): void;
	_addAt(child: qx_ui_mobile_core_Widget, index: number, options: any): void;
	_addBefore(child: qx_ui_mobile_core_Widget, beforeWidget: qx_ui_mobile_core_Widget, layoutProperties: any): void;
	_applyAttribute(value: any, old: any, attribute: string): void;
	_applyDefaultCssClass(value: string, old: string): void;
	_applyEnabled(value: bool, old: bool): void;
	_applyId(value: string, old: string): void;
	_applyStyle(value: any, old: any, style: any): void;
	_applyVisibility(value: any, old: any): void;
	_createContainerElement(): Element;
	_domUpdated(): void;
	_getAttribute(attribute: string): void;
	_getChildren(): qx_ui_mobile_core_Widget;
	_getContentElement(): Element;
	_getLayout(): qx_ui_mobile_layout_Abstract;
	_getStyle(style: string): any;
	_getTagName(): void;
	_hasChildren(): bool;
	_indexOf(child: qx_ui_mobile_core_Widget): number;
	_initializeChildLayout(child: qx_ui_mobile_core_Widget, layoutProperties: any): void;
	_remove(child: qx_ui_mobile_core_Widget): void;
	_removeAll(): void;
	_removeAt(index: number): void;
	_setAttribute(attribute: string, value: any): void;
	_setContainerElement(element: Element): void;
	_setHtml(value: string): void;
	_setLayout(layout: qx_ui_mobile_layout_Abstract): void;
	_setStyle(style: string, value: any): void;
	_transformId(value: string): void;
	addCssClass(cssClass: string): void;
	addCssClasses(cssClasses: string): void;
	destroy(): void;
	exclude(properties: any): void;
	getActivatable(): any;
	getAnonymous(): any;
	getContainerElement(): Element;
	getContentElement(): Element;
	getDefaultCssClass(): any;
	getEnabled(): any;
	getId(): any;
	getLayoutParent(): qx_ui_mobile_core_Widget;
	getName(): any;
	getVisibility(): any;
	hasCssClass(cssClass: string): bool;
	hide(properties: any): void;
	initActivatable(value: any): any;
	initAnonymous(value: any): any;
	initDefaultCssClass(value: any): any;
	initEnabled(value: any): any;
	initId(value: any): any;
	initName(value: any): any;
	initVisibility(value: any): any;
	isActivatable(): bool;
	isAnonymous(): bool;
	isEnabled(): bool;
	isExcluded(): bool;
	isHidden(): bool;
	isSeeable(): void;
	isVisible(): bool;
	removeChild(child: qx_ui_mobile_core_Widget): void;
	removeCssClass(cssClass: string): void;
	removeCssClasses(cssClasses: string): void;
	resetActivatable(): void;
	resetAnonymous(): void;
	resetDefaultCssClass(): void;
	resetEnabled(): void;
	resetId(): void;
	resetName(): void;
	resetVisibility(): void;
	setActivatable(value: any): any;
	setAnonymous(value: any): any;
	setDefaultCssClass(value: any): any;
	setEnabled(value: any): any;
	setId(value: any): any;
	setLayoutParent(parent: any): void;
	setLayoutProperties(properties: any): void;
	setName(value: any): any;
	setVisibility(value: any): any;
	show(properties: any): void;
	toggleActivatable(): bool;
	toggleAnonymous(): bool;
	toggleCssClass(cssClass: string): void;
	toggleEnabled(): bool;
	updateLayout(widget: qx_ui_mobile_core_Widget, action: string, properties: any): void;
	updateLayoutProperties(widget: qx_ui_mobile_core_Widget, properties: any): void;
}
interface qx_ui_mobile_dialog_BusyIndicatorStatic {
	new(label: string): qx_ui_mobile_dialog_BusyIndicator;
}
interface qx_ui_mobile_dialog_BusyIndicator extends qx_ui_mobile_basic_Atom {
	_applySpinnerClass(value: string, old: string): void;
	_createIconWidget(iconUrl: any): void;
	getSpinnerClass(): any;
	initSpinnerClass(value: any): any;
	resetSpinnerClass(): void;
	setSpinnerClass(value: any): any;
}
interface qx_ui_mobile_dialog_DialogStatic {
}
interface qx_ui_mobile_dialog_Dialog extends qx_ui_mobile_dialog_Popup {
	_getBlocker(): qx_ui_mobile_core_Blocker;
	getModal(): any;
	hide(): void;
	initModal(value: any): any;
	isModal(): bool;
	resetModal(): void;
	setModal(value: any): any;
	show(): void;
	toggleModal(): bool;
}
interface qx_ui_mobile_dialog_ManagerStatic {
	getInstance(): qx_ui_mobile_dialog_Manager;
}
interface qx_ui_mobile_dialog_Manager extends qx_core_Object {
	__processDialogButtons(buttons: string): string;
	__showNonNativeDialog(title: string, text: string, handler: qx_lang_Function, scope: any, buttons: string, dialogType: number): void;
	alert(title: string, text: string, handler: qx_lang_Function, scope: any, button: string): void;
	confirm(title: string, text: string, handler: qx_lang_Function, scope: any, buttons: string): void;
	error(title: string, text: string, handler: qx_lang_Function, scope: any, button: string): void;
	input(title: string, text: string, handler: qx_lang_Function, scope: any, buttons: string): void;
	wait(title: string, text: string, handler: qx_lang_Function, scope: any, buttons: string): void;
	warning(title: string, text: string, handler: qx_lang_Function, scope: any, button: string): void;
}
interface qx_ui_mobile_dialog_MenuStatic {
	new(itemsModel: any): qx_ui_mobile_dialog_Menu;
}
interface qx_ui_mobile_dialog_Menu extends qx_ui_mobile_dialog_Dialog {
	__onBlockerTap(): void;
	__onListChangeSelection(evt: qx_event_type_Data): void;
	__onListTap(): void;
	_createSelectionList(): void;
	_render(): void;
	getHideOnBlockerClick(): any;
	getSelectedItemClass(): any;
	getUnselectedItemClass(): any;
	initHideOnBlockerClick(value: any): any;
	initSelectedItemClass(value: any): any;
	initUnselectedItemClass(value: any): any;
	isHideOnBlockerClick(): bool;
	resetHideOnBlockerClick(): void;
	resetSelectedItemClass(): void;
	resetUnselectedItemClass(): void;
	setHideOnBlockerClick(value: any): any;
	setItems(itemsModel: qx_data_Array): void;
	setSelectedIndex(selectedIndex: number): void;
	setSelectedItemClass(value: any): any;
	setUnselectedItemClass(value: any): any;
	toggleHideOnBlockerClick(): bool;
}
interface qx_ui_mobile_dialog_PopupStatic {
	new(widget: qx_ui_mobile_core_Widget, anchor: qx_ui_mobile_core_Widget): qx_ui_mobile_dialog_Popup;
}
interface qx_ui_mobile_dialog_Popup extends qx_ui_mobile_core_Widget {
	__registerEventListener(): void;
	__unregisterEventListener(): void;
	_applyIcon(value: string, old: string): void;
	_applyTitle(value: string, old: string): void;
	_createTitleWidget(): qx_ui_mobile_basic_Atom;
	_initializeChild(widget: qx_ui_mobile_core_Widget): void;
	_positionTo(left: number, top: number): void;
	_positionToCenter(): void;
	_updatePosition(): void;
	add(widget: qx_ui_mobile_core_Widget): void;
	getIcon(): any;
	getTitle(): any;
	getTitleWidget(): qx_ui_mobile_basic_Atom;
	hide(): void;
	initIcon(value: any): any;
	initTitle(value: any): any;
	placeTo(left: number, top: number): void;
	removeWidget(): void;
	resetIcon(): void;
	resetTitle(): void;
	setAnchor(widget: qx_ui_mobile_core_Widget): void;
	setIcon(value: any): any;
	setTitle(value: any): any;
	show(): void;
}
interface qx_ui_mobile_embed_HtmlStatic {
	new(html: string): qx_ui_mobile_embed_Html;
}
interface qx_ui_mobile_embed_Html extends qx_ui_mobile_core_Widget {
	_applyHtml(value: string, old: string): void;
	getHtml(): any;
	initHtml(value: any): any;
	resetHtml(): void;
	setHtml(value: any): any;
}
interface qx_ui_mobile_form_ButtonStatic {
}
interface qx_ui_mobile_form_Button extends qx_ui_mobile_basic_Atom {
	getValue(): string;
	setValue(value: string): void;
}
interface qx_ui_mobile_form_CheckBoxStatic {
	new(value: bool): qx_ui_mobile_form_CheckBox;
}
interface qx_ui_mobile_form_CheckBox extends qx_ui_mobile_form_Input {
	__onAppear(): void;
	_getType(): void;
	_getValue(): void;
	_setValue(value: bool): void;
}
interface qx_ui_mobile_form_FormStatic {
	new(): qx_ui_mobile_form_Form;
}
interface qx_ui_mobile_form_Form extends qx_ui_form_Form {
	_createResetter(): void;
	setRenderer(renderer: qx_ui_mobile_form_renderer_AbstractRenderer): void;
	validate(): void;
}
interface qx_ui_mobile_form_GroupStatic {
}
interface qx_ui_mobile_form_Group extends qx_ui_mobile_container_Composite {
}
interface qx_ui_mobile_form_InputStatic {
	new(): qx_ui_mobile_form_Input;
}
interface qx_ui_mobile_form_Input extends qx_ui_mobile_core_Widget {
	_getTagName(): void;
	_getType(): void;
}
interface qx_ui_mobile_form_MStateStatic {
}
interface qx_ui_mobile_form_MState {
	addState(state: string): void;
	hasState(state: string): bool;
	removeState(state: string): void;
	replaceState(oldState: string, newState: string): void;
}
interface qx_ui_mobile_form_MTextStatic {
	new(value: any): qx_ui_mobile_form_MText;
}
interface qx_ui_mobile_form_MText {
	_applyMaxLength(value: number, old: number): void;
	getMaxLength(): any;
	getPlaceholder(): any;
	getReadOnly(): any;
	initMaxLength(value: any): any;
	initPlaceholder(value: any): any;
	initReadOnly(value: any): any;
	isReadOnly(): bool;
	resetMaxLength(): void;
	resetPlaceholder(): void;
	resetReadOnly(): void;
	setMaxLength(value: any): any;
	setPlaceholder(value: any): any;
	setReadOnly(value: any): any;
	toggleReadOnly(): bool;
}
interface qx_ui_mobile_form_MValueStatic {
	new(value: any): qx_ui_mobile_form_MValue;
}
interface qx_ui_mobile_form_MValue {
	__fireChangeValue(value: any): void;
	_convertValue(value: any): void;
	_onChangeContent(evt: qx_event_type_Data): void;
	_onInput(evt: qx_event_type_Data): void;
	getLiveUpdate(): any;
	getValue(): any;
	initLiveUpdate(value: any): any;
	isLiveUpdate(): bool;
	resetLiveUpdate(): void;
	resetValue(): any;
	setLiveUpdate(value: any): any;
	setValue(value: any): void;
	toggleLiveUpdate(): bool;
}
interface qx_ui_mobile_form_NumberFieldStatic {
	new(value: any): qx_ui_mobile_form_NumberField;
}
interface qx_ui_mobile_form_NumberField extends qx_ui_mobile_form_Input {
	_getType(): void;
	_onChangeMaximum(value: any, old: any): void;
	_onChangeMinimum(value: any, old: any): void;
	_onChangeStep(value: any, old: any): void;
	getMaximum(): any;
	getMinimum(): any;
	getStep(): any;
	initMaximum(value: any): any;
	initMinimum(value: any): any;
	initStep(value: any): any;
	resetMaximum(): void;
	resetMinimum(): void;
	resetStep(): void;
	setMaximum(value: any): any;
	setMinimum(value: any): any;
	setStep(value: any): any;
}
interface qx_ui_mobile_form_PasswordFieldStatic {
}
interface qx_ui_mobile_form_PasswordField extends qx_ui_mobile_form_TextField {
	_getType(): void;
}
interface qx_ui_mobile_form_RadioButtonStatic {
	new(value: bool): qx_ui_mobile_form_RadioButton;
}
interface qx_ui_mobile_form_RadioButton extends qx_ui_mobile_form_Input {
	__onAppear(): void;
	_applyGroup(value: any, old: any): void;
	_createContainerElement(): void;
	_getType(): void;
	_getValue(): void;
	_onClick(): void;
	_setValue(value: bool): void;
	getGroup(): any;
	initGroup(value: any): any;
	resetGroup(): void;
	setGroup(value: any): any;
}
interface qx_ui_mobile_form_RadioGroupStatic {
}
interface qx_ui_mobile_form_RadioGroup extends qx_ui_form_RadioGroup {
}
interface qx_ui_mobile_form_renderer_AbstractRendererStatic {
	new(form: qx_ui_mobile_form_Form): qx_ui_mobile_form_renderer_AbstractRenderer;
}
interface qx_ui_mobile_form_renderer_AbstractRenderer extends qx_ui_mobile_core_Widget {
	addButton(button: any): void;
	addItems(items: any, names: any, title: any): void;
	resetForm(): void;
	showErrorForItem(item: qx_ui_mobile_core_Widget): void;
}
interface qx_ui_mobile_form_renderer_SingleStatic {
	new(form: any): qx_ui_mobile_form_renderer_Single;
}
interface qx_ui_mobile_form_renderer_Single extends qx_ui_mobile_form_renderer_AbstractRenderer {
	_getTagName(): void;
	_showGroupHeader(title: string): void;
	addButton(button: any): void;
	addItems(items: any, names: any, title: any): void;
	resetForm(): void;
	showErrorForItem(item: any): void;
}
interface qx_ui_mobile_form_renderer_SinglePlaceholderStatic {
	new(form: any): qx_ui_mobile_form_renderer_SinglePlaceholder;
}
interface qx_ui_mobile_form_renderer_SinglePlaceholder extends qx_ui_mobile_form_renderer_Single {
	addItems(items: any, names: any, title: any): void;
}
interface qx_ui_mobile_form_ResetterStatic {
}
interface qx_ui_mobile_form_Resetter extends qx_ui_form_Resetter {
	_supportsValue(formItem: any): void;
}
interface qx_ui_mobile_form_RowStatic {
	new(layout: qx_ui_mobile_layout_Abstract): qx_ui_mobile_form_Row;
}
interface qx_ui_mobile_form_Row extends qx_ui_mobile_container_Composite {
	_getTagName(): void;
	getSelectable(): any;
	initSelectable(value: any): any;
	isSelectable(): bool;
	resetSelectable(): void;
	setSelectable(value: any): any;
	toggleSelectable(): bool;
}
interface qx_ui_mobile_form_SelectBoxStatic {
	new(): qx_ui_mobile_form_SelectBox;
}
interface qx_ui_mobile_form_SelectBox extends qx_ui_mobile_core_Widget {
	__showSelectionDialog(): void;
	_applyModel(value: qx_data_Array, old: qx_data_Array): void;
	_createContainerElement(): void;
	_createSelectionDialog(): void;
	_getTagName(): void;
	_getValue(): void;
	_onChangeSelection(evt: qx_event_type_Data): void;
	_render(): void;
	_setValue(value: string): void;
	getModel(): any;
	getSelection(): void;
	initModel(value: any): any;
	resetModel(): void;
	setDialogTitle(title: string): void;
	setModel(value: any): any;
	setSelection(value: number): void;
}
interface qx_ui_mobile_form_SliderStatic {
	new(): qx_ui_mobile_form_Slider;
}
interface qx_ui_mobile_form_Slider extends qx_ui_mobile_core_Widget {
	_createContainerElement(): void;
	_createKnobElement(): Element;
	_getKnobElement(): Element;
	_getOverallSteps(): number;
	_getPixelPerStep(width: number): number;
	_getPosition(documentLeft: number): number;
	_getRange(): number;
	_getValue(): void;
	_limitValue(value: number): number;
	_onTouchMove(evt: qx_event_type_Touch): void;
	_onTouchStart(evt: qx_event_type_Touch): void;
	_onTransitionEnd(evt: qx_event_type_Event): void;
	_percentToPosition(width: number, percent: number): number;
	_positionToValue(position: number): number;
	_refresh(): void;
	_registerEventListener(): void;
	_setKnobPosition(percent: number): void;
	_setProgressIndicatorPosition(percent: number): void;
	_setValue(value: number): void;
	_unregisterEventListener(): void;
	_updateKnobPosition(): void;
	_updateSizes(): void;
	_valueToPercent(value: number): number;
	getMaximum(): any;
	getMinimum(): any;
	getStep(): any;
	initMaximum(value: any): any;
	initMinimum(value: any): any;
	initStep(value: any): any;
	nextValue(): void;
	previousValue(): void;
	resetMaximum(): void;
	resetMinimum(): void;
	resetStep(): void;
	setMaximum(value: any): any;
	setMinimum(value: any): any;
	setStep(value: any): any;
}
interface qx_ui_mobile_form_TextAreaStatic {
	new(value: any): qx_ui_mobile_form_TextArea;
}
interface qx_ui_mobile_form_TextArea extends qx_ui_mobile_core_Widget {
	_getTagName(): void;
}
interface qx_ui_mobile_form_TextFieldStatic {
	new(value: any): qx_ui_mobile_form_TextField;
}
interface qx_ui_mobile_form_TextField extends qx_ui_mobile_form_Input {
	_getType(): void;
}
interface qx_ui_mobile_form_TitleStatic {
}
interface qx_ui_mobile_form_Title extends qx_ui_mobile_basic_Label {
	_getTagName(): void;
}
interface qx_ui_mobile_form_ToggleButtonStatic {
	new(value: bool, labelChecked: bool, labelUnchecked: bool, fontSize: number): qx_ui_mobile_form_ToggleButton;
}
interface qx_ui_mobile_form_ToggleButton extends qx_ui_mobile_core_Widget {
	_createChild(): void;
	_getChild(): qx_ui_mobile_container_Composite;
	_getValue(): void;
	_onSwipe(evt: qx_event_type_Swipe): void;
	_onTap(evt: qx_event_type_Tap): void;
	_setValue(value: bool): void;
	toggle(): void;
}
interface qx_ui_mobile_layout_AbstractStatic {
}
interface qx_ui_mobile_layout_Abstract extends qx_core_Object {
	__getChildLayoutPropertyCache(widget: qx_ui_mobile_core_Widget): any;
	_addCachedProperty(property: string, value: any): void;
	_addPropertyToChildLayoutCache(widget: qx_ui_mobile_core_Widget, property: string, value: any): void;
	_getChildLayoutPropertyValue(widget: qx_ui_mobile_core_Widget, property: string): any;
	_getCssClasses(): any[];
	_getSupportedChildLayoutProperties(): any;
	_setLayoutProperty(widget: qx_ui_mobile_core_Widget, property: string, value: any): void;
	connectToChildWidget(widget: qx_ui_mobile_core_Widget): void;
	connectToWidget(widget: qx_ui_mobile_core_Widget): void;
	disconnectFromChildWidget(widget: qx_ui_mobile_core_Widget): void;
	setLayoutProperties(widget: qx_ui_mobile_core_Widget, properties: any): void;
	updateLayout(widget: qx_ui_mobile_core_Widget, action: string, properties: any): void;
}
interface qx_ui_mobile_layout_AbstractBoxStatic {
	new(alignX: string, alignY: string, reversed: bool): qx_ui_mobile_layout_AbstractBox;
}
interface qx_ui_mobile_layout_AbstractBox extends qx_ui_mobile_layout_Abstract {
	_applyLayoutChange(value: any, old: any): void;
	_getSupportedChildLayoutProperties(): void;
	_setLayoutProperty(widget: any, property: any, value: any): void;
	connectToWidget(widget: any): void;
	disconnectFromChildWidget(widget: any): void;
	getAlignX(): any;
	getAlignY(): any;
	getReversed(): any;
	initAlignX(value: any): any;
	initAlignY(value: any): any;
	initReversed(value: any): any;
	isReversed(): bool;
	resetAlignX(): void;
	resetAlignY(): void;
	resetReversed(): void;
	setAlignX(value: any): any;
	setAlignY(value: any): any;
	setReversed(value: any): any;
	toggleReversed(): bool;
}
interface qx_ui_mobile_layout_CardStatic {
}
interface qx_ui_mobile_layout_Card extends qx_ui_mobile_layout_Abstract {
	__getAnimationClasses(direction: string): string;
	__startAnimation(widget: qx_ui_mobile_core_Widget): void;
	__stopAnimation(): void;
	_fixWidgetSize(widget: qx_ui_mobile_core_Widget): void;
	_getCssClasses(): void;
	_onAnimationEnd(evt: qx_event_type_Event): void;
	_releaseWidgetSize(widget: qx_ui_mobile_core_Widget): void;
	_showWidget(widget: qx_ui_mobile_core_Widget, properties: any): void;
	_swapWidget(): void;
	connectToChildWidget(widget: any): void;
	disconnectFromChildWidget(widget: any): void;
	getDefaultAnimation(): any;
	getShowAnimation(): any;
	initDefaultAnimation(value: any): any;
	initShowAnimation(value: any): any;
	isShowAnimation(): bool;
	resetDefaultAnimation(): void;
	resetShowAnimation(): void;
	setDefaultAnimation(value: any): any;
	setShowAnimation(value: any): any;
	toggleShowAnimation(): bool;
	updateLayout(widget: any, action: any, properties: any): void;
}
interface qx_ui_mobile_layout_HBoxStatic {
}
interface qx_ui_mobile_layout_HBox extends qx_ui_mobile_layout_AbstractBox {
	_getCssClasses(): void;
}
interface qx_ui_mobile_layout_VBoxStatic {
}
interface qx_ui_mobile_layout_VBox extends qx_ui_mobile_layout_AbstractBox {
	_getCssClasses(): void;
}
interface qx_ui_mobile_list_IListDelegateStatic {
}
interface qx_ui_mobile_list_IListDelegate {
	configureItem(item: qx_ui_mobile_list_renderer_Abstract, data: any, row: number): void;
	createItemRenderer(): qx_ui_mobile_list_renderer_Abstract;
}
interface qx_ui_mobile_list_ListStatic {
	new(delegate: any): qx_ui_mobile_list_List;
}
interface qx_ui_mobile_list_List extends qx_ui_mobile_core_Widget {
	__onModelChange(): void;
	__render(): void;
	_applyDelegate(value: any, old: any): void;
	_applyModel(value: qx_data_Array, old: qx_data_Array): void;
	_getTagName(): void;
	_onTap(evt: qx_event_type_Tap): void;
	getDelegate(): any;
	getItemCount(): any;
	getModel(): any;
	initDelegate(value: any): any;
	initItemCount(value: any): any;
	initModel(value: any): any;
	resetDelegate(): void;
	resetItemCount(): void;
	resetModel(): void;
	setDelegate(value: any): any;
	setItemCount(value: any): any;
	setModel(value: any): any;
}
interface qx_ui_mobile_list_provider_ProviderStatic {
}
interface qx_ui_mobile_list_provider_Provider extends qx_core_Object {
	_applyDelegate(value: any, old: any): void;
	_configureItem(data: any, row: number): void;
	_createItemRenderer(): qx_ui_mobile_list_renderer_Abstract;
	_getItemRenderer(): qx_ui_mobile_list_renderer_Abstract;
	_setItemRenderer(renderer: qx_ui_mobile_list_renderer_Abstract): void;
	getDelegate(): any;
	getItemElement(data: any, row: number): Element;
	initDelegate(value: any): any;
	resetDelegate(): void;
	setDelegate(value: any): any;
}
interface qx_ui_mobile_list_renderer_AbstractStatic {
	new(layout: any): qx_ui_mobile_list_renderer_Abstract;
}
interface qx_ui_mobile_list_renderer_Abstract extends qx_ui_mobile_container_Composite {
	_applySelected(value: bool, old: bool): void;
	_applyShowArrow(value: bool, old: bool): void;
	_getTagName(): void;
	getRowIndex(element: Element): number;
	getRowIndexFromEvent(evt: qx_event_type_Event): number;
	getSelectable(): any;
	getSelected(): any;
	getShowArrow(): any;
	initSelectable(value: any): any;
	initSelected(value: any): any;
	initShowArrow(value: any): any;
	isSelectable(): bool;
	isSelected(): bool;
	isShowArrow(): bool;
	reset(): void;
	resetSelectable(): void;
	resetSelected(): void;
	resetShowArrow(): void;
	setSelectable(value: any): any;
	setSelected(value: any): any;
	setShowArrow(value: any): any;
	toggleSelectable(): bool;
	toggleSelected(): bool;
	toggleShowArrow(): bool;
}
interface qx_ui_mobile_list_renderer_DefaultStatic {
	new(layout: any): qx_ui_mobile_list_renderer_Default;
}
interface qx_ui_mobile_list_renderer_Default extends qx_ui_mobile_list_renderer_Abstract {
	_createImage(): qx_ui_mobile_basic_Image;
	_createRightContainer(): qx_ui_mobile_container_Composite;
	_createSubtitle(): qx_ui_mobile_basic_Label;
	_createTitle(): qx_ui_mobile_basic_Label;
	_init(): void;
	getImageWidget(): qx_ui_mobile_basic_Image;
	getSubtitleWidget(): qx_ui_mobile_basic_Label;
	getTitleWidget(): qx_ui_mobile_basic_Label;
	reset(): void;
	setImage(source: string): void;
	setSubtitle(subtitle: string): void;
	setTitle(title: string): void;
}
interface qx_ui_mobile_navigation_ManagerStatic {
	getInstance(): qx_bom_History;
	new(): qx_ui_mobile_navigation_Manager;
}
interface qx_ui_mobile_navigation_Manager extends qx_core_Object {
	__addToHistory(path: string, customData: any): void;
	__getFromHistory(path: string): any;
	__onChangeHash(evt: qx_event_type_Data): void;
	_addRoute(operation: string, route: string, handler: qx_lang_Function, scope: any): void;
	_addRoute(operation: string, route: RegExp, handler: qx_lang_Function, scope: any): void;
	_execute(operation: string, path: string, params: any, customData: any): bool;
	_executeGet(path: string, customData: any, fromEvent: bool): void;
	_executeRoute(operation: string, path: string, route: any, params: any, customData: any): bool;
	_executeRoutes(operation: string, path: string, routes: any, params: any, customData: any): bool;
	_getRoutes(): any;
	executeDelete(path: string, params: any, customData: any): void;
	executeGet(path: string, customData: any): void;
	executePost(path: string, params: any, customData: any): void;
	executePut(path: string, params: any, customData: any): void;
	getCurrentGetPath(): string;
	onAny(route: string, handler: qx_lang_Function, scope: any): void;
	onAny(route: RegExp, handler: qx_lang_Function, scope: any): void;
	onDelete(route: string, handler: qx_lang_Function, scope: any): void;
	onDelete(route: RegExp, handler: qx_lang_Function, scope: any): void;
	onGet(route: string, handler: qx_lang_Function, scope: any): void;
	onGet(route: RegExp, handler: qx_lang_Function, scope: any): void;
	onPost(route: string, handler: qx_lang_Function, scope: any): void;
	onPost(route: RegExp, handler: qx_lang_Function, scope: any): void;
	onPut(route: string, handler: qx_lang_Function, scope: any): void;
	onPut(route: RegExp, handler: qx_lang_Function, scope: any): void;
	remove(id: string): void;
}
interface qx_ui_mobile_navigationbar_BackButtonStatic {
}
interface qx_ui_mobile_navigationbar_BackButton extends qx_ui_mobile_navigationbar_Button {
}
interface qx_ui_mobile_navigationbar_ButtonStatic {
}
interface qx_ui_mobile_navigationbar_Button extends qx_ui_mobile_form_Button {
}
interface qx_ui_mobile_navigationbar_NavigationBarStatic {
	new(layout: any): qx_ui_mobile_navigationbar_NavigationBar;
}
interface qx_ui_mobile_navigationbar_NavigationBar extends qx_ui_mobile_container_Composite {
}
interface qx_ui_mobile_navigationbar_TitleStatic {
}
interface qx_ui_mobile_navigationbar_Title extends qx_ui_mobile_basic_Label {
	_getTagName(): void;
}
interface qx_ui_mobile_page_ManagerStatic {
	new(isTablet: bool, root: qx_ui_mobile_core_Widget): qx_ui_mobile_page_Manager;
}
interface qx_ui_mobile_page_Manager extends qx_core_Object {
	__toggleMasterButtonVisibility(): void;
	_add(pages: qx_ui_mobile_page_NavigationPage, target: qx_ui_mobile_container_Navigation): void;
	_applyMasterTitle(value: string, old: string): void;
	_createDetailContainer(): qx_ui_mobile_container_Navigation;
	_createMasterButton(): qx_ui_mobile_navigationbar_Button;
	_createMasterContainer(): qx_ui_mobile_container_Navigation;
	_createMasterDetail(): qx_ui_mobile_container_MasterDetail;
	_createPortraitMasterContainer(masterContainerAnchor: qx_ui_mobile_core_Widget): qx_ui_mobile_dialog_Popup;
	_onDetailContainerTap(): void;
	_onDetailContainerUpdate(evt: qx_event_type_Data): void;
	_onHidePortraitContainer(): void;
	_onLayoutChange(evt: qx_event_type_Data): void;
	_onMasterButtonTap(): void;
	_onMasterPageAppear(evt: qx_event_type_Event): void;
	_onMasterPageStart(evt: qx_event_type_Event): void;
	addDetail(pages: qx_ui_mobile_page_NavigationPage): void;
	addMaster(pages: qx_ui_mobile_page_NavigationPage): void;
	getMasterButton(): qx_ui_mobile_navigationbar_Button;
	getMasterTitle(): any;
	getPortraitMasterContainer(): qx_ui_mobile_dialog_Popup;
	getPortraitMasterScrollOffset(): any;
	initMasterTitle(value: any): any;
	initPortraitMasterScrollOffset(value: any): any;
	resetMasterTitle(): void;
	resetPortraitMasterScrollOffset(): void;
	setMasterTitle(value: any): any;
	setPortraitMasterScrollOffset(value: any): any;
}
interface qx_ui_mobile_page_NavigationPageStatic {
}
interface qx_ui_mobile_page_NavigationPage extends qx_ui_mobile_page_Page {
	_applyBackButtonText(value: string, old: string): void;
	_applyButtonText(value: string, old: string): void;
	_applyContentCssClass(value: string, old: string): void;
	_applyShowBackButton(value: bool, old: bool): void;
	_applyShowButton(value: bool, old: bool): void;
	_applyTitle(value: string, old: string): void;
	_createBackButton(): qx_ui_mobile_navigationbar_BackButton;
	_createButton(): qx_ui_mobile_navigationbar_Button;
	_createContent(): qx_ui_mobile_container_Composite;
	_createLeftContainer(): qx_ui_mobile_container_Composite;
	_createRightContainer(): qx_ui_mobile_container_Composite;
	_createScrollContainer(): qx_ui_mobile_container_Scroll;
	_createTitleWidget(): qx_ui_mobile_navigationbar_Title;
	_getBackButton(): qx_ui_mobile_navigationbar_BackButton;
	_getButton(): qx_ui_mobile_navigationbar_Button;
	_getScrollContainer(): qx_ui_mobile_container_Scroll;
	_initialize(): void;
	_onBackButtonTap(evt: qx_event_type_Tap): void;
	_onButtonTap(evt: qx_event_type_Tap): void;
	_showBackButton(): void;
	_showButton(): void;
	addAfterNavigationBar(widget: qx_ui_mobile_core_Widget): void;
	getBackButtonText(): any;
	getButtonText(): any;
	getContent(): qx_ui_mobile_container_Composite;
	getContentCssClass(): any;
	getLeftContainer(): void;
	getRightContainer(): void;
	getShowBackButton(): any;
	getShowBackButtonOnTablet(): any;
	getShowButton(): any;
	getTitle(): any;
	getTitleWidget(): void;
	initBackButtonText(value: any): any;
	initButtonText(value: any): any;
	initContentCssClass(value: any): any;
	initShowBackButton(value: any): any;
	initShowBackButtonOnTablet(value: any): any;
	initShowButton(value: any): any;
	initTitle(value: any): any;
	isShowBackButton(): bool;
	isShowBackButtonOnTablet(): bool;
	isShowButton(): bool;
	isTablet(): bool;
	resetBackButtonText(): void;
	resetButtonText(): void;
	resetContentCssClass(): void;
	resetShowBackButton(): void;
	resetShowBackButtonOnTablet(): void;
	resetShowButton(): void;
	resetTitle(): void;
	scrollTo(x: number, y: number, time: number): void;
	setBackButtonText(value: any): any;
	setButtonText(value: any): any;
	setContentCssClass(value: any): any;
	setIsTablet(isTablet: bool): void;
	setShowBackButton(value: any): any;
	setShowBackButtonOnTablet(value: any): any;
	setShowButton(value: any): any;
	setTitle(value: any): any;
	toggleShowBackButton(): bool;
	toggleShowBackButtonOnTablet(): bool;
	toggleShowButton(): bool;
}
interface qx_ui_mobile_page_PageStatic {
	_onBackButton(): void;
	_onDeviceReady(): void;
	_onMenuButton(): void;
	new(layout: any): qx_ui_mobile_page_Page;
}
interface qx_ui_mobile_page_Page extends qx_ui_mobile_container_Composite {
	_back(triggeredByKeyEvent: bool): bool;
	_initialize(): void;
	_pause(): void;
	_resume(): void;
	_start(): void;
	_stop(): void;
	back(triggeredByKeyEvent: bool): bool;
	exclude(properties: any): void;
	initialize(): void;
	isInitialized(): bool;
	menu(): void;
	pause(): void;
	resume(): void;
	show(properties: any): void;
	start(): void;
	stop(): void;
}
interface qx_ui_mobile_tabbar_TabBarStatic {
	new(): qx_ui_mobile_tabbar_TabBar;
}
interface qx_ui_mobile_tabbar_TabBar extends qx_ui_mobile_core_Widget {
	_applySelection(value: qx_ui_mobile_tabbar_TabButton, old: qx_ui_mobile_tabbar_TabButton): void;
	_onChangeView(evt: qx_event_type_Data): void;
	_onTap(evt: qx_event_type_Tap): void;
	add(button: qx_ui_mobile_tabbar_TabButton): void;
	getSelection(): any;
	initSelection(value: any): any;
	remove(button: qx_ui_mobile_tabbar_TabButton): void;
	resetSelection(): void;
	setSelection(value: any): any;
}
interface qx_ui_mobile_tabbar_TabButtonStatic {
}
interface qx_ui_mobile_tabbar_TabButton extends qx_ui_mobile_form_Button {
	_applyView(value: qx_ui_mobile_core_Widget, old: qx_ui_mobile_core_Widget): void;
	getView(): any;
	initView(value: any): any;
	resetView(): void;
	setView(value: any): any;
}
interface qx_ui_mobile_toolbar_ButtonStatic {
}
interface qx_ui_mobile_toolbar_Button extends qx_ui_mobile_form_Button {
}
interface qx_ui_mobile_toolbar_SeparatorStatic {
	new(): qx_ui_mobile_toolbar_Separator;
}
interface qx_ui_mobile_toolbar_Separator extends qx_ui_mobile_core_Widget {
}
interface qx_ui_mobile_toolbar_ToolBarStatic {
	new(layout: any): qx_ui_mobile_toolbar_ToolBar;
}
interface qx_ui_mobile_toolbar_ToolBar extends qx_ui_mobile_container_Composite {
	add(child: qx_ui_core_queue_Widget, layoutProperties: any): void;
}
interface qx_ui_popup_ManagerStatic {
	getInstance(): qx_ui_popup_Manager;
	new(): qx_ui_popup_Manager;
}
interface qx_ui_popup_Manager extends qx_core_Object {
	__onMouseDown(e: qx_event_type_Mouse): void;
	__updateIndexes(): void;
	add(obj: qx_ui_popup_Popup): void;
	hideAll(): void;
	remove(obj: qx_ui_popup_Popup): void;
}
interface qx_ui_popup_PopupStatic {
	new(layout: any): qx_ui_popup_Popup;
}
interface qx_ui_popup_Popup extends qx_ui_container_Composite {
	_applyVisibility(value: any, old: any): void;
	getAutoHide(): any;
	initAutoHide(value: any): any;
	isAutoHide(): bool;
	resetAutoHide(): void;
	setAutoHide(value: any): any;
	show(): void;
	toggleAutoHide(): bool;
}
interface qx_ui_progressive_headfoot_AbstractStatic {
	new(): qx_ui_progressive_headfoot_Abstract;
}
interface qx_ui_progressive_headfoot_Abstract extends qx_ui_container_Composite {
	join(progressive: qx_ui_progressive_Progressive): void;
}
interface qx_ui_progressive_headfoot_NullStatic {
	new(): qx_ui_progressive_headfoot_Null;
}
interface qx_ui_progressive_headfoot_Null extends qx_ui_progressive_headfoot_Abstract {
}
interface qx_ui_progressive_headfoot_ProgressStatic {
	new(columnWidths: qx_ui_progressive_renderer_table_Widths, labelArr: any[]): qx_ui_progressive_headfoot_Progress;
}
interface qx_ui_progressive_headfoot_Progress extends qx_ui_progressive_headfoot_Abstract {
	join(progressive: any): void;
}
interface qx_ui_progressive_headfoot_TableHeadingStatic {
	new(columnWidths: qx_ui_progressive_renderer_table_Widths, labelArr: any[]): qx_ui_progressive_headfoot_TableHeading;
}
interface qx_ui_progressive_headfoot_TableHeading extends qx_ui_progressive_headfoot_Abstract {
	_resizeColumns(e: qx_event_type_Event): void;
	getLayoutChildren(): void;
	join(progressive: any): void;
}
interface qx_ui_progressive_model_AbstractStatic {
}
interface qx_ui_progressive_model_Abstract extends qx_core_Object {
	getElementCount(): number;
	getNextElement(): any;
}
interface qx_ui_progressive_model_DefaultStatic {
	new(): qx_ui_progressive_model_Default;
}
interface qx_ui_progressive_model_Default extends qx_ui_progressive_model_Abstract {
	addElement(elem: any): void;
	addElements(elems: any[]): void;
	getElementCount(): void;
	getNextElement(): void;
}
interface qx_ui_progressive_ProgressiveStatic {
	new(structure: qx_ui_progressive_structure_Abstract): qx_ui_progressive_Progressive;
}
interface qx_ui_progressive_Progressive extends qx_ui_container_Composite {
	__createStateRendererData(): void;
	__dataAvailable(e: qx_event_type_Data): void;
	__renderElementBatch(state: qx_ui_progressive_State): void;
	_applyDataModel(value: qx_ui_progressive_model_Abstract, old: any): void;
	addRenderer(name: string, renderer: qx_ui_progressive_renderer_Abstract): void;
	getBatchSize(): any;
	getDataModel(): any;
	getFlushWidgetQueueAfterBatch(): any;
	getInterElementTimeout(): any;
	getStructure(): qx_ui_progressive_structure_Abstract;
	initBatchSize(value: any): any;
	initDataModel(value: any): any;
	initFlushWidgetQueueAfterBatch(value: any): any;
	initInterElementTimeout(value: any): any;
	isFlushWidgetQueueAfterBatch(): bool;
	removeRenderer(name: string): void;
	render(): void;
	resetBatchSize(): void;
	resetDataModel(): void;
	resetFlushWidgetQueueAfterBatch(): void;
	resetInterElementTimeout(): void;
	setBatchSize(value: any): any;
	setDataModel(value: any): any;
	setFlushWidgetQueueAfterBatch(value: any): any;
	setInterElementTimeout(value: any): any;
	toggleFlushWidgetQueueAfterBatch(): bool;
}
interface qx_ui_progressive_renderer_AbstractStatic {
}
interface qx_ui_progressive_renderer_Abstract extends qx_core_Object {
	join(progressive: qx_ui_progressive_Progressive, name: string): void;
	render(state: any, element: any): void;
}
interface qx_ui_progressive_renderer_FunctionCallerStatic {
}
interface qx_ui_progressive_renderer_FunctionCaller extends qx_ui_progressive_renderer_Abstract {
	render(state: any, element: any): void;
}
interface qx_ui_progressive_renderer_table_cell_AbstractStatic {
}
interface qx_ui_progressive_renderer_table_cell_Abstract extends qx_core_Object {
	_getCellExtras(cellInfo: any): string;
	_getCellStyle(cellInfo: any): string;
	_getContentHtml(cellInfo: any): string;
	render(cellInfo: any): string;
}
interface qx_ui_progressive_renderer_table_cell_BooleanStatic {
	new(): qx_ui_progressive_renderer_table_cell_Boolean;
}
interface qx_ui_progressive_renderer_table_cell_Boolean extends qx_ui_progressive_renderer_table_cell_Icon {
	_getCellStyle(cellInfo: any): void;
	_identifyImage(cellInfo: any): void;
	getAllowToggle(): any;
	initAllowToggle(value: any): any;
	isAllowToggle(): bool;
	resetAllowToggle(): void;
	setAllowToggle(value: any): any;
	toggleAllowToggle(): bool;
}
interface qx_ui_progressive_renderer_table_cell_ConditionalStatic {
	new(align: string, color: string, style: string, weight: string): qx_ui_progressive_renderer_table_cell_Conditional;
}
interface qx_ui_progressive_renderer_table_cell_Conditional extends qx_ui_progressive_renderer_table_cell_Abstract {
	__applyFormatting(condition: any[], style: any): void;
	_getCellStyle(cellInfo: any): any;
	addBetweenCondition(condition: string, value1: number, value2: number, align: string, color: string, style: string, weight: string, target: string): void;
	addNumericCondition(condition: string, value1: number, align: string, color: string, style: string, weight: string, target: string): void;
	addRegex(regex: string, align: string, color: string, style: string, weight: string, target: string): void;
}
interface qx_ui_progressive_renderer_table_cell_DefaultStatic {
	new(): qx_ui_progressive_renderer_table_cell_Default;
}
interface qx_ui_progressive_renderer_table_cell_Default extends qx_ui_progressive_renderer_table_cell_Abstract {
	_formatValue(value: any): string;
	_getContentHtml(cellInfo: any): void;
}
interface qx_ui_progressive_renderer_table_cell_HtmlStatic {
}
interface qx_ui_progressive_renderer_table_cell_Html extends qx_ui_progressive_renderer_table_cell_Abstract {
}
interface qx_ui_progressive_renderer_table_cell_IconStatic {
	new(): qx_ui_progressive_renderer_table_cell_Icon;
}
interface qx_ui_progressive_renderer_table_cell_Icon extends qx_ui_progressive_renderer_table_cell_Abstract {
	__getImageData(cellInfo: any): any;
	_getCellStyle(cellInfo: any): void;
	_getContentHtml(cellInfo: any): void;
	_identifyImage(cellInfo: any): any;
	getBlankImage(): string;
}
interface qx_ui_progressive_renderer_table_cell_ImageStatic {
	new(width: number, height: number): qx_ui_progressive_renderer_table_cell_Image;
}
interface qx_ui_progressive_renderer_table_cell_Image extends qx_ui_progressive_renderer_table_cell_Icon {
	_identifyImage(cellInfo: any): void;
}
interface qx_ui_progressive_renderer_table_cell_StringStatic {
	new(): qx_ui_progressive_renderer_table_cell_String;
}
interface qx_ui_progressive_renderer_table_cell_String extends qx_ui_progressive_renderer_table_cell_Abstract {
	_getContentHtml(cellInfo: any): void;
}
interface qx_ui_progressive_renderer_table_RowStatic {
	new(columnWidths: qx_ui_progressive_renderer_table_Widths): qx_ui_progressive_renderer_table_Row;
}
interface qx_ui_progressive_renderer_table_Row extends qx_ui_progressive_renderer_Abstract {
	_resizeColumns(e: qx_event_type_Event): void;
	addRenderer(column: number, renderer: any): void;
	getDefaultRowHeight(): any;
	getLayoutChildren(): any[];
	initDefaultRowHeight(value: any): any;
	join(progressive: any, name: any): void;
	removeRenderer(column: number): void;
	render(state: any, element: any): void;
	resetDefaultRowHeight(): void;
	setDefaultRowHeight(value: any): any;
}
interface qx_ui_progressive_renderer_table_WidthsStatic {
	new(numColumns: number): qx_ui_progressive_renderer_table_Widths;
}
interface qx_ui_progressive_renderer_table_Widths extends qx_core_Object {
	getData(): any[];
	set(column: number, map: any): void;
	setMaxWidth(column: number, width: number): void;
	setMinWidth(column: number, width: number): void;
	setWidth(column: number, width: any): void;
}
interface qx_ui_progressive_StateStatic {
	new(initialState: any): qx_ui_progressive_State;
}
interface qx_ui_progressive_State extends qx_core_Object {
	getBatchSize(): any;
	getModel(): any;
	getPane(): any;
	getProgressive(): any;
	getRendererData(): any;
	getUserData(): any;
	initBatchSize(value: any): any;
	initModel(value: any): any;
	initPane(value: any): any;
	initProgressive(value: any): any;
	initRendererData(value: any): any;
	initUserData(value: any): any;
	resetBatchSize(): void;
	resetModel(): void;
	resetPane(): void;
	resetProgressive(): void;
	resetRendererData(): void;
	resetUserData(): void;
	setBatchSize(value: any): any;
	setModel(value: any): any;
	setPane(value: any): any;
	setProgressive(value: any): any;
	setRendererData(value: any): any;
	setUserData(value: any): any;
}
interface qx_ui_progressive_structure_AbstractStatic {
	new(pane: qx_ui_core_Widget): qx_ui_progressive_structure_Abstract;
	new(pane: any): qx_ui_progressive_structure_Abstract;
}
interface qx_ui_progressive_structure_Abstract extends qx_core_Object {
	applyStructure(progressive: qx_ui_progressive_Progressive): void;
	getPane(): qx_ui_core_Widget;
}
interface qx_ui_progressive_structure_DefaultStatic {
	new(header: qx_ui_progressive_headfoot_Abstract, footer: qx_ui_progressive_headfoot_Abstract, pane: qx_ui_core_Widget): qx_ui_progressive_structure_Default;
	new(header: qx_ui_progressive_headfoot_Abstract, footer: qx_ui_progressive_headfoot_Abstract, pane: any): qx_ui_progressive_structure_Default;
	new(header: qx_ui_progressive_headfoot_Abstract, footer: any, pane: qx_ui_core_Widget): qx_ui_progressive_structure_Default;
	new(header: qx_ui_progressive_headfoot_Abstract, footer: any, pane: any): qx_ui_progressive_structure_Default;
	new(header: any, footer: qx_ui_progressive_headfoot_Abstract, pane: qx_ui_core_Widget): qx_ui_progressive_structure_Default;
	new(header: any, footer: qx_ui_progressive_headfoot_Abstract, pane: any): qx_ui_progressive_structure_Default;
	new(header: any, footer: any, pane: qx_ui_core_Widget): qx_ui_progressive_structure_Default;
	new(header: any, footer: any, pane: any): qx_ui_progressive_structure_Default;
}
interface qx_ui_progressive_structure_Default extends qx_ui_progressive_structure_Abstract {
	applyStructure(progressive: any): void;
	getFooter(): qx_ui_progressive_headfoot_Abstract;
	getHeader(): qx_ui_progressive_headfoot_Abstract;
}
interface qx_ui_root_AbstractStatic {
	new(): qx_ui_root_Abstract;
}
interface qx_ui_root_Abstract extends qx_ui_core_Widget {
	__preventScrollWhenFocused(e: qx_event_type_KeySequence): void;
	_applyNativeContextMenu(value: bool, old: bool): void;
	_applyNativeHelp(value: bool, old: bool): void;
	_onNativeContextMenu(e: qx_event_type_Mouse): void;
	getGlobalCursor(): any;
	getLayout(): qx_ui_layout_Abstract;
	getNativeHelp(): any;
	initGlobalCursor(value: any): any;
	initNativeHelp(value: any): any;
	isNativeHelp(): bool;
	isRootWidget(): void;
	resetGlobalCursor(): void;
	resetNativeHelp(): void;
	setGlobalCursor(value: any): any;
	setNativeHelp(value: any): any;
	toggleNativeHelp(): bool;
}
interface qx_ui_root_ApplicationStatic {
	new(doc: qx_bom_Document): qx_ui_root_Application;
}
interface qx_ui_root_Application extends qx_ui_root_Abstract {
	_applyDecorator(value: qx_html_Decorator, old: qx_html_Decorator): void;
	_applyPadding(value: number, old: number): void;
	_computeSizeHint(): void;
	_createContainerElement(): void;
	_onResize(e: qx_event_type_Event): void;
}
interface qx_ui_root_InlineStatic {
	new(el: Element, dynamicX: bool, dynamicY: bool): qx_ui_root_Inline;
}
interface qx_ui_root_Inline extends qx_ui_root_Abstract {
	__initDynamicMode(): void;
	_computeSizeHint(): void;
	_createContainerElement(): void;
	_onResize(e: qx_event_type_Event): void;
	_onWindowResize(): void;
}
interface qx_ui_root_PageStatic {
	new(doc: qx_bom_Document): qx_ui_root_Page;
}
interface qx_ui_root_Page extends qx_ui_root_Abstract {
	__onResize(e: qx_event_type_Data): void;
	_applyDecorator(value: qx_html_Decorator, old: qx_html_Decorator): void;
	_applyPadding(value: number, old: number): void;
	_computeSizeHint(): void;
	_createContainerElement(): void;
	_createContentElement(): void;
	supportsMaximize(): bool;
}
interface qx_ui_splitpane_BlockerStatic {
	new(orientation: string): qx_ui_splitpane_Blocker;
}
interface qx_ui_splitpane_Blocker extends qx_html_Element {
	_applyOrientation(value: any, old: any): void;
	getOrientation(): any;
	initOrientation(value: any): any;
	resetOrientation(): void;
	setHeight(offset: number, spliterSize: number): void;
	setLeft(offset: number, splitterLeft: number): void;
	setOrientation(value: any): any;
	setTop(offset: number, splitterTop: number): void;
	setWidth(offset: number, spliterSize: number): void;
}
interface qx_ui_splitpane_HLayoutStatic {
}
interface qx_ui_splitpane_HLayout extends qx_ui_layout_Abstract {
	_computeSizeHint(): void;
	renderLayout(availWidth: any, availHeight: any): void;
}
interface qx_ui_splitpane_PaneStatic {
	new(orientation: string): qx_ui_splitpane_Pane;
}
interface qx_ui_splitpane_Pane extends qx_ui_core_Widget {
	__computeSizes(): void;
	__createBlocker(orientation: string): void;
	__onSplitterMove(e: qx_event_type_Data): void;
	__setBlockerPosition(bounds: any): void;
	_applyOffset(value: number, old: number): void;
	_applyOrientation(value: string, old: string): void;
	_createChildControlImpl(id: any, hash: any): void;
	_finalizeSizes(): void;
	_isActiveDragSession(): bool;
	_onMouseDown(e: qx_event_type_Mouse): void;
	_onMouseMove(e: qx_event_type_Mouse): void;
	_onMouseOut(e: qx_event_type_Mouse): void;
	_onMouseUp(e: qx_event_type_Mouse): void;
	_setLastMousePosition(x: number, y: number): void;
	add(widget: qx_ui_core_Widget, flex: number): void;
	getBlocker(): qx_ui_splitpane_Blocker;
	getChildren(): qx_ui_core_Widget;
	getOffset(): any;
	getOrientation(): any;
	initOffset(value: any): any;
	initOrientation(value: any): any;
	remove(widget: qx_ui_core_Widget): void;
	resetOffset(): void;
	resetOrientation(): void;
	setOffset(value: any): any;
	setOrientation(value: any): any;
}
interface qx_ui_splitpane_SliderStatic {
}
interface qx_ui_splitpane_Slider extends qx_ui_core_Widget {
}
interface qx_ui_splitpane_SplitterStatic {
	new(parentWidget: qx_ui_splitpane_Pane): qx_ui_splitpane_Splitter;
}
interface qx_ui_splitpane_Splitter extends qx_ui_core_Widget {
	_createChildControlImpl(id: any, hash: any): void;
}
interface qx_ui_splitpane_VLayoutStatic {
}
interface qx_ui_splitpane_VLayout extends qx_ui_layout_Abstract {
	_computeSizeHint(): void;
	renderLayout(availWidth: any, availHeight: any): void;
}
interface qx_ui_table_celleditor_AbstractFieldStatic {
}
interface qx_ui_table_celleditor_AbstractField extends qx_core_Object {
	_createEditor(): qx_ui_core_Widget;
	createCellEditor(cellInfo: any): void;
	getCellEditorValue(cellEditor: any): void;
	getValidationFunction(): any;
	initValidationFunction(value: any): any;
	resetValidationFunction(): void;
	setValidationFunction(value: any): any;
}
interface qx_ui_table_celleditor_CheckBoxStatic {
}
interface qx_ui_table_celleditor_CheckBox extends qx_core_Object {
	createCellEditor(cellInfo: any): void;
	getCellEditorValue(cellEditor: any): void;
}
interface qx_ui_table_celleditor_ComboBoxStatic {
}
interface qx_ui_table_celleditor_ComboBox extends qx_core_Object {
	createCellEditor(cellInfo: any): void;
	getCellEditorValue(cellEditor: any): void;
	getListData(): any;
	getValidationFunction(): any;
	initListData(value: any): any;
	initValidationFunction(value: any): any;
	resetListData(): void;
	resetValidationFunction(): void;
	setListData(value: any): any;
	setValidationFunction(value: any): any;
}
interface qx_ui_table_celleditor_DynamicStatic {
	new(cellEditorFactoryFunction: qx_lang_Function): qx_ui_table_celleditor_Dynamic;
}
interface qx_ui_table_celleditor_Dynamic extends qx_core_Object {
	createCellEditor(cellInfo: any): qx_ui_core_Widget;
	getCellEditorFactoryFunction(): any;
	getCellEditorValue(cellEditor: any): void;
	initCellEditorFactoryFunction(value: any): any;
	resetCellEditorFactoryFunction(): void;
	setCellEditorFactoryFunction(value: any): any;
}
interface qx_ui_table_celleditor_PasswordFieldStatic {
}
interface qx_ui_table_celleditor_PasswordField extends qx_ui_table_celleditor_AbstractField {
	_createEditor(): void;
}
interface qx_ui_table_celleditor_SelectBoxStatic {
}
interface qx_ui_table_celleditor_SelectBox extends qx_core_Object {
	createCellEditor(cellInfo: any): void;
	getCellEditorValue(cellEditor: any): void;
	getListData(): any;
	getValidationFunction(): any;
	initListData(value: any): any;
	initValidationFunction(value: any): any;
	resetListData(): void;
	resetValidationFunction(): void;
	setListData(value: any): any;
	setValidationFunction(value: any): any;
}
interface qx_ui_table_celleditor_TextFieldStatic {
}
interface qx_ui_table_celleditor_TextField extends qx_ui_table_celleditor_AbstractField {
	_createEditor(): void;
	getCellEditorValue(cellEditor: any): void;
}
interface qx_ui_table_cellrenderer_AbstractStatic {
	new(): qx_ui_table_cellrenderer_Abstract;
}
interface qx_ui_table_cellrenderer_Abstract extends qx_core_Object {
	_getCellAttributes(cellInfo: any): string;
	_getCellClass(cellInfo: any): string;
	_getCellSizeStyle(width: number, height: number, insetX: number, insetY: number): string;
	_getCellStyle(cellInfo: any): any;
	_getContentHtml(cellInfo: any): string;
	createDataCellHtml(cellInfo: any, htmlArr: any): void;
	getDefaultCellStyle(): any;
	initDefaultCellStyle(value: any): any;
	resetDefaultCellStyle(): void;
	setDefaultCellStyle(value: any): any;
}
interface qx_ui_table_cellrenderer_AbstractImageStatic {
	new(): qx_ui_table_cellrenderer_AbstractImage;
}
interface qx_ui_table_cellrenderer_AbstractImage extends qx_ui_table_cellrenderer_Abstract {
	__getImageSize(source: string): any;
	_getCellAttributes(cellInfo: any): void;
	_getCellClass(cellInfo: any): void;
	_getContentHtml(cellInfo: any): void;
	_getImageInfos(cellInfo: any): any;
	_identifyImage(cellInfo: any): any;
	createDataCellHtml(cellInfo: any, htmlArr: any): void;
	getRepeat(): any;
	initRepeat(value: any): any;
	resetRepeat(): void;
	setRepeat(value: any): any;
}
interface qx_ui_table_cellrenderer_BooleanStatic {
	new(): qx_ui_table_cellrenderer_Boolean;
}
interface qx_ui_table_cellrenderer_Boolean extends qx_ui_table_cellrenderer_AbstractImage {
	_applyIconFalse(value: string, old: string): void;
	_applyIconTrue(value: string, old: string): void;
	_getCellStyle(cellInfo: any): void;
	_identifyImage(cellInfo: any): void;
	getIconFalse(): any;
	getIconTrue(): any;
	initIconFalse(value: any): any;
	initIconTrue(value: any): any;
	resetIconFalse(): void;
	resetIconTrue(): void;
	setIconFalse(value: any): any;
	setIconTrue(value: any): any;
}
interface qx_ui_table_cellrenderer_ConditionalStatic {
	new(align: string, color: string, style: string, weight: string): qx_ui_table_cellrenderer_Conditional;
}
interface qx_ui_table_cellrenderer_Conditional extends qx_ui_table_cellrenderer_Default {
	__applyFormatting(condition: any[], style: any): void;
	_getCellStyle(cellInfo: any): any;
	addBetweenCondition(condition: string, value1: number, value2: number, align: string, color: string, style: string, weight: string, target: string): void;
	addNumericCondition(condition: string, value1: number, align: string, color: string, style: string, weight: string, target: string): void;
	addRegex(regex: string, align: string, color: string, style: string, weight: string, target: string): void;
}
interface qx_ui_table_cellrenderer_DateStatic {
}
interface qx_ui_table_cellrenderer_Date extends qx_ui_table_cellrenderer_Conditional {
	_getCellClass(cellInfo: any): void;
	_getContentHtml(cellInfo: any): void;
	getDateFormat(): any;
	initDateFormat(value: any): any;
	resetDateFormat(): void;
	setDateFormat(value: any): any;
}
interface qx_ui_table_cellrenderer_DebugStatic {
}
interface qx_ui_table_cellrenderer_Debug extends qx_ui_table_cellrenderer_Abstract {
	_getContentHtml(cellInfo: any): void;
}
interface qx_ui_table_cellrenderer_DefaultStatic {
}
interface qx_ui_table_cellrenderer_Default extends qx_ui_table_cellrenderer_Abstract {
	_formatValue(cellInfo: any): string;
	_getCellClass(cellInfo: any): void;
	_getContentHtml(cellInfo: any): void;
	_getStyleFlags(cellInfo: any): number;
	getUseAutoAlign(): any;
	initUseAutoAlign(value: any): any;
	isUseAutoAlign(): bool;
	resetUseAutoAlign(): void;
	setUseAutoAlign(value: any): any;
	toggleUseAutoAlign(): bool;
}
interface qx_ui_table_cellrenderer_DynamicStatic {
	new(cellRendererFactoryFunction: qx_lang_Function): qx_ui_table_cellrenderer_Dynamic;
}
interface qx_ui_table_cellrenderer_Dynamic extends qx_ui_table_cellrenderer_Default {
	createDataCellHtml(cellInfo: any, htmlArr: string): void;
	getCellRendererFactoryFunction(): any;
	initCellRendererFactoryFunction(value: any): any;
	resetCellRendererFactoryFunction(): void;
	setCellRendererFactoryFunction(value: any): any;
}
interface qx_ui_table_cellrenderer_HtmlStatic {
}
interface qx_ui_table_cellrenderer_Html extends qx_ui_table_cellrenderer_Conditional {
	_getCellClass(cellInfo: any): void;
	_getContentHtml(cellInfo: any): void;
}
interface qx_ui_table_cellrenderer_ImageStatic {
	new(width: number, height: number): qx_ui_table_cellrenderer_Image;
}
interface qx_ui_table_cellrenderer_Image extends qx_ui_table_cellrenderer_AbstractImage {
	_identifyImage(cellInfo: any): void;
}
interface qx_ui_table_cellrenderer_NumberStatic {
}
interface qx_ui_table_cellrenderer_Number extends qx_ui_table_cellrenderer_Conditional {
	_getCellClass(cellInfo: any): void;
	_getContentHtml(cellInfo: any): void;
	getNumberFormat(): any;
	initNumberFormat(value: any): any;
	resetNumberFormat(): void;
	setNumberFormat(value: any): any;
}
interface qx_ui_table_cellrenderer_PasswordStatic {
}
interface qx_ui_table_cellrenderer_Password extends qx_ui_table_cellrenderer_Default {
	_getContentHtml(cellInfo: any): string;
}
interface qx_ui_table_cellrenderer_ReplaceStatic {
}
interface qx_ui_table_cellrenderer_Replace extends qx_ui_table_cellrenderer_Default {
	_getContentHtml(cellInfo: any): void;
	addReversedReplaceMap(): void;
	getReplaceFunction(): any;
	getReplaceMap(): any;
	initReplaceFunction(value: any): any;
	initReplaceMap(value: any): any;
	resetReplaceFunction(): void;
	resetReplaceMap(): void;
	setReplaceFunction(value: any): any;
	setReplaceMap(value: any): any;
}
interface qx_ui_table_cellrenderer_StringStatic {
}
interface qx_ui_table_cellrenderer_String extends qx_ui_table_cellrenderer_Conditional {
	_getCellClass(cellInfo: any): void;
	_getContentHtml(cellInfo: any): void;
}
interface qx_ui_table_columnmenu_ButtonStatic {
	new(): qx_ui_table_columnmenu_Button;
}
interface qx_ui_table_columnmenu_Button extends qx_ui_form_MenuButton {
	empty(): void;
	factory(item: any, options: any): void;
	getBlocker(): qx_ui_core_Blocker;
}
interface qx_ui_table_columnmenu_MenuItemStatic {
	new(text: string): qx_ui_table_columnmenu_MenuItem;
}
interface qx_ui_table_columnmenu_MenuItem extends qx_ui_menu_CheckBox {
	_applyVisible(value: bool, old: bool): void;
	getVisible(): any;
	initVisible(value: any): any;
	isVisible(): bool;
	resetVisible(): void;
	setVisible(value: any): any;
	toggleVisible(): bool;
}
interface qx_ui_table_columnmodel_BasicStatic {
	new(): qx_ui_table_columnmodel_Basic;
}
interface qx_ui_table_columnmodel_Basic extends qx_core_Object {
	_getColToXPosMap(): any;
	getCellEditorFactory(col: number): qx_ui_table_ICellEditorFactory;
	getColumnWidth(col: number): number;
	getDataCellRenderer(col: number): qx_ui_table_ICellRenderer;
	getHeaderCellRenderer(col: number): qx_ui_table_IHeaderRenderer;
	getOverallColumnAtX(overXPos: number): number;
	getOverallColumnCount(): number;
	getOverallX(col: number): number;
	getVisibleColumnAtX(visXPos: number): number;
	getVisibleColumnCount(): number;
	getVisibleColumns(): any[];
	getVisibleX(col: number): number;
	init(colCount: number, table: qx_ui_table_Table): void;
	isColumnVisible(col: number): bool;
	moveColumn(fromOverXPos: number, toOverXPos: number): void;
	setCellEditorFactory(col: number, factory: qx_ui_table_ICellEditorFactory): void;
	setColumnsOrder(newPositions: number): void;
	setColumnVisible(col: number, visible: bool): void;
	setColumnWidth(col: number, width: number, isMouseAction: bool): void;
	setDataCellRenderer(col: number, renderer: qx_ui_table_ICellRenderer): qx_ui_table_ICellRenderer;
	setHeaderCellRenderer(col: number, renderer: qx_ui_table_IHeaderRenderer): void;
}
interface qx_ui_table_columnmodel_ResizeStatic {
	new(): qx_ui_table_columnmodel_Resize;
}
interface qx_ui_table_columnmodel_Resize extends qx_ui_table_columnmodel_Basic {
	_addResetColumnWidthButton(event: qx_event_type_Data): void;
	_applyBehavior(value: qx_ui_table_columnmodel_resizebehavior_Abstract, old: qx_ui_table_columnmodel_resizebehavior_Abstract): void;
	_onappear(event: qx_event_type_Event): void;
	_oncolumnwidthchanged(event: qx_event_type_Data): void;
	_onTableWidthChanged(event: qx_event_type_Event): void;
	_onverticalscrollbarchanged(event: qx_event_type_Data): void;
	_onvisibilitychanged(event: qx_event_type_Data): void;
	getBehavior(): any;
	getTable(): qx_ui_table_Table;
	init(numColumns: number, table: qx_ui_table_Table): void;
	initBehavior(value: any): any;
	resetBehavior(): void;
	setBehavior(value: any): any;
}
interface qx_ui_table_columnmodel_resizebehavior_AbstractStatic {
}
interface qx_ui_table_columnmodel_resizebehavior_Abstract extends qx_core_Object {
	_getAvailableWidth(): number;
	_setNumColumns(numColumns: number): void;
	onAppear(event: any, forceRefresh: bool): void;
	onColumnWidthChanged(event: any): void;
	onTableWidthChanged(event: any): void;
	onVerticalScrollBarChanged(event: any): void;
	onVisibilityChanged(event: any): void;
}
interface qx_ui_table_columnmodel_resizebehavior_DefaultStatic {
	new(): qx_ui_table_columnmodel_resizebehavior_Default;
}
interface qx_ui_table_columnmodel_resizebehavior_Default extends qx_ui_table_columnmodel_resizebehavior_Abstract {
	__clearLayoutCaches(): void;
	_computeColumnsFlexWidth(): void;
	_extendLastColumn(event: qx_event_type_Data): void;
	_extendNextColumn(event: qx_event_type_Data): void;
	_getResizeColumnData(): qx_ui_core_ColumnData;
	_setNumColumns(numColumns: any): void;
	getInitializeWidthsOnEveryAppear(): any;
	getLayoutChildren(): qx_ui_core_ColumnData;
	getNewResizeBehaviorColumnData(): any;
	getTableColumnModel(): any;
	initInitializeWidthsOnEveryAppear(value: any): any;
	initNewResizeBehaviorColumnData(value: any): any;
	initTableColumnModel(value: any): any;
	isInitializeWidthsOnEveryAppear(): bool;
	onAppear(event: any, forceRefresh: any): void;
	onColumnWidthChanged(event: any): void;
	onTableWidthChanged(event: any): void;
	onVerticalScrollBarChanged(event: any): void;
	onVisibilityChanged(event: any): void;
	resetInitializeWidthsOnEveryAppear(): void;
	resetNewResizeBehaviorColumnData(): void;
	resetTableColumnModel(): void;
	set(col: number, map: any): void;
	setInitializeWidthsOnEveryAppear(value: any): any;
	setMaxWidth(col: number, width: number): void;
	setMinWidth(col: number, width: number): void;
	setNewResizeBehaviorColumnData(value: any): any;
	setTableColumnModel(value: any): any;
	setWidth(col: number, width: any, flex: number): void;
	toggleInitializeWidthsOnEveryAppear(): bool;
}
interface qx_ui_table_headerrenderer_DefaultStatic {
}
interface qx_ui_table_headerrenderer_Default extends qx_core_Object {
	createHeaderCell(cellInfo: any): void;
	getToolTip(): any;
	initToolTip(value: any): any;
	resetToolTip(): void;
	setToolTip(value: any): any;
	updateHeaderCell(cellInfo: any, cellWidget: any): void;
}
interface qx_ui_table_headerrenderer_HeaderCellStatic {
	new(): qx_ui_table_headerrenderer_HeaderCell;
}
interface qx_ui_table_headerrenderer_HeaderCell extends qx_ui_container_Composite {
	_applyIcon(value: string, old: string): void;
	_applyLabel(value: string, old: string): void;
	_applySortIcon(value: string, old: string): void;
	_createChildControlImpl(id: any, hash: any): void;
	getIcon(): any;
	getLabel(): any;
	getSortIcon(): any;
	initIcon(value: any): any;
	initLabel(value: any): any;
	initSortIcon(value: any): any;
	resetIcon(): void;
	resetLabel(): void;
	resetSortIcon(): void;
	setIcon(value: any): any;
	setLabel(value: any): any;
	setSortIcon(value: any): any;
}
interface qx_ui_table_headerrenderer_IconStatic {
	new(iconUrl: string, tooltip: string): qx_ui_table_headerrenderer_Icon;
}
interface qx_ui_table_headerrenderer_Icon extends qx_ui_table_headerrenderer_Default {
	getIconUrl(): any;
	initIconUrl(value: any): any;
	resetIconUrl(): void;
	setIconUrl(value: any): any;
	updateHeaderCell(cellInfo: any, cellWidget: any): void;
}
interface qx_ui_table_ICellEditorFactoryStatic {
}
interface qx_ui_table_ICellEditorFactory {
	createCellEditor(cellInfo: any): qx_ui_core_Widget;
	getCellEditorValue(cellEditor: qx_ui_core_Widget): any;
}
interface qx_ui_table_ICellRendererStatic {
}
interface qx_ui_table_ICellRenderer {
	createDataCellHtml(cellInfo: any, htmlArr: string): bool;
}
interface qx_ui_table_IColumnMenuButtonStatic {
}
interface qx_ui_table_IColumnMenuButton {
	empty(): void;
	factory(item: string, options: any): qx_ui_core_Widget;
	getMenu(): any;
	initMenu(value: any): any;
	resetMenu(): void;
	setMenu(value: any): any;
}
interface qx_ui_table_IColumnMenuItemStatic {
}
interface qx_ui_table_IColumnMenuItem {
	getVisible(): any;
	initVisible(value: any): any;
	resetVisible(): void;
	setVisible(value: any): any;
}
interface qx_ui_table_IHeaderRendererStatic {
}
interface qx_ui_table_IHeaderRenderer {
	createHeaderCell(cellInfo: any): qx_ui_core_Widget;
	updateHeaderCell(cellInfo: any, cellWidget: qx_ui_core_Widget): void;
}
interface qx_ui_table_IRowRendererStatic {
}
interface qx_ui_table_IRowRenderer {
	createRowStyle(rowInfo: any): void;
	getRowClass(rowInfo: any): void;
	getRowHeightStyle(height: number): void;
	updateDataRowElement(rowInfo: any, rowElement: Element): void;
}
interface qx_ui_table_ITableModelStatic {
}
interface qx_ui_table_ITableModel {
	getColumnCount(): number;
	getColumnId(columnIndex: number): string;
	getColumnIndexById(columnId: string): number;
	getColumnName(columnIndex: number): string;
	getRowCount(): number;
	getRowData(rowIndex: number): any;
	getSortColumnIndex(): number;
	getValue(columnIndex: number, rowIndex: number): any;
	getValueById(columnId: string, rowIndex: number): any;
	isColumnEditable(columnIndex: number): bool;
	isColumnSortable(columnIndex: number): bool;
	isSortAscending(): bool;
	prefetchRows(firstRowIndex: number, lastRowIndex: number): void;
	setValue(columnIndex: number, rowIndex: number, value: any): void;
	setValueById(columnId: string, rowIndex: number, value: any): void;
	sortByColumn(columnIndex: number, ascending: bool): void;
}
interface qx_ui_table_model_AbstractStatic {
	new(): qx_ui_table_model_Abstract;
}
interface qx_ui_table_model_Abstract extends qx_core_Object {
	getColumnCount(): void;
	getColumnId(columnIndex: any): void;
	getColumnIndexById(columnId: any): void;
	getColumnName(columnIndex: any): void;
	getRowCount(): void;
	getRowData(rowIndex: any): void;
	getSortColumnIndex(): void;
	getValue(columnIndex: number, rowIndex: number): void;
	getValueById(columnId: any, rowIndex: any): void;
	init(table: qx_ui_table_Table): void;
	isColumnEditable(columnIndex: any): void;
	isColumnSortable(columnIndex: any): void;
	isSortAscending(): void;
	prefetchRows(firstRowIndex: any, lastRowIndex: any): void;
	setColumnIds(columnIdArr: string): void;
	setColumnNamesById(columnNameMap: any): void;
	setColumnNamesByIndex(columnNameArr: string): void;
	setColumns(columnNameArr: string, columnIdArr: string): void;
	setValue(columnIndex: number, rowIndex: number, value: any): void;
	setValueById(columnId: any, rowIndex: any, value: any): void;
	sortByColumn(columnIndex: any, ascending: any): void;
}
interface qx_ui_table_model_FilteredStatic {
	new(): qx_ui_table_model_Filtered;
}
interface qx_ui_table_model_Filtered extends qx_ui_table_model_Simple {
	_js_in_array(the_needle: string, the_haystack: any[]): bool;
	addBetweenFilter(filter: string, value1: number, value2: number, target: string): void;
	addNotRegex(regex: string, target: string, ignorecase: bool): void;
	addNumericFilter(filter: string, value1: number, target: string): void;
	addRegex(regex: string, target: string, ignorecase: bool): void;
	applyFilters(): void;
	hideRows(rowNum: number, numOfRows: number, dispatchEvent: bool): void;
	resetHiddenRows(): void;
	setData(rowArr: any, clearSorting: any): void;
}
interface qx_ui_table_model_RemoteStatic {
	new(): qx_ui_table_model_Remote;
}
interface qx_ui_table_model_Remote extends qx_ui_table_model_Abstract {
	_cancelCurrentRequest(): bool;
	_getIgnoreCurrentRequest(): bool;
	_loadRowCount(): void;
	_loadRowData(firstRow: number, lastRow: number): void;
	_onRowCountLoaded(rowCount: number): void;
	_onRowDataLoaded(rowDataArr: any): void;
	_setRowBlockData(block: number, rowDataArr: any): void;
	clearCache(): void;
	getBlockConcurrentLoadRowCount(): any;
	getBlockSize(): any;
	getCacheContent(): any;
	getClearCacheOnRemove(): any;
	getMaxCachedBlockCount(): any;
	getRowCount(): void;
	getRowData(rowIndex: number): any;
	getSortColumnIndex(): void;
	getValue(columnIndex: any, rowIndex: any): void;
	initBlockConcurrentLoadRowCount(value: any): any;
	initBlockSize(value: any): any;
	initClearCacheOnRemove(value: any): any;
	initMaxCachedBlockCount(value: any): any;
	isBlockConcurrentLoadRowCount(): bool;
	isClearCacheOnRemove(): bool;
	isColumnEditable(columnIndex: any): void;
	isColumnSortable(columnIndex: any): void;
	isSortAscending(): void;
	iterateCachedRows(iterator: qx_lang_Function, object: any): void;
	prefetchRows(firstRowIndex: any, lastRowIndex: any): void;
	reloadData(): void;
	removeRow(rowIndex: number): void;
	resetBlockConcurrentLoadRowCount(): void;
	resetBlockSize(): void;
	resetClearCacheOnRemove(): void;
	resetMaxCachedBlockCount(): void;
	restoreCacheContent(cacheContent: any): void;
	setBlockConcurrentLoadRowCount(value: any): any;
	setBlockSize(value: any): any;
	setClearCacheOnRemove(value: any): any;
	setColumnEditable(columnIndex: number, editable: bool): void;
	setColumnSortable(columnIndex: number, sortable: bool): void;
	setEditable(editable: bool): void;
	setMaxCachedBlockCount(value: any): any;
	setSortAscendingWithoutSortingData(sortAscending: bool): void;
	setSortColumnIndexWithoutSortingData(sortColumnIndex: number): void;
	setValue(columnIndex: any, rowIndex: any, value: any): void;
	sortByColumn(columnIndex: any, ascending: any): void;
	toggleBlockConcurrentLoadRowCount(): bool;
	toggleClearCacheOnRemove(): bool;
}
interface qx_ui_table_model_SimpleStatic {
	_defaultSortComparatorAscending(row1: any, row2: any): number;
	_defaultSortComparatorDescending(row1: any, row2: any): number;
	_defaultSortComparatorInsensitiveAscending(row1: any, row2: any): number;
	_defaultSortComparatorInsensitiveDescending(row1: any, row2: any): number;
	new(): qx_ui_table_model_Simple;
}
interface qx_ui_table_model_Simple extends qx_ui_table_model_Abstract {
	_mapArray2RowArr(mapArr: any, rememberMaps: bool): any;
	_setSortAscending(ascending: bool): void;
	_setSortColumnIndex(columnIndex: number): void;
	addRows(rowArr: any, startIndex: number, clearSorting: bool): void;
	addRowsAsMapArray(mapArr: any, startIndex: number, rememberMaps: bool, clearSorting: bool): void;
	clearSorting(): void;
	getCaseSensitiveSorting(): any;
	getData(): any;
	getDataAsMapArray(): void;
	getRowCount(): void;
	getRowData(rowIndex: any): void;
	getRowDataAsMap(rowIndex: number): any;
	getSortColumnIndex(): void;
	getSortMethods(columnIndex: number): any;
	getValue(columnIndex: any, rowIndex: any): void;
	initCaseSensitiveSorting(value: any): any;
	isCaseSensitiveSorting(): bool;
	isColumnEditable(columnIndex: any): void;
	isColumnSortable(columnIndex: any): void;
	isSortAscending(): void;
	removeRows(startIndex: number, howMany: number, clearSorting: bool): void;
	resetCaseSensitiveSorting(): void;
	setCaseSensitiveSorting(value: any): any;
	setColumnEditable(columnIndex: number, editable: bool): void;
	setColumnSortable(columnIndex: number, sortable: bool): void;
	setData(rowArr: any, clearSorting: bool): void;
	setDataAsMapArray(mapArr: any, rememberMaps: bool, clearSorting: bool): void;
	setEditable(editable: bool): void;
	setRows(rowArr: any, startIndex: number, clearSorting: bool): void;
	setRowsAsMapArray(mapArr: any, startIndex: number, rememberMaps: bool, clearSorting: bool): void;
	setSortMethods(columnIndex: number, compare: qx_lang_Function): void;
	setSortMethods(columnIndex: number, compare: any): void;
	setValue(columnIndex: any, rowIndex: any, value: any): void;
	sortByColumn(columnIndex: any, ascending: any): void;
	toggleCaseSensitiveSorting(): bool;
}
interface qx_ui_table_MTableContextMenuStatic {
	new(): qx_ui_table_MTableContextMenu;
}
interface qx_ui_table_MTableContextMenu {
	getContextMenuHandler(col: number): qx_lang_Function;
	setContextMenuHandler(col: number, handler: qx_lang_Function, context: any): void;
}
interface qx_ui_table_pane_CellEventStatic {
}
interface qx_ui_table_pane_CellEvent extends qx_event_type_Mouse {
	clone(embryo: any): void;
	getColumn(): any;
	getRow(): any;
	init(scroller: qx_ui_table_pane_Scroller, me: qx_event_type_Mouse, row: number, column: number): void;
	initColumn(value: any): any;
	initRow(value: any): any;
	resetColumn(): void;
	resetRow(): void;
	setColumn(value: any): any;
	setRow(value: any): any;
}
interface qx_ui_table_pane_ClipperStatic {
	new(): qx_ui_table_pane_Clipper;
}
interface qx_ui_table_pane_Clipper extends qx_ui_container_Composite {
	scrollToX(value: number): void;
	scrollToY(value: number): void;
}
interface qx_ui_table_pane_FocusIndicatorStatic {
	new(scroller: qx_ui_table_pane_Scroller): qx_ui_table_pane_FocusIndicator;
}
interface qx_ui_table_pane_FocusIndicator extends qx_ui_container_Composite {
	_onKeyPress(e: qx_event_type_KeySequence): void;
	getColumn(): any;
	getRow(): any;
	initColumn(value: any): any;
	initRow(value: any): any;
	moveToCell(col: number, row: number): void;
	resetColumn(): void;
	resetRow(): void;
	setColumn(value: any): any;
	setRow(value: any): any;
}
interface qx_ui_table_pane_HeaderStatic {
	new(paneScroller: qx_ui_table_pane_Scroller): qx_ui_table_pane_Header;
}
interface qx_ui_table_pane_Header extends qx_ui_core_Widget {
	_cleanUpCells(): void;
	_updateContent(completeUpdate: bool): void;
	getBlocker(): qx_ui_core_Blocker;
	getHeaderWidgetAtColumn(col: number): qx_ui_table_headerrenderer_HeaderCell;
	getPaneScroller(): qx_ui_table_pane_Scroller;
	getTable(): qx_ui_table_Table;
	hideColumnMoveFeedback(): void;
	isShowingColumnMoveFeedback(): bool;
	onColOrderChanged(): void;
	onPaneModelChanged(): void;
	onTableModelMetaDataChanged(): void;
	setColumnWidth(col: number, width: number, isMouseAction: bool): void;
	setMouseOverColumn(col: number): void;
	showColumnMoveFeedback(col: number, x: number): void;
}
interface qx_ui_table_pane_ModelStatic {
	new(tableColumnModel: qx_ui_table_columnmodel_Basic): qx_ui_table_pane_Model;
}
interface qx_ui_table_pane_Model extends qx_core_Object {
	_applyFirstColumnX(value: number, old: number): void;
	_applyMaxColumnCount(value: number, old: number): void;
	_onColVisibilityChanged(evt: any): void;
	_onHeaderCellRendererChanged(evt: any): void;
	getColumnAtX(xPos: number): number;
	getColumnCount(): number;
	getColumnLeft(col: number): any;
	getFirstColumnX(): any;
	getMaxColumnCount(): any;
	getTotalWidth(): number;
	getX(col: number): number;
	initFirstColumnX(value: any): any;
	initMaxColumnCount(value: any): any;
	resetFirstColumnX(): void;
	resetMaxColumnCount(): void;
	setFirstColumnX(value: any): any;
	setMaxColumnCount(value: any): any;
	setTableColumnModel(tableColumnModel: qx_ui_table_columnmodel_Basic): void;
}
interface qx_ui_table_pane_PaneStatic {
	new(paneScroller: qx_ui_table_pane_Scroller): qx_ui_table_pane_Pane;
}
interface qx_ui_table_pane_Pane extends qx_ui_core_Widget {
	__rowCacheClear(): void;
	__rowCacheGet(row: number, selected: bool, focused: bool): string;
	__rowCacheSet(row: number, rowString: string, selected: bool, focused: bool): void;
	_applyFirstVisibleRow(value: number, old: number): void;
	_applyMaxCacheLines(value: number, old: number): void;
	_applyVisibleRowCount(value: number, old: number): void;
	_getContentHint(): void;
	_getRowsHtml(firstRow: number, rowCount: number): string;
	_scrollContent(rowOffset: number): void;
	_updateAllRows(): void;
	_updateRowStyles(onlyRow: number): void;
	_updateRowStyles(onlyRow: any): void;
	getFirstVisibleRow(): any;
	getMaxCacheLines(): any;
	getPaneScroller(): qx_ui_table_pane_Scroller;
	getTable(): qx_ui_table_Table;
	getVisibleRowCount(): any;
	initFirstVisibleRow(value: any): any;
	initMaxCacheLines(value: any): any;
	initVisibleRowCount(value: any): any;
	onColOrderChanged(): void;
	onFocusChanged(): void;
	onPaneModelChanged(): void;
	onSelectionChanged(): void;
	onTableModelDataChanged(firstRow: number, lastRow: number, firstColumn: number, lastColumn: number): void;
	onTableModelMetaDataChanged(): void;
	resetFirstVisibleRow(): void;
	resetMaxCacheLines(): void;
	resetVisibleRowCount(): void;
	setColumnWidth(col: number, width: number): void;
	setFirstVisibleRow(value: any): any;
	setFocusedCell(col: number, row: number, massUpdate: bool): void;
	setMaxCacheLines(value: any): any;
	setVisibleRowCount(value: any): any;
	updateContent(completeUpdate: bool, scrollOffset: number, onlyRow: number, onlySelectionOrFocusChanged: bool): void;
}
interface qx_ui_table_pane_ScrollerStatic {
	new(table: qx_ui_table_Table): qx_ui_table_pane_Scroller;
}
interface qx_ui_table_pane_Scroller extends qx_ui_core_Widget {
	__handleMoveColumn(pageX: number): void;
	__handleResizeColumn(pageX: number): void;
	_applyHorizontalScrollBarVisible(value: bool, old: bool): void;
	_applyScrollTimeout(value: number, old: number): void;
	_applyShowCellFocusIndicator(value: bool, old: bool): void;
	_applyTablePaneModel(value: qx_ui_table_pane_Model, old: qx_ui_table_pane_Model): void;
	_applyVerticalScrollBarVisible(value: bool, old: bool): void;
	_createChildControlImpl(id: any, hash: any): void;
	_focusCellAtPagePos(pageX: number, pageY: number): void;
	_getColumnForPageX(pageX: number): number;
	_getResizeColumnForPageX(pageX: number): number;
	_getRowForPagePos(pageX: number, pageY: number): number;
	_hideResizeLine(): void;
	_onAppear(): void;
	_onCellEditorModalWindowClose(e: any): void;
	_onChangeCaptureHeader(e: qx_event_type_Data): void;
	_onClickHeader(e: any): void;
	_onClickPane(e: any): void;
	_onContextMenu(e: qx_event_type_Mouse): void;
	_onContextMenuOpen(e: any): void;
	_onDblclickPane(e: any): void;
	_onDisappear(): void;
	_oninterval(): void;
	_onMousedownHeader(e: any): void;
	_onMousedownPane(e: any): void;
	_onMousemoveHeader(e: any): void;
	_onMousemovePane(e: any): void;
	_onMouseout(e: any): void;
	_onMouseupFocusIndicator(e: qx_event_type_Mouse): void;
	_onMouseupHeader(e: any): void;
	_onMouseupPane(e: any): void;
	_onMousewheel(e: any): void;
	_onPaneModelChanged(): void;
	_onResizePane(): void;
	_onScrollX(e: any): void;
	_onScrollY(e: any): void;
	_postponedUpdateContent(): void;
	_showResizeLine(x: number): void;
	_startInterval(timeout: number): void;
	_startMoveHeader(moveCol: number, pageX: number): void;
	_startResizeHeader(resizeCol: number, pageX: number): void;
	_stopInterval(): void;
	_stopMoveHeader(): void;
	_stopResizeHeader(): void;
	_updateContent(): void;
	_updateFocusIndicator(): void;
	cancelEditing(): void;
	flushEditor(): void;
	getContextMenuFromDataCellsOnly(): any;
	getFocusCellOnMouseMove(): any;
	getFocusedColumn(): number;
	getFocusedRow(): number;
	getHeader(): qx_ui_table_pane_Header;
	getHorizontalScrollBarVisible(): any;
	getLiveResize(): any;
	getNeededScrollBars(forceHorizontal: bool, preventVertical: bool): number;
	getPaneClipper(): qx_ui_table_pane_Clipper;
	getPaneInsetRight(): number;
	getResetSelectionOnHeaderClick(): any;
	getScrollTimeout(): any;
	getScrollX(): number;
	getScrollY(): number;
	getSelectBeforeFocus(): any;
	getShowCellFocusIndicator(): any;
	getTable(): qx_ui_table_Table;
	getTablePane(): qx_ui_table_pane_Pane;
	getTablePaneModel(): any;
	getTopRightWidget(): qx_ui_core_Widget;
	getVerticalScrollBarVisible(): any;
	getVerticalScrollBarWidth(): number;
	hideColumnMoveFeedback(): void;
	initContextMenuFromDataCellsOnly(value: any): any;
	initFocusCellOnMouseMove(value: any): any;
	initHorizontalScrollBarVisible(value: any): any;
	initLiveResize(value: any): any;
	initResetSelectionOnHeaderClick(value: any): any;
	initScrollTimeout(value: any): any;
	initSelectBeforeFocus(value: any): any;
	initShowCellFocusIndicator(value: any): any;
	initTablePaneModel(value: any): any;
	initVerticalScrollBarVisible(value: any): any;
	isContextMenuFromDataCellsOnly(): bool;
	isEditing(): any;
	isFocusCellOnMouseMove(): bool;
	isHorizontalScrollBarVisible(): bool;
	isLiveResize(): bool;
	isResetSelectionOnHeaderClick(): bool;
	isSelectBeforeFocus(): bool;
	isShowCellFocusIndicator(): bool;
	isVerticalScrollBarVisible(): bool;
	onColOrderChanged(): void;
	onColVisibilityChanged(): void;
	onFocusChanged(): void;
	onKeepFirstVisibleRowCompleteChanged(): void;
	onSelectionChanged(): void;
	onTableModelDataChanged(firstRow: number, lastRow: number, firstColumn: number, lastColumn: number): void;
	onTableModelMetaDataChanged(): void;
	resetContextMenuFromDataCellsOnly(): void;
	resetFocusCellOnMouseMove(): void;
	resetHorizontalScrollBarVisible(): void;
	resetLiveResize(): void;
	resetResetSelectionOnHeaderClick(): void;
	resetScrollTimeout(): void;
	resetSelectBeforeFocus(): void;
	resetShowCellFocusIndicator(): void;
	resetTablePaneModel(): void;
	resetVerticalScrollBarVisible(): void;
	scrollCellVisible(col: number, row: number): void;
	setColumnWidth(col: number, width: number): void;
	setContextMenuFromDataCellsOnly(value: any): any;
	setFocusCellOnMouseMove(value: any): any;
	setFocusedCell(col: number, row: number): void;
	setHorizontalScrollBarVisible(value: any): any;
	setLiveResize(value: any): any;
	setPaneWidth(width: number): void;
	setResetSelectionOnHeaderClick(value: any): any;
	setScrollTimeout(value: any): any;
	setScrollX(scrollX: number): void;
	setScrollY(scrollY: number, renderSync: bool): void;
	setSelectBeforeFocus(value: any): any;
	setShowCellFocusIndicator(value: any): any;
	setTablePaneModel(value: any): any;
	setTopRightWidget(widget: qx_ui_core_Widget): void;
	setVerticalScrollBarVisible(value: any): any;
	showColumnMoveFeedback(pageX: number): number;
	startEditing(): bool;
	stopEditing(): void;
	toggleContextMenuFromDataCellsOnly(): bool;
	toggleFocusCellOnMouseMove(): bool;
	toggleHorizontalScrollBarVisible(): bool;
	toggleLiveResize(): bool;
	toggleResetSelectionOnHeaderClick(): bool;
	toggleSelectBeforeFocus(): bool;
	toggleShowCellFocusIndicator(): bool;
	toggleVerticalScrollBarVisible(): bool;
	updateHorScrollBarMaximum(): void;
	updateVerScrollBarMaximum(): void;
}
interface qx_ui_table_rowrenderer_DefaultStatic {
	new(): qx_ui_table_rowrenderer_Default;
}
interface qx_ui_table_rowrenderer_Default extends qx_core_Object {
	_renderFont(font: qx_bom_Font): void;
	createRowStyle(rowInfo: any): void;
	getHighlightFocusRow(): any;
	getRowAttributes(rowInfo: any): string;
	getRowClass(rowInfo: any): void;
	getRowHeightStyle(height: number): void;
	initHighlightFocusRow(value: any): any;
	isHighlightFocusRow(): bool;
	resetHighlightFocusRow(): void;
	setHighlightFocusRow(value: any): any;
	toggleHighlightFocusRow(): bool;
	updateDataRowElement(rowInfo: any, rowElem: any): void;
}
interface qx_ui_table_selection_ManagerStatic {
	new(): qx_ui_table_selection_Manager;
}
interface qx_ui_table_selection_Manager extends qx_core_Object {
	_handleSelectEvent(index: number, evt: any): void;
	getSelectionModel(): any;
	handleClick(index: number, evt: any): void;
	handleMouseDown(index: number, evt: any): void;
	handleMouseUp(index: number, evt: any): void;
	handleMoveKeyDown(index: number, evt: any): void;
	handleSelectKeyDown(index: number, evt: any): void;
	initSelectionModel(value: any): any;
	resetSelectionModel(): void;
	setSelectionModel(value: any): any;
}
interface qx_ui_table_selection_ModelStatic {
	new(): qx_ui_table_selection_Model;
}
interface qx_ui_table_selection_Model extends qx_core_Object {
	_addSelectionInterval(fromIndex: number, toIndex: number): void;
	_applySelectionMode(selectionMode: any, old: any): void;
	_dumpRanges(): void;
	_fireChangeSelection(): void;
	_getSelectedRangeArr(): any;
	_resetSelection(): void;
	_setAnchorSelectionIndex(index: number): void;
	_setLeadSelectionIndex(index: number): void;
	addSelectionInterval(fromIndex: number, toIndex: number): void;
	getAnchorSelectionIndex(): number;
	getLeadSelectionIndex(): number;
	getSelectedCount(): number;
	getSelectedRanges(): any;
	getSelectionMode(): any;
	hasBatchMode(): bool;
	initSelectionMode(value: any): any;
	isSelectedIndex(index: number): bool;
	isSelectionEmpty(): bool;
	iterateSelection(iterator: qx_lang_Function, object: any): void;
	removeSelectionInterval(fromIndex: number, toIndex: number): void;
	resetSelection(): void;
	resetSelectionMode(): void;
	setBatchMode(batchMode: bool): bool;
	setSelectionInterval(fromIndex: number, toIndex: number): void;
	setSelectionMode(value: any): any;
}
interface qx_ui_table_TableStatic {
	new(tableModel: qx_ui_table_ITableModel, custom: any): qx_ui_table_Table;
}
interface qx_ui_table_Table extends qx_ui_core_Widget {
	_applyAdditionalStatusBarText(value: any, old: any): void;
	_applyColumnVisibilityButtonVisible(value: bool, old: bool): void;
	_applyContextMenuFromDataCellsOnly(value: bool, old: bool): void;
	_applyFocusCellOnMouseMove(value: bool, old: bool): void;
	_applyHeaderCellHeight(value: number, old: number): void;
	_applyHeaderCellsVisible(value: bool, old: bool): void;
	_applyKeepFirstVisibleRowComplete(value: bool, old: bool): void;
	_applyMetaColumnCounts(value: any, old: any): void;
	_applyResetSelectionOnHeaderClick(value: bool, old: bool): void;
	_applyRowHeight(value: number, old: number): void;
	_applySelectionModel(value: qx_ui_table_selection_Model, old: qx_ui_table_selection_Model): void;
	_applyShowCellFocusIndicator(value: bool, old: bool): void;
	_applyStatusBarVisible(value: bool, old: bool): void;
	_applyTableModel(value: qx_ui_table_ITableModel, old: qx_ui_table_ITableModel): void;
	_cleanUpMetaColumns(fromMetaColumn: number): void;
	_createChildControlImpl(id: any, hash: any): void;
	_createColumnVisibilityCheckBoxHandler(col: number): qx_lang_Function;
	_getMetaColumnAtColumnX(visXPos: number): number;
	_getMetaColumnAtPageX(pageX: number): number;
	_getPaneScrollerArr(): qx_ui_table_pane_Scroller;
	_initColumnMenu(): void;
	_onChangeLocale(evt: qx_bom_client_Event): void;
	_onColOrderChanged(evt: any): void;
	_onColVisibilityChanged(evt: any): void;
	_onColWidthChanged(evt: any): void;
	_onFocusChanged(evt: any): void;
	_onKeyPress(evt: qx_event_type_KeySequence): void;
	_onResize(): void;
	_onScrollY(evt: any): void;
	_onSelectionChanged(evt: any): void;
	_onTableModelDataChanged(evt: any): void;
	_onTableModelMetaDataChanged(evt: any): void;
	_updateScrollBarVisibility(): void;
	_updateScrollerWidths(): void;
	_updateStatusBar(): void;
	_updateTableData(firstRow: number, lastRow: number, firstColumn: number, lastColumn: number, removeStart: number, removeCount: number): void;
	addListener(type: any, listener: any, self: any, capture: any): void;
	blockHeaderElements(): void;
	cancelEditing(): void;
	clearFocusedRowHighlight(evt: qx_event_type_Mouse): void;
	destroy(): void;
	getAdditionalStatusBarText(): any;
	getAlwaysUpdateCells(): any;
	getColumnVisibilityButtonVisible(): any;
	getContextMenuFromDataCellsOnly(): any;
	getDataRowRenderer(): any;
	getEmptyTableModel(): qx_ui_table_ITableModel;
	getFocusCellOnMouseMove(): any;
	getFocusedColumn(): number;
	getFocusedRow(): number;
	getForceLineHeight(): any;
	getHeaderCellHeight(): any;
	getHeaderCellsVisible(): any;
	getInitiallyHiddenColumns(): any;
	getKeepFirstVisibleRowComplete(): any;
	getMetaColumnCounts(): any;
	getModalCellEditorPreOpenFunction(): any;
	getNewColumnMenu(): any;
	getNewSelectionManager(): any;
	getNewSelectionModel(): any;
	getNewTableColumnModel(): any;
	getNewTablePane(): any;
	getNewTablePaneHeader(): any;
	getNewTablePaneModel(): any;
	getNewTablePaneScroller(): any;
	getPaneScroller(metaColumn: number): qx_ui_table_pane_Scroller;
	getResetSelectionOnHeaderClick(): any;
	getRowFocusChangeModifiesSelection(): any;
	getRowHeight(): any;
	getSelectionManager(): qx_ui_table_selection_Manager;
	getSelectionModel(): any;
	getShowCellFocusIndicator(): any;
	getStatusBarVisible(): any;
	getTableColumnModel(): qx_ui_table_columnmodel_Basic;
	getTableModel(): any;
	getTablePaneScrollerAtPageX(pageX: number): qx_ui_table_pane_Scroller;
	highlightFocusedRow(bHighlight: bool): void;
	initAdditionalStatusBarText(value: any): any;
	initAlwaysUpdateCells(value: any): any;
	initColumnVisibilityButtonVisible(value: any): any;
	initContextMenuFromDataCellsOnly(value: any): any;
	initDataRowRenderer(value: any): any;
	initFocusCellOnMouseMove(value: any): any;
	initForceLineHeight(value: any): any;
	initHeaderCellHeight(value: any): any;
	initHeaderCellsVisible(value: any): any;
	initInitiallyHiddenColumns(value: any): any;
	initKeepFirstVisibleRowComplete(value: any): any;
	initMetaColumnCounts(value: any): any;
	initModalCellEditorPreOpenFunction(value: any): any;
	initNewColumnMenu(value: any): any;
	initNewSelectionManager(value: any): any;
	initNewSelectionModel(value: any): any;
	initNewTableColumnModel(value: any): any;
	initNewTablePane(value: any): any;
	initNewTablePaneHeader(value: any): any;
	initNewTablePaneModel(value: any): any;
	initNewTablePaneScroller(value: any): any;
	initResetSelectionOnHeaderClick(value: any): any;
	initRowFocusChangeModifiesSelection(value: any): any;
	initRowHeight(value: any): any;
	initSelectionModel(value: any): any;
	initShowCellFocusIndicator(value: any): any;
	initStatusBarVisible(value: any): any;
	initTableModel(value: any): any;
	isAlwaysUpdateCells(): bool;
	isColumnVisibilityButtonVisible(): bool;
	isContextMenuFromDataCellsOnly(): bool;
	isEditing(): any;
	isFocusCellOnMouseMove(): bool;
	isForceLineHeight(): bool;
	isHeaderCellsVisible(): bool;
	isKeepFirstVisibleRowComplete(): bool;
	isResetSelectionOnHeaderClick(): bool;
	isRowFocusChangeModifiesSelection(): bool;
	isShowCellFocusIndicator(): bool;
	isStatusBarVisible(): bool;
	moveFocusedCell(deltaX: number, deltaY: number): void;
	removeListener(type: any, listener: any, self: any, capture: any): void;
	removeListenerById(id: any): void;
	resetAdditionalStatusBarText(): void;
	resetAlwaysUpdateCells(): void;
	resetCellFocus(): void;
	resetColumnVisibilityButtonVisible(): void;
	resetContextMenuFromDataCellsOnly(): void;
	resetDataRowRenderer(): void;
	resetFocusCellOnMouseMove(): void;
	resetForceLineHeight(): void;
	resetHeaderCellHeight(): void;
	resetHeaderCellsVisible(): void;
	resetInitiallyHiddenColumns(): void;
	resetKeepFirstVisibleRowComplete(): void;
	resetMetaColumnCounts(): void;
	resetModalCellEditorPreOpenFunction(): void;
	resetNewColumnMenu(): void;
	resetNewSelectionManager(): void;
	resetNewSelectionModel(): void;
	resetNewTableColumnModel(): void;
	resetNewTablePane(): void;
	resetNewTablePaneHeader(): void;
	resetNewTablePaneModel(): void;
	resetNewTablePaneScroller(): void;
	resetResetSelectionOnHeaderClick(): void;
	resetRowFocusChangeModifiesSelection(): void;
	resetRowHeight(): void;
	resetSelection(): void;
	resetSelectionModel(): void;
	resetShowCellFocusIndicator(): void;
	resetStatusBarVisible(): void;
	resetTableModel(): void;
	scrollCellVisible(col: number, row: number): void;
	setAdditionalStatusBarText(value: any): any;
	setAlwaysUpdateCells(value: any): any;
	setColumnVisibilityButtonVisible(value: any): any;
	setColumnWidth(col: number, width: number): void;
	setContextMenuFromDataCellsOnly(value: any): any;
	setDataRowRenderer(value: any): any;
	setFocusCellOnMouseMove(value: any): any;
	setFocusedCell(col: number, row: number, scrollVisible: bool): void;
	setForceLineHeight(value: any): any;
	setHeaderCellHeight(value: any): any;
	setHeaderCellsVisible(value: any): any;
	setInitiallyHiddenColumns(value: any): any;
	setKeepFirstVisibleRowComplete(value: any): any;
	setMetaColumnCounts(value: any): any;
	setModalCellEditorPreOpenFunction(value: any): any;
	setNewColumnMenu(value: any): any;
	setNewSelectionManager(value: any): any;
	setNewSelectionModel(value: any): any;
	setNewTableColumnModel(value: any): any;
	setNewTablePane(value: any): any;
	setNewTablePaneHeader(value: any): any;
	setNewTablePaneModel(value: any): any;
	setNewTablePaneScroller(value: any): any;
	setResetSelectionOnHeaderClick(value: any): any;
	setRowFocusChangeModifiesSelection(value: any): any;
	setRowHeight(value: any): any;
	setSelectionModel(value: any): any;
	setShowCellFocusIndicator(value: any): any;
	setStatusBarVisible(value: any): any;
	setTableModel(value: any): any;
	startEditing(): bool;
	stopEditing(): void;
	toggleAlwaysUpdateCells(): bool;
	toggleColumnVisibilityButtonVisible(): bool;
	toggleContextMenuFromDataCellsOnly(): bool;
	toggleFocusCellOnMouseMove(): bool;
	toggleForceLineHeight(): bool;
	toggleHeaderCellsVisible(): bool;
	toggleKeepFirstVisibleRowComplete(): bool;
	toggleResetSelectionOnHeaderClick(): bool;
	toggleRowFocusChangeModifiesSelection(): bool;
	toggleShowCellFocusIndicator(): bool;
	toggleStatusBarVisible(): bool;
	unblockHeaderElements(): void;
	updateContent(): void;
}
interface qx_ui_tabview_PageStatic {
	new(label: string, icon: string): qx_ui_tabview_Page;
}
interface qx_ui_tabview_Page extends qx_ui_container_Composite {
	_applyEnabled(value: bool, old: bool): void;
	_applyIcon(value: string, old: string): void;
	_applyLabel(value: string, old: string): void;
	_applyShowCloseButton(value: bool, old: bool): void;
	_createChildControlImpl(id: any, hash: any): void;
	_onButtonClose(): void;
	getButton(): qx_ui_form_RadioButton;
	getIcon(): any;
	getLabel(): any;
	getShowCloseButton(): any;
	initIcon(value: any): any;
	initLabel(value: any): any;
	initShowCloseButton(value: any): any;
	isShowCloseButton(): bool;
	resetIcon(): void;
	resetLabel(): void;
	resetShowCloseButton(): void;
	setIcon(value: any): any;
	setLabel(value: any): any;
	setShowCloseButton(value: any): any;
	toggleShowCloseButton(): bool;
}
interface qx_ui_tabview_TabButtonStatic {
	new(): qx_ui_tabview_TabButton;
}
interface qx_ui_tabview_TabButton extends qx_ui_form_RadioButton {
	_applyCenter(value: bool, old: bool): void;
	_applyIconPosition(value: any, old: any): void;
	_applyShowCloseButton(value: bool, old: bool): void;
	_createChildControlImpl(id: any, hash: any): void;
	_onCloseButtonClick(): void;
	getShowCloseButton(): any;
	initShowCloseButton(value: any): any;
	isShowCloseButton(): bool;
	resetShowCloseButton(): void;
	setShowCloseButton(value: any): any;
	toggleShowCloseButton(): bool;
}
interface qx_ui_tabview_TabViewStatic {
	new(barPosition: string): qx_ui_tabview_TabView;
}
interface qx_ui_tabview_TabView extends qx_ui_core_Widget {
	_applyBarPosition(value: bool, old: bool): void;
	_createChildControlImpl(id: any, hash: any): void;
	_getContentPaddingTarget(): qx_ui_core_Widget;
	_onBeforeChangeSelection(e: qx_event_type_Event): void;
	_onChangeSelection(e: qx_event_type_Data): void;
	_onPageClose(e: qx_event_type_Mouse): void;
	_onRadioChangeSelection(e: qx_event_type_Data): void;
	add(page: qx_ui_tabview_Page): void;
	addAt(page: qx_ui_tabview_Page, index: number): void;
	getBarPosition(): any;
	getChildren(): qx_ui_tabview_Page;
	getSelectables(all: bool): qx_ui_tabview_Page;
	getSelection(): qx_ui_tabview_Page;
	indexOf(page: qx_ui_tabview_Page): number;
	initBarPosition(value: any): any;
	isSelected(item: qx_ui_tabview_Page): bool;
	isSelectionEmpty(): bool;
	remove(page: qx_ui_tabview_Page): void;
	resetBarPosition(): void;
	resetSelection(): void;
	setBarPosition(value: any): any;
	setSelection(items: qx_ui_tabview_Page): void;
}
interface qx_ui_toolbar_ButtonStatic {
	new(label: any, icon: any, command: any): qx_ui_toolbar_Button;
}
interface qx_ui_toolbar_Button extends qx_ui_form_Button {
	_applyVisibility(value: any, old: any): void;
}
interface qx_ui_toolbar_CheckBoxStatic {
	new(label: any, icon: any): qx_ui_toolbar_CheckBox;
}
interface qx_ui_toolbar_CheckBox extends qx_ui_form_ToggleButton {
	_applyVisibility(value: any, old: any): void;
}
interface qx_ui_toolbar_MenuButtonStatic {
}
interface qx_ui_toolbar_MenuButton extends qx_ui_menubar_Button {
	_applyShowArrow(value: bool, old: bool): void;
	_applyVisibility(value: any, old: any): void;
	_createChildControlImpl(id: any, hash: any): void;
	getShowArrow(): any;
	initShowArrow(value: any): any;
	isShowArrow(): bool;
	resetShowArrow(): void;
	setShowArrow(value: any): any;
	toggleShowArrow(): bool;
}
interface qx_ui_toolbar_PartStatic {
	new(): qx_ui_toolbar_Part;
}
interface qx_ui_toolbar_Part extends qx_ui_core_Widget {
	__onSyncAppearance(): void;
	_applySpacing(value: number, old: number): void;
	_createChildControlImpl(id: any, hash: any): void;
	addSeparator(): void;
	getChildrenContainer(): void;
	getMenuButtons(): any[];
	getShow(): any;
	getSpacing(): any;
	initShow(value: any): any;
	initSpacing(value: any): any;
	resetShow(): void;
	resetSpacing(): void;
	setShow(value: any): any;
	setSpacing(value: any): any;
}
interface qx_ui_toolbar_PartContainerStatic {
	new(): qx_ui_toolbar_PartContainer;
}
interface qx_ui_toolbar_PartContainer extends qx_ui_container_Composite {
	getShow(): any;
	initShow(value: any): any;
	resetShow(): void;
	setShow(value: any): any;
}
interface qx_ui_toolbar_RadioButtonStatic {
}
interface qx_ui_toolbar_RadioButton extends qx_ui_toolbar_CheckBox {
	_applyValue(value: bool, old: bool): void;
	_onExecute(e: any): void;
}
interface qx_ui_toolbar_SeparatorStatic {
}
interface qx_ui_toolbar_Separator extends qx_ui_core_Widget {
}
interface qx_ui_toolbar_SplitButtonStatic {
	new(label: any, icon: any, menu: any, command: any): qx_ui_toolbar_SplitButton;
}
interface qx_ui_toolbar_SplitButton extends qx_ui_form_SplitButton {
	_createChildControlImpl(id: any, hash: any): void;
}
interface qx_ui_toolbar_ToolBarStatic {
	new(): qx_ui_toolbar_ToolBar;
}
interface qx_ui_toolbar_ToolBar extends qx_ui_core_Widget {
	__hideChild(child: qx_ui_core_Widget): void;
	__showChild(child: qx_ui_core_Widget): void;
	_add(child: any, options: any): void;
	_addAfter(child: any, after: any, options: any): void;
	_addAt(child: any, index: any, options: any): void;
	_addBefore(child: any, before: any, options: any): void;
	_applyOverflowHandling(value: bool, old: bool): void;
	_applyOverflowIndicator(value: qx_ui_core_Widget, old: qx_ui_core_Widget): void;
	_applyShow(value: any, old: any): void;
	_applySpacing(value: number, old: number): void;
	_computeSizeHint(): void;
	_getNextToHide(): qx_ui_core_Widget;
	_isAllowMenuOpenHover(): bool;
	_onResize(e: qx_event_type_Data): void;
	_recalculateOverflow(width: number, requiredWidth: number): void;
	_remove(child: any): void;
	_removeAll(): void;
	_removeAt(index: any): void;
	_setAllowMenuOpenHover(value: bool): void;
	addSeparator(): void;
	addSpacer(): qx_ui_core_Spacer;
	getMenuButtons(): any[];
	getOpenMenu(): any;
	getOverflowHandling(): any;
	getOverflowIndicator(): any;
	getShow(): any;
	getSpacing(): any;
	initOpenMenu(value: any): any;
	initOverflowHandling(value: any): any;
	initOverflowIndicator(value: any): any;
	initShow(value: any): any;
	initSpacing(value: any): any;
	isOverflowHandling(): bool;
	resetOpenMenu(): void;
	resetOverflowHandling(): void;
	resetOverflowIndicator(): void;
	resetShow(): void;
	resetSpacing(): void;
	setOpenMenu(value: any): any;
	setOverflowHandling(value: any): any;
	setOverflowIndicator(value: any): any;
	setRemovePriority(item: qx_ui_core_Widget, priority: number, override: bool): void;
	setShow(value: any): any;
	setSpacing(value: any): any;
	toggleOverflowHandling(): bool;
}
interface qx_ui_tooltip_ManagerStatic {
	getInstance(): qx_ui_tooltip_Manager;
	new(): qx_ui_tooltip_Manager;
}
interface qx_ui_tooltip_Manager extends qx_core_Object {
	__onFocusOutRoot(e: qx_event_type_Focus): void;
	__onHideInterval(e: qx_event_type_Event): void;
	__onMouseMoveRoot(e: qx_event_type_Mouse): void;
	__onMouseOutRoot(e: qx_event_type_Mouse): void;
	__onMouseOverRoot(e: qx_event_type_Mouse): void;
	__onShowInterval(e: qx_event_type_Event): void;
	_applyCurrent(value: qx_ui_tooltip_ToolTip, old: qx_ui_tooltip_ToolTip): void;
	getCurrent(): any;
	getSharedErrorTooltip(): qx_ui_tooltip_ToolTip;
	getSharedTooltip(): qx_ui_tooltip_ToolTip;
	getShowInvalidToolTips(): any;
	getShowToolTips(): any;
	initCurrent(value: any): any;
	initShowInvalidToolTips(value: any): any;
	initShowToolTips(value: any): any;
	isShowInvalidToolTips(): bool;
	isShowToolTips(): bool;
	resetCurrent(): void;
	resetShowInvalidToolTips(): void;
	resetShowToolTips(): void;
	setCurrent(value: any): any;
	setShowInvalidToolTips(value: any): any;
	setShowToolTips(value: any): any;
	showToolTip(target: any): void;
	toggleShowInvalidToolTips(): bool;
	toggleShowToolTips(): bool;
}
interface qx_ui_tooltip_ToolTipStatic {
	new(label: string, icon: string): qx_ui_tooltip_ToolTip;
}
interface qx_ui_tooltip_ToolTip extends qx_ui_popup_Popup {
	_applyIcon(value: string, old: string): void;
	_applyLabel(value: string, old: string): void;
	_applyRich(value: bool, old: bool): void;
	_createChildControlImpl(id: any, hash: any): void;
	_onMouseOver(e: qx_event_type_Event): void;
	getHideTimeout(): any;
	getIcon(): any;
	getLabel(): any;
	getOpener(): any;
	getRich(): any;
	getShowTimeout(): any;
	initHideTimeout(value: any): any;
	initIcon(value: any): any;
	initLabel(value: any): any;
	initOpener(value: any): any;
	initRich(value: any): any;
	initShowTimeout(value: any): any;
	isRich(): bool;
	resetHideTimeout(): void;
	resetIcon(): void;
	resetLabel(): void;
	resetOpener(): void;
	resetRich(): void;
	resetShowTimeout(): void;
	setHideTimeout(value: any): any;
	setIcon(value: any): any;
	setLabel(value: any): any;
	setOpener(value: any): any;
	setRich(value: any): any;
	setShowTimeout(value: any): any;
	toggleRich(): bool;
}
interface qx_ui_tree_core_AbstractItemStatic {
	new(label: string): qx_ui_tree_core_AbstractItem;
}
interface qx_ui_tree_core_AbstractItem extends qx_ui_core_Widget {
	__getUserValueIcon(): any;
	__getUserValueIconOpened(): any;
	__setIconSource(url: string): void;
	_addWidgets(): void;
	_applyIcon(value: string, old: string): void;
	_applyIconOpened(value: string, old: string): void;
	_applyIndent(value: number, old: number): void;
	_applyLabel(value: string, old: string): void;
	_applyOpen(value: bool, old: bool): void;
	_applyOpenSymbolMode(value: any, old: any): void;
	_createChildControlImpl(id: any, hash: any): void;
	_onChangeOpen(e: qx_event_type_Data): void;
	_shouldShowOpenSymbol(): bool;
	_updateIndent(): void;
	addIcon(): void;
	addLabel(text: string): void;
	addOpenButton(): void;
	addSpacer(): void;
	addWidget(widget: qx_ui_core_Widget, options: any): void;
	getIcon(): any;
	getIconOpened(): any;
	getIndent(): any;
	getLabel(): any;
	getLevel(): number;
	getOpen(): any;
	getOpenSymbolMode(): any;
	hasChildren(): bool;
	initIcon(value: any): any;
	initIconOpened(value: any): any;
	initIndent(value: any): any;
	initLabel(value: any): any;
	initOpen(value: any): any;
	initOpenSymbolMode(value: any): any;
	isOpen(): bool;
	isOpenable(): bool;
	resetIcon(): void;
	resetIconOpened(): void;
	resetIndent(): void;
	resetLabel(): void;
	resetOpen(): void;
	resetOpenSymbolMode(): void;
	setIcon(value: any): any;
	setIconOpened(value: any): any;
	setIndent(value: any): any;
	setLabel(value: any): any;
	setOpen(value: any): any;
	setOpenSymbolMode(value: any): any;
	syncWidget(jobs: any): void;
	toggleOpen(): bool;
}
interface qx_ui_tree_core_AbstractTreeItemStatic {
	new(label: any): qx_ui_tree_core_AbstractTreeItem;
}
interface qx_ui_tree_core_AbstractTreeItem extends qx_ui_tree_core_AbstractItem {
	__addChildrenToParent(): void;
	_applyOpen(value: bool, old: bool): void;
	_shouldShowOpenSymbol(): void;
	_updateIndent(): void;
	add(varargs: qx_ui_tree_core_AbstractTreeItem): void;
	addAfter(treeItem: qx_ui_tree_core_AbstractTreeItem, after: qx_ui_tree_core_AbstractTreeItem): void;
	addAt(treeItem: qx_ui_tree_core_AbstractTreeItem, index: number): void;
	addAtBegin(treeItem: qx_ui_tree_core_AbstractTreeItem): void;
	addBefore(treeItem: qx_ui_tree_core_AbstractTreeItem, before: qx_ui_tree_core_AbstractTreeItem): void;
	addState(state: any): void;
	getChildren(): qx_ui_tree_core_AbstractTreeItem;
	getChildrenContainer(): qx_ui_core_Widget;
	getItems(recursive: bool, invisible: bool, ignoreFirst: bool): qx_ui_tree_core_AbstractTreeItem;
	getLevel(): void;
	getParent(): any;
	getParentChildrenContainer(): qx_ui_core_Widget;
	getTree(): qx_ui_tree_Tree;
	hasChildren(): void;
	hasChildrenContainer(): bool;
	initParent(value: any): any;
	recursiveAddToWidgetQueue(): void;
	remove(varargs: qx_ui_tree_core_AbstractTreeItem): void;
	removeAll(): void;
	removeAt(index: number): void;
	removeState(state: any): void;
	resetParent(): void;
	setParent(value: any): any;
}
interface qx_ui_tree_core_FolderOpenButtonStatic {
	new(): qx_ui_tree_core_FolderOpenButton;
}
interface qx_ui_tree_core_FolderOpenButton extends qx_ui_basic_Image {
	_applyOpen(value: bool, old: bool): void;
	_onClick(e: qx_event_type_Mouse): void;
	_stopPropagation(e: qx_event_type_Event): void;
	getOpen(): any;
	initOpen(value: any): any;
	isOpen(): bool;
	resetOpen(): void;
	setOpen(value: any): any;
	toggleOpen(): bool;
}
interface qx_ui_tree_core_IVirtualTreeStatic {
}
interface qx_ui_tree_core_IVirtualTree {
	closeNode(node: qx_core_Object): void;
	getLevel(row: number): number;
	getLookupTable(): qx_data_Array;
	getSelection(): any;
	hasChildren(node: qx_core_Object): bool;
	isNode(item: qx_core_Object): bool;
	isNodeOpen(node: qx_core_Object): bool;
	isShowTopLevelOpenCloseIcons(): bool;
	openNode(node: qx_core_Object): void;
}
interface qx_ui_tree_core_IVirtualTreeDelegateStatic {
}
interface qx_ui_tree_core_IVirtualTreeDelegate {
	bindItem(controller: qx_ui_tree_core_MWidgetController, item: qx_ui_core_Widget, id: number): void;
	configureItem(item: qx_ui_core_Widget): void;
	createItem(): qx_ui_core_Widget;
	onPool(item: qx_ui_core_Widget): void;
}
interface qx_ui_tree_core_MWidgetControllerStatic {
	new(): qx_ui_tree_core_MWidgetController;
}
interface qx_ui_tree_core_MWidgetController {
	__addBinding(widget: qx_ui_core_Widget, id: any): void;
	__getBindings(widget: qx_ui_core_Widget): any[];
	__getBindPath(index: number, path: string): void;
	__getBindPath(index: number, path: any): void;
	_bindItem(item: qx_ui_core_Widget, index: number): void;
	_removeBindingsFrom(item: qx_ui_core_Widget): void;
	bindDefaultProperties(item: qx_ui_core_Widget, index: number): void;
	bindProperty(sourcePath: string, targetProperty: string, options: any, targetWidget: qx_ui_core_Widget, index: number): void;
	bindProperty(sourcePath: any, targetProperty: string, options: any, targetWidget: qx_ui_core_Widget, index: number): void;
	bindPropertyReverse(targetPath: string, sourceProperty: string, options: any, sourceWidget: qx_ui_core_Widget, index: number): void;
	bindPropertyReverse(targetPath: any, sourceProperty: string, options: any, sourceWidget: qx_ui_core_Widget, index: number): void;
	getChildProperty(): any;
	getDelegate(): any;
	getIconOptions(): any;
	getIconPath(): any;
	getLabelOptions(): any;
	getLabelPath(): any;
	initChildProperty(value: any): any;
	initDelegate(value: any): any;
	initIconOptions(value: any): any;
	initIconPath(value: any): any;
	initLabelOptions(value: any): any;
	initLabelPath(value: any): any;
	removeBindings(): void;
	resetChildProperty(): void;
	resetDelegate(): void;
	resetIconOptions(): void;
	resetIconPath(): void;
	resetLabelOptions(): void;
	resetLabelPath(): void;
	setChildProperty(value: any): any;
	setDelegate(value: any): any;
	setIconOptions(value: any): any;
	setIconPath(value: any): any;
	setLabelOptions(value: any): any;
	setLabelPath(value: any): any;
}
interface qx_ui_tree_provider_IVirtualTreeProviderStatic {
}
interface qx_ui_tree_provider_IVirtualTreeProvider {
	createLayer(): qx_ui_virtual_layer_Abstract;
	createRenderer(): any;
	isSelectable(row: number): bool;
	setChildProperty(value: string): void;
	setLabelPath(value: string): void;
	styleSelectabled(row: number): void;
	styleUnselectabled(row: number): void;
}
interface qx_ui_tree_provider_WidgetProviderStatic {
	new(tree: qx_ui_tree_VirtualTree): qx_ui_tree_provider_WidgetProvider;
}
interface qx_ui_tree_provider_WidgetProvider extends qx_core_Object {
	__onOpenChanged(event: qx_event_type_Data): void;
	_onChangeDelegate(event: qx_event_type_Data): void;
	_onItemCreated(event: qx_event_type_Data): void;
	_onPool(item: qx_ui_core_Widget): void;
	_styleSelectabled(widget: qx_ui_core_Widget): void;
	_styleUnselectabled(widget: qx_ui_core_Widget): void;
	createLayer(): void;
	createRenderer(): void;
	getCellWidget(row: any, column: any): void;
	isSelectable(row: any): void;
	poolCellWidget(widget: any): void;
	styleSelectabled(row: any): void;
	styleUnselectabled(row: any): void;
}
interface qx_ui_tree_selection_SelectionManagerStatic {
}
interface qx_ui_tree_selection_SelectionManager extends qx_ui_core_selection_ScrollArea {
	_getFirstSelectable(): void;
	_getLastSelectable(): void;
	_getRelatedSelectable(item: any, relation: any): void;
	_getSelectableFromMouseEvent(event: any): void;
	_getSelectableLocationY(item: any): void;
	_getSelectableRange(item1: any, item2: any): void;
	_isSelectable(item: any): void;
	getSelectables(all: any): void;
}
interface qx_ui_tree_TreeStatic {
	new(): qx_ui_tree_Tree;
}
interface qx_ui_tree_Tree extends qx_ui_core_scroll_AbstractScrollArea {
	_applyHideRoot(value: bool, old: bool): void;
	_applyOpenMode(value: any, old: any): void;
	_applyRoot(value: qx_ui_tree_core_AbstractTreeItem, old: qx_ui_tree_core_AbstractTreeItem): void;
	_applyRootOpenClose(value: bool, old: bool): void;
	_getContentPaddingTarget(): qx_ui_core_Widget;
	_onChangeSelection(e: qx_event_type_Data): void;
	_onKeyPress(e: qx_event_type_KeySequence): void;
	_onOpen(e: qx_event_type_Mouse): void;
	getChildren(): qx_ui_tree_core_AbstractTreeItem;
	getChildrenContainer(): qx_ui_core_Widget;
	getHideRoot(): any;
	getItems(recursive: bool, invisible: bool): qx_ui_tree_core_AbstractTreeItem;
	getNextNodeOf(treeItem: qx_ui_tree_core_AbstractTreeItem, invisible: bool): qx_ui_tree_core_AbstractTreeItem;
	getNextSiblingOf(treeItem: qx_ui_tree_core_AbstractTreeItem): qx_ui_tree_core_AbstractTreeItem;
	getOpenMode(): any;
	getPreviousNodeOf(treeItem: qx_ui_tree_core_AbstractTreeItem, invisible: bool): qx_ui_tree_core_AbstractTreeItem;
	getPreviousSiblingOf(treeItem: qx_ui_tree_core_AbstractTreeItem): qx_ui_tree_core_AbstractTreeItem;
	getRoot(): any;
	getRootOpenClose(): any;
	getTreeItem(widget: qx_ui_core_Widget): qx_ui_tree_core_AbstractTreeItem;
	initHideRoot(value: any): any;
	initOpenMode(value: any): any;
	initRoot(value: any): any;
	initRootOpenClose(value: any): any;
	isHideRoot(): bool;
	isRootOpenClose(): bool;
	resetHideRoot(): void;
	resetOpenMode(): void;
	resetRoot(): void;
	resetRootOpenClose(): void;
	setHideRoot(value: any): any;
	setOpenMode(value: any): any;
	setRoot(value: any): any;
	setRootOpenClose(value: any): any;
	toggleHideRoot(): bool;
	toggleRootOpenClose(): bool;
}
interface qx_ui_tree_TreeFileStatic {
}
interface qx_ui_tree_TreeFile extends qx_ui_tree_core_AbstractTreeItem {
	_addWidgets(): void;
}
interface qx_ui_tree_TreeFolderStatic {
}
interface qx_ui_tree_TreeFolder extends qx_ui_tree_core_AbstractTreeItem {
	_addWidgets(): void;
}
interface qx_ui_tree_VirtualTreeStatic {
	new(model: qx_core_Object, labelPath: string, childProperty: string): qx_ui_tree_VirtualTree;
}
interface qx_ui_tree_VirtualTree extends qx_ui_virtual_core_Scroller {
	__applyModelChanges(): void;
	__buildParentChain(item: any): void;
	__getVisibleChildrenFrom(node: qx_core_Object, nestedLevel: number): any[];
	__getVisibleParent(): any;
	__openNode(node: qx_core_Object): void;
	__openNodeAndAllParents(startNode: qx_core_Object, targetNode: qx_core_Object): bool;
	__updateRowCount(): void;
	_afterApplySelection(): void;
	_applyChildProperty(value: string, old: string): void;
	_applyDelegate(value: any, old: any): void;
	_applyHideRoot(value: bool, old: bool): void;
	_applyIconOptions(value: any, old: any): void;
	_applyIconPath(value: string, old: string): void;
	_applyLabelOptions(value: any, old: any): void;
	_applyLabelPath(value: string, old: string): void;
	_applyModel(value: qx_core_Object, old: qx_core_Object): void;
	_applyOpenMode(value: any, old: any): void;
	_applyRowHeight(value: number, old: number): void;
	_applyShowLeafs(value: bool, old: bool): void;
	_applyShowTopLevelOpenCloseIcons(value: bool, old: bool): void;
	_beforeApplySelection(newSelection: any[]): void;
	_getContentPaddingTarget(): qx_ui_core_Widget;
	_getDataFromRow(row: number): any;
	_getSelectables(): qx_data_Array;
	_init(): void;
	_initLayer(): void;
	_onChangeBubble(event: qx_event_type_Data): void;
	_onKeyPress(e: qx_event_type_KeySequence): void;
	_onOpen(event: qx_ui_virtual_core_CellEvent): void;
	_onUpdated(event: qx_event_type_Event): void;
	_reverseLookup(index: number): number;
	buildLookupTable(): void;
	closeNode(node: any): void;
	getChildProperty(): any;
	getDelegate(): any;
	getHideRoot(): any;
	getIconOptions(): any;
	getIconPath(): any;
	getItemHeight(): any;
	getLabelOptions(): any;
	getLabelPath(): any;
	getLevel(row: any): void;
	getLookupTable(): void;
	getModel(): any;
	getOpenMode(): any;
	getOpenNodes(): any[];
	getParent(item: qx_core_Object): qx_core_Object;
	getShowLeafs(): any;
	getShowTopLevelOpenCloseIcons(): any;
	hasChildren(node: any): void;
	initChildProperty(value: any): any;
	initDelegate(value: any): any;
	initHideRoot(value: any): any;
	initIconOptions(value: any): any;
	initIconPath(value: any): any;
	initItemHeight(value: any): any;
	initLabelOptions(value: any): any;
	initLabelPath(value: any): any;
	initModel(value: any): any;
	initOpenMode(value: any): any;
	initShowLeafs(value: any): any;
	initShowTopLevelOpenCloseIcons(value: any): any;
	isHideRoot(): bool;
	isNode(item: any): void;
	isNodeOpen(node: any): void;
	isShowLeafs(): bool;
	isShowTopLevelOpenCloseIcons(): bool;
	openNode(node: any): void;
	openNodeAndParents(node: qx_core_Object): void;
	refresh(): void;
	resetChildProperty(): void;
	resetDelegate(): void;
	resetHideRoot(): void;
	resetIconOptions(): void;
	resetIconPath(): void;
	resetItemHeight(): void;
	resetLabelOptions(): void;
	resetLabelPath(): void;
	resetModel(): void;
	resetOpenMode(): void;
	resetShowLeafs(): void;
	resetShowTopLevelOpenCloseIcons(): void;
	setChildProperty(value: any): any;
	setDelegate(value: any): any;
	setHideRoot(value: any): any;
	setIconOptions(value: any): any;
	setIconPath(value: any): any;
	setItemHeight(value: any): any;
	setLabelOptions(value: any): any;
	setLabelPath(value: any): any;
	setModel(value: any): any;
	setOpenMode(value: any): any;
	setShowLeafs(value: any): any;
	setShowTopLevelOpenCloseIcons(value: any): any;
	syncWidget(jobs: any): void;
	toggleHideRoot(): bool;
	toggleShowLeafs(): bool;
	toggleShowTopLevelOpenCloseIcons(): bool;
}
interface qx_ui_tree_VirtualTreeItemStatic {
}
interface qx_ui_tree_VirtualTreeItem extends qx_ui_tree_core_AbstractItem {
	_addWidgets(): void;
	_shouldShowOpenSymbol(): void;
	getLevel(): void;
	hasChildren(): void;
}
interface qx_ui_treevirtual_DefaultDataCellRendererStatic {
}
interface qx_ui_treevirtual_DefaultDataCellRenderer extends qx_ui_table_cellrenderer_Default {
}
interface qx_ui_treevirtual_MFamilyStatic {
}
interface qx_ui_treevirtual_MFamily {
	familyGetFirstChild(nodeReference: any): number;
	familyGetFirstChild(nodeReference: number): number;
	familyGetLastChild(nodeReference: any): number;
	familyGetLastChild(nodeReference: number): number;
	familyGetNextSibling(nodeReference: any): number;
	familyGetNextSibling(nodeReference: number): number;
	familyGetPrevSibling(nodeReference: any): number;
	familyGetPrevSibling(nodeReference: number): number;
}
interface qx_ui_treevirtual_MNodeStatic {
}
interface qx_ui_treevirtual_MNode {
	nodeGet(nodeReference: any): any;
	nodeGet(nodeReference: number): any;
	nodeGetCellStyle(nodeReference: any): string;
	nodeGetCellStyle(nodeReference: number): string;
	nodeGetHideOpenClose(nodeReference: any): bool;
	nodeGetHideOpenClose(nodeReference: number): bool;
	nodeGetIcon(nodeReference: any): string;
	nodeGetIcon(nodeReference: number): string;
	nodeGetLabel(nodeReference: any): string;
	nodeGetLabel(nodeReference: number): string;
	nodeGetLabelStyle(nodeReference: any): string;
	nodeGetLabelStyle(nodeReference: number): string;
	nodeGetOpened(nodeReference: any): bool;
	nodeGetOpened(nodeReference: number): bool;
	nodeGetSelected(nodeReference: any): bool;
	nodeGetSelected(nodeReference: number): bool;
	nodeGetSelectedIcon(nodeReference: any): string;
	nodeGetSelectedIcon(nodeReference: number): string;
	nodeSetCellStyle(nodeReference: any, style: string): void;
	nodeSetCellStyle(nodeReference: number, style: string): void;
	nodeSetHideOpenClose(nodeReference: any, b: bool): void;
	nodeSetHideOpenClose(nodeReference: number, b: bool): void;
	nodeSetIcon(nodeReference: any, path: string): void;
	nodeSetIcon(nodeReference: number, path: string): void;
	nodeSetLabel(nodeReference: any, label: string): void;
	nodeSetLabel(nodeReference: number, label: string): void;
	nodeSetLabelStyle(nodeReference: any, style: string): void;
	nodeSetLabelStyle(nodeReference: number, style: string): void;
	nodeSetOpened(nodeReference: any, b: bool): void;
	nodeSetOpened(nodeReference: number, b: bool): void;
	nodeSetSelected(nodeReference: any, b: bool): void;
	nodeSetSelected(nodeReference: number, b: bool): void;
	nodeSetSelectedIcon(nodeReference: any, path: string): void;
	nodeSetSelectedIcon(nodeReference: number, path: string): void;
	nodeSetState(nodeReference: any, attributes: any): void;
	nodeSetState(nodeReference: number, attributes: any): void;
	nodeToggleOpened(nodeReference: any): void;
	nodeToggleOpened(nodeReference: number): void;
}
interface qx_ui_treevirtual_MTreePrimitiveStatic {
	_addNode(nodeArr: any[], parentNodeId: number, label: string, bOpened: bool, bHideOpenCloseButton: bool, type: number, icon: string, iconSelected: string, nodeId: number): number;
	_addNode(nodeArr: any, parentNodeId: number, label: string, bOpened: bool, bHideOpenCloseButton: bool, type: number, icon: string, iconSelected: string, nodeId: number): number;
	_getEmptyTree(): any;
}
interface qx_ui_treevirtual_MTreePrimitive {
}
interface qx_ui_treevirtual_SelectionManagerStatic {
	new(table: qx_ui_table_Table): qx_ui_treevirtual_SelectionManager;
}
interface qx_ui_treevirtual_SelectionManager extends qx_ui_table_selection_Manager {
	_handleExtendedClick(tree: qx_ui_treevirtual_TreeVirtual, evt: any, node: any, left: number): bool;
	_handleSelectEvent(index: number, evt: any): void;
	getTable(): qx_ui_table_Table;
}
interface qx_ui_treevirtual_SimpleTreeDataCellRendererStatic {
	__preloadImages(): void;
	new(): qx_ui_treevirtual_SimpleTreeDataCellRenderer;
}
interface qx_ui_treevirtual_SimpleTreeDataCellRenderer extends qx_ui_table_cellrenderer_Abstract {
	_addExtraContentBeforeIcon(cellInfo: any, pos: number): any;
	_addExtraContentBeforeIndentation(cellInfo: any, pos: number): any;
	_addExtraContentBeforeLabel(cellInfo: any, pos: number): any;
	_addIcon(cellInfo: any, pos: number): any;
	_addImage(imageInfo: any): string;
	_addIndentation(cellInfo: any, pos: number): any;
	_addLabel(cellInfo: any, pos: number): string;
	_getCellStyle(cellInfo: any): void;
	_getContentHtml(cellInfo: any): void;
	_getIndentSymbol(column: number, node: qx_dom_Node, bUseTreeLines: bool, bAlwaysShowOpenCloseSymbol: bool, bExcludeFirstLevelTreeLines: bool): any;
	getAlwaysShowOpenCloseSymbol(): any;
	getExcludeFirstLevelTreeLines(): any;
	getUseTreeLines(): any;
	initAlwaysShowOpenCloseSymbol(value: any): any;
	initExcludeFirstLevelTreeLines(value: any): any;
	initUseTreeLines(value: any): any;
	isAlwaysShowOpenCloseSymbol(): bool;
	isExcludeFirstLevelTreeLines(): bool;
	isUseTreeLines(): bool;
	resetAlwaysShowOpenCloseSymbol(): void;
	resetExcludeFirstLevelTreeLines(): void;
	resetUseTreeLines(): void;
	setAlwaysShowOpenCloseSymbol(value: any): any;
	setExcludeFirstLevelTreeLines(value: any): any;
	setUseTreeLines(value: any): any;
	toggleAlwaysShowOpenCloseSymbol(): bool;
	toggleExcludeFirstLevelTreeLines(): bool;
	toggleUseTreeLines(): bool;
}
interface qx_ui_treevirtual_SimpleTreeDataModelStatic {
	new(): qx_ui_treevirtual_SimpleTreeDataModel;
}
interface qx_ui_treevirtual_SimpleTreeDataModel extends qx_ui_table_model_Abstract {
	__calculateLastChildFlags(nodeId: number): void;
	__inorder(nodeId: number, level: number): void;
	__render(): void;
	__setLastChildFlag(node: any, isLastChild: bool): void;
	_applyFilter(value: qx_lang_Function, old: qx_lang_Function): void;
	_clearSelections(): void;
	addBranch(parentNodeId: number, label: string, bOpened: bool, bHideOpenCloseButton: bool, icon: string, iconSelected: string): number;
	addLeaf(parentNodeId: number, label: string, icon: string, iconSelected: string): number;
	clearData(): void;
	getColumnData(nodeId: number, columnIndex: number): any;
	getData(): any[];
	getFilter(): any;
	getNode(rowIndex: number): any;
	getNodeFromRow(rowIndex: number): any;
	getNodeRowMap(): any[];
	getRowCount(): void;
	getRowData(rowIndex: any): void;
	getRowFromNodeId(nodeId: number): void;
	getSelectedNodes(): any[];
	getSortColumnIndex(): number;
	getTree(): qx_ui_treevirtual_TreeVirtual;
	getTreeColumn(): number;
	getValue(columnIndex: number, rowIndex: number): any;
	initFilter(value: any): any;
	isColumnEditable(columnIndex: any): void;
	isColumnSortable(columnIndex: any): void;
	move(moveNodeReference: any, parentNodeReference: any): void;
	move(moveNodeReference: any, parentNodeReference: number): void;
	move(moveNodeReference: number, parentNodeReference: any): void;
	move(moveNodeReference: number, parentNodeReference: number): void;
	prune(nodeReference: any, bSelfAlso: bool): void;
	prune(nodeReference: number, bSelfAlso: bool): void;
	resetFilter(): void;
	setColumnData(nodeId: number, columnIndex: number, data: any): void;
	setColumnEditable(columnIndex: number, editable: bool): void;
	setData(nodeArr: any[]): void;
	setData(nodeArr: any): void;
	setEditable(editable: bool): void;
	setFilter(value: any): any;
	setState(nodeReference: any, attributes: any): void;
	setState(nodeReference: number, attributes: any): void;
	setTree(tree: qx_ui_treevirtual_TreeVirtual): void;
	setTreeColumn(columnIndex: number): void;
	setValue(columnIndex: any, rowIndex: any, value: any): void;
	sortByColumn(columnIndex: number, ascending: bool): void;
}
interface qx_ui_treevirtual_SimpleTreeDataRowRendererStatic {
	new(): qx_ui_treevirtual_SimpleTreeDataRowRenderer;
}
interface qx_ui_treevirtual_SimpleTreeDataRowRenderer extends qx_ui_table_rowrenderer_Default {
	updateDataRowElement(rowInfo: any, rowElem: any): void;
}
interface qx_ui_treevirtual_TreeVirtualStatic {
	new(headings: any[], custom: any): qx_ui_treevirtual_TreeVirtual;
	new(headings: string, custom: any): qx_ui_treevirtual_TreeVirtual;
}
interface qx_ui_treevirtual_TreeVirtual extends qx_ui_table_Table {
	_calculateSelectedNodes(): any[];
	_onKeyPress(evt: any): void;
	_onSelectionChanged(evt: any): void;
	getAlwaysShowOpenCloseSymbol(): bool;
	getDataModel(): qx_ui_table_ITableModel;
	getExcludeFirstLevelTreeLines(): bool;
	getHierarchy(nodeReference: any): any[];
	getHierarchy(nodeReference: number): any[];
	getOpenCloseClickSelectsRow(): any;
	getSelectedNodes(): any[];
	getSelectionMode(): number;
	getUseTreeLines(): bool;
	initOpenCloseClickSelectsRow(value: any): any;
	isOpenCloseClickSelectsRow(): bool;
	resetOpenCloseClickSelectsRow(): void;
	setAlwaysShowOpenCloseSymbol(b: bool): void;
	setExcludeFirstLevelTreeLines(b: bool): void;
	setOpenCloseClickSelectsRow(value: any): any;
	setOverflow(s: string): void;
	setSelectionMode(mode: number): void;
	setUseTreeLines(b: bool): void;
	toggleOpenCloseClickSelectsRow(): bool;
}
interface qx_ui_virtual_behavior_PrefetchStatic {
	new(scroller: qx_ui_virtual_core_Scroller, settings: any): qx_ui_virtual_behavior_Prefetch;
}
interface qx_ui_virtual_behavior_Prefetch extends qx_core_Object {
	_applyInterval(value: number, old: number): void;
	_applyScroller(value: qx_ui_virtual_core_Scroller, old: qx_ui_virtual_core_Scroller): void;
	_onInterval(): void;
	getInterval(): any;
	getScroller(): any;
	initInterval(value: any): any;
	initScroller(value: any): any;
	resetInterval(): void;
	resetScroller(): void;
	setInterval(value: any): any;
	setPrefetchX(minLeft: number, maxLeft: number, minRight: number, maxRight: number): void;
	setPrefetchY(minAbove: number, maxAbove: number, minBelow: number, maxBelow: number): void;
	setScroller(value: any): any;
}
interface qx_ui_virtual_cell_AbstractStatic {
	new(): qx_ui_virtual_cell_Abstract;
}
interface qx_ui_virtual_cell_Abstract extends qx_core_Object {
	getAttributes(value: any, states: any): string;
	getCellProperties(value: any, states: any): void;
	getContent(value: any, states: any): string;
	getCssClasses(value: any, states: any): string;
	getInsets(value: any, states: any): number;
	getStyles(value: any, states: any): string;
}
interface qx_ui_virtual_cell_AbstractImageStatic {
	new(): qx_ui_virtual_cell_AbstractImage;
}
interface qx_ui_virtual_cell_AbstractImage extends qx_ui_virtual_cell_Cell {
	__createImage(imageData: any): any;
	__createImage(imageData: string): any;
	__getImageSize(source: string): any;
	_identifyImage(value: any): any;
	getContent(value: any, states: any): void;
}
interface qx_ui_virtual_cell_AbstractWidgetStatic {
	new(): qx_ui_virtual_cell_AbstractWidget;
}
interface qx_ui_virtual_cell_AbstractWidget extends qx_core_Object {
	__getWidgetFromPool(): qx_ui_core_LayoutItem;
	_cleanupPool(): void;
	_createWidget(): qx_ui_core_LayoutItem;
	getCellWidget(data: any, states: any): void;
	pool(widget: any): void;
	updateData(widget: any, data: any): void;
	updateStates(widget: any, states: any): void;
}
interface qx_ui_virtual_cell_BooleanStatic {
	new(): qx_ui_virtual_cell_Boolean;
}
interface qx_ui_virtual_cell_Boolean extends qx_ui_virtual_cell_AbstractImage {
	_applyIconFalse(value: string, old: string): void;
	_applyIconTrue(value: string, old: string): void;
	_identifyImage(value: any): void;
	getIconFalse(): any;
	getIconTrue(): any;
	initIconFalse(value: any): any;
	initIconTrue(value: any): any;
	resetIconFalse(): void;
	resetIconTrue(): void;
	setIconFalse(value: any): any;
	setIconTrue(value: any): any;
}
interface qx_ui_virtual_cell_CellStatic {
	new(): qx_ui_virtual_cell_Cell;
}
interface qx_ui_virtual_cell_Cell extends qx_ui_virtual_cell_Abstract {
	__applyThemeValues(): void;
	__cacheThemedValues(): void;
	__clearThemedPropertyValues(): void;
	__computeCssClassForStates(): void;
	__initializeThemableProperties(): void;
	__setStates(states: any): void;
	__updateThemeableProperties(states: any): void;
	_applyAppearance(value: string, old: string): void;
	_applyBackgroundColor(value: qx_theme_classic_Color, old: qx_theme_classic_Color): void;
	_applyFont(value: qx_bom_Font, old: qx_bom_Font): void;
	_applyPadding(value: number, old: number): void;
	_applyTextAlign(value: any, old: any): void;
	_applyTextColor(value: qx_theme_classic_Color, old: qx_theme_classic_Color): void;
	_getCssProperties(): any[];
	_getValue(propertyName: string): any;
	_storeStyle(propertyName: string, styles: string): void;
	getAppearance(): any;
	getAttributes(value: any, states: any): void;
	getBackgroundColor(): any;
	getCellProperties(value: any, states: any): void;
	getContent(value: any, states: any): void;
	getCssClasses(value: any, states: any): void;
	getFont(): any;
	getInsets(value: any, states: any): void;
	getPaddingBottom(): any;
	getPaddingLeft(): any;
	getPaddingRight(): any;
	getPaddingTop(): any;
	getStyles(value: any, states: any): void;
	getTextAlign(): any;
	getTextColor(): any;
	initAppearance(value: any): any;
	initBackgroundColor(value: any): any;
	initFont(value: any): any;
	initPaddingBottom(value: any): any;
	initPaddingLeft(value: any): any;
	initPaddingRight(value: any): any;
	initPaddingTop(value: any): any;
	initTextAlign(value: any): any;
	initTextColor(value: any): any;
	resetAppearance(): void;
	resetBackgroundColor(): void;
	resetFont(): void;
	resetPadding(): void;
	resetPaddingBottom(): void;
	resetPaddingLeft(): void;
	resetPaddingRight(): void;
	resetPaddingTop(): void;
	resetTextAlign(): void;
	resetTextColor(): void;
	setAppearance(value: any): any;
	setBackgroundColor(value: any): any;
	setFont(value: any): any;
	setPadding(paddingTop: any, paddingRight: any, paddingBottom: any, paddingLeft: any): void;
	setPaddingBottom(value: any): any;
	setPaddingLeft(value: any): any;
	setPaddingRight(value: any): any;
	setPaddingTop(value: any): any;
	setTextAlign(value: any): any;
	setTextColor(value: any): any;
}
interface qx_ui_virtual_cell_CellStylesheetStatic {
	getInstance(): qx_ui_virtual_cell_CellStylesheet;
	new(): qx_ui_virtual_cell_CellStylesheet;
}
interface qx_ui_virtual_cell_CellStylesheet extends qx_core_Object {
	__getNextClassname(): string;
	computeClassForStyles(key: string, styleString: string): string;
	getCssClass(key: string): string;
	getStylesheet(): qx_bom_client_Stylesheet;
}
interface qx_ui_virtual_cell_DateStatic {
	new(dateFormat: qx_util_format_DateFormat): qx_ui_virtual_cell_Date;
	new(dateFormat: any): qx_ui_virtual_cell_Date;
}
interface qx_ui_virtual_cell_Date extends qx_ui_virtual_cell_Cell {
	getContent(value: any, states: any): void;
	getDateFormat(): any;
	initDateFormat(value: any): any;
	resetDateFormat(): void;
	setDateFormat(value: any): any;
}
interface qx_ui_virtual_cell_HtmlStatic {
}
interface qx_ui_virtual_cell_Html extends qx_ui_virtual_cell_Cell {
	getContent(value: any, states: any): void;
}
interface qx_ui_virtual_cell_ICellStatic {
}
interface qx_ui_virtual_cell_ICell {
	getCellProperties(data: any, states: any): any;
}
interface qx_ui_virtual_cell_ImageStatic {
}
interface qx_ui_virtual_cell_Image extends qx_ui_virtual_cell_AbstractImage {
	_identifyImage(value: any): void;
}
interface qx_ui_virtual_cell_IWidgetCellStatic {
}
interface qx_ui_virtual_cell_IWidgetCell {
	getCellWidget(data: any, states: any): qx_ui_core_LayoutItem;
	pool(widget: qx_ui_core_LayoutItem): void;
	updateData(widget: qx_ui_core_LayoutItem, data: any): void;
	updateStates(widget: qx_ui_core_LayoutItem, states: any): void;
}
interface qx_ui_virtual_cell_IWidgetCellDelegateStatic {
}
interface qx_ui_virtual_cell_IWidgetCellDelegate {
	createWidget(): qx_ui_core_LayoutItem;
}
interface qx_ui_virtual_cell_NumberStatic {
	new(numberFormat: qx_util_format_NumberFormat): qx_ui_virtual_cell_Number;
	new(numberFormat: any): qx_ui_virtual_cell_Number;
}
interface qx_ui_virtual_cell_Number extends qx_ui_virtual_cell_Cell {
	getContent(value: any, states: any): void;
	getNumberFormat(): any;
	initNumberFormat(value: any): any;
	resetNumberFormat(): void;
	setNumberFormat(value: any): any;
}
interface qx_ui_virtual_cell_StringStatic {
	new(): qx_ui_virtual_cell_String;
}
interface qx_ui_virtual_cell_String extends qx_ui_virtual_cell_Cell {
	getContent(value: any, states: any): void;
}
interface qx_ui_virtual_cell_WidgetCellStatic {
}
interface qx_ui_virtual_cell_WidgetCell extends qx_ui_virtual_cell_AbstractWidget {
	_applyDelegate(value: any, old: any): void;
	_createWidget(): void;
	getDelegate(): any;
	initDelegate(value: any): any;
	resetDelegate(): void;
	setDelegate(value: any): any;
	updateData(widget: any, data: any): void;
}
interface qx_ui_virtual_core_AxisStatic {
	new(defaultItemSize: number, itemCount: number): qx_ui_virtual_core_Axis;
}
interface qx_ui_virtual_core_Axis extends qx_core_Object {
	__findRangeByIndex(index: number): any;
	__findRangeByPosition(position: number): any;
	__getRanges(): any;
	getDefaultItemSize(): number;
	getItemAtPosition(position: number): any;
	getItemAtPosition(position: any): any;
	getItemCount(): number;
	getItemPosition(index: number): number;
	getItemSize(index: number): number;
	getItemSizes(startIndex: number, minSizeSum: number): number;
	getTotalSize(): number;
	resetItemSizes(): void;
	setDefaultItemSize(defaultItemSize: number): void;
	setItemCount(itemCount: number): void;
	setItemSize(index: number, size: number): void;
}
interface qx_ui_virtual_core_CellEventStatic {
}
interface qx_ui_virtual_core_CellEvent extends qx_event_type_Mouse {
	getColumn(): any;
	getRow(): any;
	init(scroller: qx_ui_table_pane_Scroller, me: qx_event_type_Mouse, row: number, column: number): void;
	initColumn(value: any): any;
	initRow(value: any): any;
	resetColumn(): void;
	resetRow(): void;
	setColumn(value: any): any;
	setRow(value: any): any;
}
interface qx_ui_virtual_core_IHtmlCellProviderStatic {
}
interface qx_ui_virtual_core_IHtmlCellProvider {
	getCellProperties(row: number, column: number): any;
}
interface qx_ui_virtual_core_ILayerStatic {
}
interface qx_ui_virtual_core_ILayer {
	fullUpdate(firstRow: number, firstColumn: number, rowSizes: number, columnSizes: number): void;
	updateLayerData(): void;
	updateLayerWindow(firstRow: number, firstColumn: number, rowSizes: number, columnSizes: number): void;
}
interface qx_ui_virtual_core_IWidgetCellProviderStatic {
}
interface qx_ui_virtual_core_IWidgetCellProvider {
	getCellWidget(row: number, column: number): qx_ui_core_LayoutItem;
	poolCellWidget(widget: qx_ui_core_LayoutItem): void;
}
interface qx_ui_virtual_core_PaneStatic {
	new(rowCount: number, columnCount: number, cellHeight: number, cellWidth: number): qx_ui_virtual_core_Pane;
}
interface qx_ui_virtual_core_Pane extends qx_ui_core_Widget {
	__checkPaneResize(): void;
	__handleMouseCellEvent(e: qx_event_type_Mouse, cellEventType: string): void;
	_deferredUpdateScrollPosition(): void;
	_fullUpdate(): void;
	_onAppear(): void;
	_onClick(e: qx_event_type_Mouse): void;
	_onContextmenu(e: qx_event_type_Mouse): void;
	_onDblclick(e: qx_event_type_Mouse): void;
	_onResize(): void;
	_setLayerWindow(layers: qx_ui_virtual_core_ILayer, left: number, top: number, minWidth: number, minHeight: number, doFullUpdate: bool): void;
	_updateScrollPosition(): void;
	addLayer(layer: qx_ui_virtual_core_ILayer): void;
	fullUpdate(): void;
	getCellAtPosition(documentX: number, documentY: number): any;
	getChildren(): any;
	getColumnConfig(): qx_ui_virtual_core_Axis;
	getLayers(): qx_ui_virtual_core_ILayer;
	getRowConfig(): qx_ui_virtual_core_Axis;
	getScrollMaxX(): number;
	getScrollMaxY(): number;
	getScrollSize(): any;
	getScrollX(): number;
	getScrollY(): number;
	getVisibleLayers(): qx_ui_virtual_core_ILayer;
	isUpdatePending(): bool;
	prefetchX(minLeft: number, maxLeft: number, minRight: number, maxRight: number): void;
	prefetchY(minAbove: number, maxAbove: number, minBelow: number, maxBelow: number): void;
	scrollCellIntoView(column: number, row: number): void;
	scrollColumnIntoView(column: number): void;
	scrollRowIntoView(row: number): void;
	setScrollX(value: number): void;
	setScrollY(value: number): void;
	syncWidget(jobs: any): void;
}
interface qx_ui_virtual_core_ScrollerStatic {
	new(rowCount: number, columnCount: number, cellHeight: number, cellWidth: number): qx_ui_virtual_core_Scroller;
}
interface qx_ui_virtual_core_Scroller extends qx_ui_core_scroll_AbstractScrollArea {
	_createChildControlImpl(id: any, hash: any): void;
	_onScrollBarX(e: any): void;
	_onScrollBarY(e: any): void;
	getItemBottom(item: qx_ui_core_Widget): number;
	getItemLeft(item: qx_ui_core_Widget): number;
	getItemRight(item: qx_ui_core_Widget): number;
	getItemTop(item: qx_ui_core_Widget): number;
	getPane(): qx_ui_virtual_core_Pane;
}
interface qx_ui_virtual_form_IListDelegateStatic {
}
interface qx_ui_virtual_form_IListDelegate {
	getCellData(row: number): any;
	getCellRenderer(row: number): qx_ui_virtual_cell_IWidgetCell;
	isRowSelectable(row: number): bool;
}
interface qx_ui_virtual_form_ListStatic {
	new(): qx_ui_virtual_form_List;
}
interface qx_ui_virtual_form_List extends qx_ui_virtual_core_Scroller {
	_applyCellRenderer(value: any, old: any): void;
	_applyDelegate(value: any, old: any): void;
	_applyRowCount(value: number, old: number): void;
	_applyRowHeight(value: number, old: number): void;
	_applyShowGridLines(value: bool, old: bool): void;
	_applyUseWidgetCells(value: bool, old: bool): void;
	_createChildControlImpl(id: any, hash: any): void;
	_getCellData(row: number): any;
	_getCellRenderer(row: number): qx_ui_virtual_cell_IWidgetCell;
	_initHtmlLayer(): void;
	_initSelectionManager(): void;
	_initWidgetLayer(): void;
	_onResize(e: qx_event_type_Data): void;
	_styleHtmlSelectable(item: any, type: string, wasAdded: bool): void;
	_styleWidgetSelectable(item: any, type: string, wasAdded: bool): void;
	getCellRenderer(): any;
	getDelegate(): any;
	getRowCount(): any;
	getRowHeight(): any;
	getSelectionManager(): qx_ui_virtual_selection_Row;
	getShowGridLines(): any;
	getUseWidgetCells(): any;
	initCellRenderer(value: any): any;
	initDelegate(value: any): any;
	initRowCount(value: any): any;
	initRowHeight(value: any): any;
	initShowGridLines(value: any): any;
	initUseWidgetCells(value: any): any;
	isShowGridLines(): bool;
	isUseWidgetCells(): bool;
	resetCellRenderer(): void;
	resetDelegate(): void;
	resetRowCount(): void;
	resetRowHeight(): void;
	resetShowGridLines(): void;
	resetUseWidgetCells(): void;
	setCellRenderer(value: any): any;
	setDelegate(value: any): any;
	setRowCount(value: any): any;
	setRowHeight(value: any): any;
	setShowGridLines(value: any): any;
	setUseWidgetCells(value: any): any;
	syncWidget(jobs: any): void;
	toggleShowGridLines(): bool;
	toggleUseWidgetCells(): bool;
	update(): void;
}
interface qx_ui_virtual_form_ListControllerStatic {
	new(model: qx_data_IListData, target: qx_ui_virtual_form_List): qx_ui_virtual_form_ListController;
}
interface qx_ui_virtual_form_ListController extends qx_core_Object {
	__buildUpLookupTable(): void;
	__lookup(index: number): void;
	_applyDelegate(value: any, old: any): void;
	_applyModel(value: qx_data_IListData, old: qx_data_IListData): void;
	_applySelection(value: qx_data_IListData, old: qx_data_IListData): void;
	_applyTarget(value: qx_ui_virtual_form_List, old: qx_ui_virtual_form_List): void;
	_containsDelegateMethod(delegate: any, specificMethod: string): bool;
	_getDelegate(method: string): qx_lang_Function;
	_getModelRow(modelItem: any): number;
	_getRowData(row: number): any;
	_onChangeBubbleModel(e: qx_event_type_Data): void;
	_onChangeLengthModel(e: qx_event_type_Event): void;
	_onChangeModel(e: qx_event_type_Data): void;
	_onChangeSelectionModel(e: qx_event_type_Data): void;
	_onChangeSelectionView(e: qx_event_type_Data): void;
	_runDelegateFilter(model: qx_data_IListData): void;
	_runDelegateSorter(model: qx_data_IListData): void;
	_syncModelSelectionToView(): void;
	_syncRowCount(): void;
	_syncViewSelectionToModel(): void;
	getCellData(row: number): void;
	getDelegate(): any;
	getModel(): any;
	getRowCount(): number;
	getSelection(): any;
	getTarget(): any;
	initDelegate(value: any): any;
	initModel(value: any): any;
	initSelection(value: any): any;
	initTarget(value: any): any;
	resetDelegate(): void;
	resetModel(): void;
	resetSelection(): void;
	resetTarget(): void;
	setDelegate(value: any): any;
	setModel(value: any): any;
	setSelection(value: any): any;
	setTarget(value: any): any;
	update(): void;
}
interface qx_ui_virtual_form_ListItemCellStatic {
	getInstance(): qx_ui_virtual_form_ListItemCell;
}
interface qx_ui_virtual_form_ListItemCell extends qx_ui_virtual_cell_AbstractWidget {
	_createWidget(): void;
	updateData(widget: any, data: any): void;
}
interface qx_ui_virtual_layer_AbstractStatic {
	new(): qx_ui_virtual_layer_Abstract;
}
interface qx_ui_virtual_layer_Abstract extends qx_ui_core_Widget {
	_fullUpdate(firstRow: number, firstColumn: number, rowSizes: number, columnSizes: number): void;
	_updateLayerData(): void;
	_updateLayerWindow(firstRow: number, firstColumn: number, rowSizes: number, columnSizes: number): void;
	fullUpdate(firstRow: any, firstColumn: any, rowSizes: any, columnSizes: any): void;
	getColumnSizes(): number;
	getFirstColumn(): number;
	getFirstRow(): number;
	getRowSizes(): number;
	syncWidget(jobs: any): void;
	updateLayerData(): void;
	updateLayerWindow(firstRow: any, firstColumn: any, rowSizes: any, columnSizes: any): void;
}
interface qx_ui_virtual_layer_AbstractBackgroundStatic {
	new(colorEven: qx_theme_classic_Color, colorOdd: qx_theme_classic_Color): qx_ui_virtual_layer_AbstractBackground;
}
interface qx_ui_virtual_layer_AbstractBackground extends qx_ui_virtual_layer_Abstract {
	_applyColorEven(value: qx_theme_classic_Color, old: qx_theme_classic_Color): void;
	_applyColorOdd(value: qx_theme_classic_Color, old: qx_theme_classic_Color): void;
	clearCustomColors(): void;
	getBackground(index: number): qx_html_Decorator;
	getColor(index: number): qx_theme_classic_Color;
	getColorEven(): any;
	getColorOdd(): any;
	initColorEven(value: any): any;
	initColorOdd(value: any): any;
	resetColorEven(): void;
	resetColorOdd(): void;
	setBackground(index: number, decorator: qx_html_Decorator): void;
	setBackground(index: number, decorator: any): void;
	setColor(index: number, color: qx_theme_classic_Color): void;
	setColor(index: number, color: any): void;
	setColorEven(value: any): any;
	setColorOdd(value: any): any;
}
interface qx_ui_virtual_layer_CellSpanManagerStatic {
	new(rowConfig: qx_ui_virtual_core_Axis, columnConfig: qx_ui_virtual_core_Axis): qx_ui_virtual_layer_CellSpanManager;
}
interface qx_ui_virtual_layer_CellSpanManager extends qx_core_Object {
	__intersectionAsArray(setA: any, setB: any): string;
	_findCellsInRange(key: string, min: number, max: number): any;
	_getColumnPosition(column: number): number;
	_getRowPosition(row: number): number;
	_getSingleCellBounds(cell: any, firstVisibleRow: any, firstVisibleColumn: any): void;
	_getSortedCells(key: string): any;
	_invalidatePositionCache(): void;
	_invalidateSortCache(): void;
	_onColumnConfigChange(e: qx_event_type_Event): void;
	_onRowConfigChange(e: qx_event_type_Event): void;
	addCell(id: string, row: number, column: number, rowSpan: number, columnSpan: number): void;
	computeCellSpanMap(cells: any, firstRow: number, firstColumn: number, rowCount: number, columnCount: number): any;
	findCellsInWindow(firstRow: number, firstColumn: number, rowCount: number, columnCount: number): any;
	getCellBounds(cells: any, firstVisibleRow: any, firstVisibleColumn: any): any;
	removeCell(id: string): void;
}
interface qx_ui_virtual_layer_ColumnStatic {
}
interface qx_ui_virtual_layer_Column extends qx_ui_virtual_layer_AbstractBackground {
	_fullUpdate(firstRow: any, firstColumn: any, rowSizes: any, columnSizes: any): void;
	setColor(index: any, color: any): void;
	updateLayerWindow(firstRow: any, firstColumn: any, rowSizes: any, columnSizes: any): void;
}
interface qx_ui_virtual_layer_GridLinesStatic {
	new(orientation: string, lineColor: qx_theme_classic_Color, lineSize: number): qx_ui_virtual_layer_GridLines;
	new(orientation: string, lineColor: qx_theme_classic_Color, lineSize: any): qx_ui_virtual_layer_GridLines;
}
interface qx_ui_virtual_layer_GridLines extends qx_ui_virtual_layer_Abstract {
	__isLineRendered(index: number): bool;
	__renderHorizontalLines(htmlArr: any[], firstRow: number, rowSizes: any[]): void;
	__renderVerticalLines(htmlArr: any[], firstColumn: number, columnSizes: any[]): void;
	_fullUpdate(firstRow: any, firstColumn: any, rowSizes: any, columnSizes: any): void;
	_updateLayerWindow(firstRow: any, firstColumn: any, rowSizes: any, columnSizes: any): void;
	getDefaultLineColor(): any;
	getDefaultLineSize(): any;
	getLineColor(index: number): string;
	getLineSize(index: number): number;
	initDefaultLineColor(value: any): any;
	initDefaultLineSize(value: any): any;
	isHorizontal(): bool;
	resetDefaultLineColor(): void;
	resetDefaultLineSize(): void;
	setDefaultLineColor(value: any): any;
	setDefaultLineSize(value: any): any;
	setLineColor(index: number, color: qx_theme_classic_Color): void;
	setLineSize(index: number, size: number): void;
}
interface qx_ui_virtual_layer_HtmlCellStatic {
	new(htmlCellProvider: qx_ui_virtual_core_IHtmlCellProvider): qx_ui_virtual_layer_HtmlCell;
}
interface qx_ui_virtual_layer_HtmlCell extends qx_ui_virtual_layer_Abstract {
	_fullUpdate(firstRow: any, firstColumn: any, rowSizes: any, columnSizes: any): void;
	_getCellSizeStyle(width: number, height: number, insetX: number, insetY: number): string;
}
interface qx_ui_virtual_layer_HtmlCellSpanStatic {
	new(htmlCellProvider: qx_ui_virtual_core_IHtmlCellProvider, rowConfig: qx_ui_virtual_core_Axis, columnConfig: qx_ui_virtual_core_Axis): qx_ui_virtual_layer_HtmlCellSpan;
}
interface qx_ui_virtual_layer_HtmlCellSpan extends qx_ui_virtual_layer_HtmlCell {
	__renderCell(htmlArr: string, row: number, column: number, left: number, top: number, width: number, height: number): void;
	_fullUpdate(firstRow: any, firstColumn: any, rowSizes: any, columnSizes: any): void;
	setCellSpan(row: number, column: number, rowSpan: number, columnSpan: number): void;
}
interface qx_ui_virtual_layer_RowStatic {
}
interface qx_ui_virtual_layer_Row extends qx_ui_virtual_layer_AbstractBackground {
	__isRowRendered(index: number): bool;
	_fullUpdate(firstRow: any, firstColumn: any, rowSizes: any, columnSizes: any): void;
	_updateLayerWindow(firstRow: any, firstColumn: any, rowSizes: any, columnSizes: any): void;
	setBackground(index: any, decorator: any): void;
	setColor(index: any, color: any): void;
}
interface qx_ui_virtual_layer_WidgetCellStatic {
	new(widgetCellProvider: qx_ui_virtual_core_IWidgetCellProvider): qx_ui_virtual_layer_WidgetCell;
}
interface qx_ui_virtual_layer_WidgetCell extends qx_ui_virtual_layer_Abstract {
	_activateNotEmptyChild(elementToPool: qx_ui_core_Widget): void;
	_fullUpdate(firstRow: any, firstColumn: any, rowSizes: any, columnSizes: any): void;
	_getSpacer(): qx_ui_core_Spacer;
	_updateLayerWindow(firstRow: any, firstColumn: any, rowSizes: any, columnSizes: any): void;
	getRenderedCellWidget(row: number, column: number): qx_ui_core_LayoutItem;
}
interface qx_ui_virtual_layer_WidgetCellSpanStatic {
	new(widgetCellProvider: qx_ui_virtual_core_IWidgetCellProvider, rowConfig: qx_ui_virtual_core_Axis, columnConfig: qx_ui_virtual_core_Axis): qx_ui_virtual_layer_WidgetCellSpan;
}
interface qx_ui_virtual_layer_WidgetCellSpan extends qx_ui_virtual_layer_Abstract {
	__getCellProviderForNonSpanningCells(): qx_ui_virtual_core_IWidgetCellProvider;
	__updateCellSpanData(firstRow: number, firstColumn: number, rowCount: number, columnCount: number): void;
	__updateCellSpanWidgets(): void;
	_fullUpdate(firstRow: any, firstColumn: any, rowSizes: any, columnSizes: any): void;
	_updateLayerWindow(firstRow: any, firstColumn: any, rowSizes: any, columnSizes: any): void;
	getRenderedCellWidget(row: number, column: number): qx_ui_core_LayoutItem;
	setCellSpan(row: number, column: number, rowSpan: number, columnSpan: number): void;
}
interface qx_ui_virtual_selection_AbstractStatic {
	new(pane: qx_ui_virtual_core_Pane, selectionDelegate: qx_ui_virtual_selection_ISelectionDelegate): qx_ui_virtual_selection_Abstract;
}
interface qx_ui_virtual_selection_Abstract extends qx_ui_core_selection_Abstract {
	_capture(): void;
	_getDimension(): void;
	_getLocation(): void;
	_getScroll(): void;
	_isSelectable(item: any): void;
	_releaseCapture(): void;
	_scrollBy(xoff: any, yoff: any): void;
	_styleSelectable(item: any, type: any, enabled: any): void;
	attachKeyEvents(target: qx_core_Object): void;
	attachListEvents(list: qx_core_Object): void;
	attachMouseEvents(): void;
	detachKeyEvents(target: qx_core_Object): void;
	detachListEvents(list: qx_core_Object): void;
	detatchMouseEvents(): void;
}
interface qx_ui_virtual_selection_CellLinesStatic {
}
interface qx_ui_virtual_selection_CellLines extends qx_ui_virtual_selection_CellRectangle {
	_getSelectableRange(item1: any, item2: any): void;
}
interface qx_ui_virtual_selection_CellRectangleStatic {
}
interface qx_ui_virtual_selection_CellRectangle extends qx_ui_virtual_selection_Abstract {
	_getFirstSelectable(): void;
	_getItemCount(): number;
	_getLastSelectable(): void;
	_getPage(lead: any, up: any): void;
	_getRelatedSelectable(item: any, relation: any): void;
	_getSelectableFromMouseEvent(event: any): void;
	_getSelectableLocationX(item: any): void;
	_getSelectableLocationY(item: any): void;
	_getSelectableRange(item1: any, item2: any): void;
	_scrollItemIntoView(item: any): void;
	_selectableToHashCode(item: any): void;
	getSelectables(all: any): void;
}
interface qx_ui_virtual_selection_ColumnStatic {
}
interface qx_ui_virtual_selection_Column extends qx_ui_virtual_selection_Row {
	_getItemCount(): number;
	_getRelatedSelectable(item: any, relation: any): void;
	_getSelectableFromMouseEvent(event: any): void;
	_getSelectableLocationX(item: any): void;
	_getSelectableLocationY(item: any): void;
	_scrollItemIntoView(item: any): void;
}
interface qx_ui_virtual_selection_ISelectionDelegateStatic {
}
interface qx_ui_virtual_selection_ISelectionDelegate {
	isItemSelectable(item: any): bool;
	styleSelectable(item: any, type: string, wasAdded: bool): void;
}
interface qx_ui_virtual_selection_MModelStatic {
	new(): qx_ui_virtual_selection_MModel;
}
interface qx_ui_virtual_selection_MModel {
	__isSelectionEquals(): bool;
	__replaceSelection(newSelection: qx_data_Array): void;
	__synchronizeSelection(): void;
	_applyDefaultSelection(): void;
	_applyDragSelection(value: bool, old: bool): void;
	_applyQuickSelection(value: bool, old: bool): void;
	_applySelection(value: qx_data_Array, old: qx_data_Array): void;
	_applySelectionMode(value: any, old: any): void;
	_initSelectionManager(): void;
	_onChangeSelection(e: qx_event_type_Data): void;
	_onManagerChangeSelection(e: qx_event_type_Data): void;
	_updateSelection(): void;
	getDragSelection(): any;
	getQuickSelection(): any;
	getSelection(): any;
	getSelectionMode(): any;
	initDragSelection(value: any): any;
	initQuickSelection(value: any): any;
	initSelection(value: any): any;
	initSelectionMode(value: any): any;
	isDragSelection(): bool;
	isQuickSelection(): bool;
	resetDragSelection(): void;
	resetQuickSelection(): void;
	resetSelection(): void;
	resetSelectionMode(): void;
	setDragSelection(value: any): any;
	setQuickSelection(value: any): any;
	setSelection(value: any): any;
	setSelectionMode(value: any): any;
	toggleDragSelection(): bool;
	toggleQuickSelection(): bool;
}
interface qx_ui_virtual_selection_RowStatic {
}
interface qx_ui_virtual_selection_Row extends qx_ui_virtual_selection_Abstract {
	_getFirstSelectable(): void;
	_getItemCount(): number;
	_getLastSelectable(): void;
	_getPage(lead: any, up: any): void;
	_getRelatedSelectable(item: any, relation: any): void;
	_getSelectableFromMouseEvent(event: any): void;
	_getSelectableLocationX(item: any): void;
	_getSelectableLocationY(item: any): void;
	_getSelectableRange(item1: any, item2: any): void;
	_scrollItemIntoView(item: any): void;
	_selectableToHashCode(item: any): void;
	getSelectables(all: any): void;
}
interface qx_ui_window_DesktopStatic {
	new(windowManager: qx_ui_window_IWindowManager): qx_ui_window_Desktop;
}
interface qx_ui_window_Desktop extends qx_ui_core_Widget {
}
interface qx_ui_window_IDesktopStatic {
}
interface qx_ui_window_IDesktop {
	blockContent(zIndex: number): void;
	getWindows(): qx_ui_window_Window;
	isContentBlocked(): bool;
	setWindowManager(manager: qx_ui_window_IWindowManager): void;
	supportsMaximize(): bool;
	unblockContent(): void;
}
interface qx_ui_window_IWindowManagerStatic {
}
interface qx_ui_window_IWindowManager {
	bringToFront(win: qx_ui_window_Window): void;
	changeActiveWindow(active: qx_ui_window_Window, oldActive: qx_ui_window_Window): void;
	sendToBack(win: qx_ui_window_Window): void;
	setDesktop(desktop: qx_ui_window_IDesktop): void;
	updateStack(): void;
}
interface qx_ui_window_ManagerStatic {
}
interface qx_ui_window_Manager extends qx_core_Object {
	bringToFront(win: any): void;
	changeActiveWindow(active: any, oldActive: any): void;
	getDesktop(): qx_ui_window_IDesktop;
	sendToBack(win: any): void;
	setDesktop(desktop: any): void;
	syncWidget(): void;
	updateStack(): void;
}
interface qx_ui_window_MDesktopStatic {
}
interface qx_ui_window_MDesktop {
	_addWindow(win: qx_ui_window_Window): void;
	_afterAddChild(win: any): void;
	_afterRemoveChild(win: any): void;
	_applyActiveWindow(value: qx_ui_window_Window, old: qx_ui_window_Window): void;
	_onChangeActive(e: qx_event_type_Event): void;
	_onChangeModal(e: qx_event_type_Event): void;
	_onChangeVisibility(): void;
	_removeWindow(win: qx_ui_window_Window): void;
	getActiveWindow(): any;
	getWindowManager(): qx_ui_window_IWindowManager;
	getWindows(): qx_ui_window_Window;
	initActiveWindow(value: any): any;
	resetActiveWindow(): void;
	setActiveWindow(value: any): any;
	setWindowManager(manager: qx_ui_window_IWindowManager): void;
	supportsMaximize(): bool;
}
interface qx_ui_window_WindowStatic {
	new(caption: string, icon: string): qx_ui_window_Window;
}
interface qx_ui_window_Window extends qx_ui_core_Widget {
	_applyActive(value: bool, old: bool): void;
	_applyCaptionBarChange(value: any, old: any): void;
	_applyModal(value: bool, old: bool): void;
	_applyShowStatusbar(value: bool, old: bool): void;
	_applyStatus(value: string, old: string): void;
	_createChildControlImpl(id: any, hash: any): void;
	_getContentPaddingTarget(): qx_ui_core_Widget;
	_onCaptionMouseDblClick(e: qx_event_type_Mouse): void;
	_onCloseButtonClick(e: qx_event_type_Mouse): void;
	_onMaximizeButtonClick(e: qx_event_type_Mouse): void;
	_onMinimizeButtonClick(e: qx_event_type_Mouse): void;
	_onRestoreButtonClick(e: qx_event_type_Mouse): void;
	_onWindowEventStop(e: qx_event_type_Event): void;
	_onWindowFocusOut(e: qx_event_type_Focus): void;
	_onWindowMouseDown(e: qx_event_type_Mouse): void;
	_updateCaptionBar(): void;
	center(): void;
	close(): void;
	getActive(): any;
	getAllowClose(): any;
	getAllowMaximize(): any;
	getAllowMinimize(): any;
	getAlwaysOnTop(): any;
	getCaption(): any;
	getChildrenContainer(): qx_ui_container_Composite;
	getIcon(): any;
	getModal(): any;
	getMode(): string;
	getShowClose(): any;
	getShowMaximize(): any;
	getShowMinimize(): any;
	getShowStatusbar(): any;
	getStatus(): any;
	initActive(value: any): any;
	initAllowClose(value: any): any;
	initAllowMaximize(value: any): any;
	initAllowMinimize(value: any): any;
	initAlwaysOnTop(value: any): any;
	initCaption(value: any): any;
	initIcon(value: any): any;
	initModal(value: any): any;
	initShowClose(value: any): any;
	initShowMaximize(value: any): any;
	initShowMinimize(value: any): any;
	initShowStatusbar(value: any): any;
	initStatus(value: any): any;
	isActive(): bool;
	isAllowClose(): bool;
	isAllowMaximize(): bool;
	isAllowMinimize(): bool;
	isAlwaysOnTop(): bool;
	isMaximized(): bool;
	isModal(): bool;
	isShowClose(): bool;
	isShowMaximize(): bool;
	isShowMinimize(): bool;
	isShowStatusbar(): bool;
	maximize(): void;
	minimize(): void;
	moveTo(left: number, top: number): void;
	open(): void;
	resetActive(): void;
	resetAllowClose(): void;
	resetAllowMaximize(): void;
	resetAllowMinimize(): void;
	resetAlwaysOnTop(): void;
	resetCaption(): void;
	resetIcon(): void;
	resetModal(): void;
	resetShowClose(): void;
	resetShowMaximize(): void;
	resetShowMinimize(): void;
	resetShowStatusbar(): void;
	resetStatus(): void;
	restore(): void;
	setActive(value: any): any;
	setAllowClose(value: any): any;
	setAllowMaximize(value: any): any;
	setAllowMinimize(value: any): any;
	setAlwaysOnTop(value: any): any;
	setCaption(value: any): any;
	setIcon(value: any): any;
	setLayoutParent(parent: any): void;
	setModal(value: any): any;
	setShowClose(value: any): any;
	setShowMaximize(value: any): any;
	setShowMinimize(value: any): any;
	setShowStatusbar(value: any): any;
	setStatus(value: any): any;
	toggleActive(): bool;
	toggleAllowClose(): bool;
	toggleAllowMaximize(): bool;
	toggleAllowMinimize(): bool;
	toggleAlwaysOnTop(): bool;
	toggleModal(): bool;
	toggleShowClose(): bool;
	toggleShowMaximize(): bool;
	toggleShowMinimize(): bool;
	toggleShowStatusbar(): bool;
}
interface qx_util_AliasManagerStatic {
	getInstance(): qx_util_AliasManager;
	new(): qx_util_AliasManager;
}
interface qx_util_AliasManager extends qx_util_ValueManager {
	_preprocess(value: string): string;
	add(alias: string, base: string): void;
	getAliases(): any;
	remove(alias: string): void;
	resolve(path: string): string;
}
interface qx_util_Base64Static {
	__getUTF8StringFromBytes(bytes: any[], is8bit: bool): string;
	__translateUTF8(characterCode: number, output: any[], is8bit: bool): void;
	decode(input: string, is8bit: bool): string;
	encode(input: string, is8bit: bool): string;
}
interface qx_util_Base64 {
}
interface qx_util_ColorUtilStatic {
	__hex3StringToRgb(): any[];
	__hex6StringToRgb(): any[];
	__rgbaStringToRgb(): any[];
	__rgbStringToRgb(): any[];
	cssStringToRgb(str: string): any[];
	hex3StringToHex6String(value: string): string;
	hex3StringToRgb(value: string): any[];
	hex6StringToRgb(value: string): any[];
	hexStringToRgb(value: string): any[];
	hsbToRgb(hsb: number): number;
	isCssString(str: string): bool;
	isHex3String(str: string): bool;
	isHex6String(str: string): bool;
	isNamedColor(value: string): bool;
	isRgbaString(str: string): bool;
	isRgbString(str: string): bool;
	isSystemColor(value: string): bool;
	isThemedColor(value: string): bool;
	isValidPropertyValue(str: string): bool;
	randomColor(): string;
	rgbToHexString(rgb: any[]): string;
	rgbToHsb(rgb: number): any[];
	rgbToRgbString(rgb: any[]): string;
	stringToRgb(str: string): any[];
	stringToRgbString(str: string): string;
	supportsThemes(): bool;
}
interface qx_util_ColorUtil {
}
interface qx_util_DeferredCallStatic {
	new(callback: qx_lang_Function, context: any): qx_util_DeferredCall;
}
interface qx_util_DeferredCall extends qx_core_Object {
	call(): void;
	cancel(): void;
	schedule(): void;
}
interface qx_util_DeferredCallManagerStatic {
	getInstance(): qx_util_DeferredCallManager;
	new(): qx_util_DeferredCallManager;
}
interface qx_util_DeferredCallManager extends qx_core_Object {
	__timeout(): void;
	cancel(deferredCall: qx_util_DeferredCall): void;
	schedule(deferredCall: qx_util_DeferredCall): void;
}
interface qx_util_DelegateStatic {
	containsMethod(delegate: any, specificMethod: string): bool;
	getMethod(delegate: any, specificMethod: string): qx_lang_Function;
}
interface qx_util_Delegate {
}
interface qx_util_DisposeUtilStatic {
	__isChildrenContainer(obj: any): bool;
	_collectContainerChildren(container: qx_ui_container_Composite, arr: any[]): void;
	_collectContainerChildren(container: any, arr: any[]): void;
	_collectContainerChildren(container: qx_ui_container_Scroll, arr: any[]): void;
	_collectContainerChildren(container: qx_ui_container_SlideBar, arr: any[]): void;
	_collectContainerChildren(container: qx_ui_container_Stack, arr: any[]): void;
	destroyContainer(container: qx_ui_container_Composite): void;
	destroyContainer(container: any): void;
	destroyContainer(container: qx_ui_container_Scroll): void;
	destroyContainer(container: qx_ui_container_SlideBar): void;
	destroyContainer(container: qx_ui_container_Stack): void;
	disposeArray(obj: any, field: string): void;
	disposeMap(obj: any, field: string): void;
	disposeObjects(obj: any, arr: any[], disposeSingletons: bool): void;
	disposeTriggeredBy(disposeMe: any, trigger: any): void;
}
interface qx_util_DisposeUtil {
}
interface qx_util_EditDistanceStatic {
	__computeEditOperations(distance: number, dataA: any[], dataB: any[]): any;
	__computeLevenshteinDistance(dataA: any[], dataB: any[]): number;
	getEditOperations(dataA: any[], dataB: any[]): any;
}
interface qx_util_EditDistance {
}
interface qx_util_ExtendedColorStatic {
	isExtendedColor(value: string): bool;
	toRgb(value: string): any[];
	toRgbString(value: string): string;
}
interface qx_util_ExtendedColor {
}
interface qx_util_format_DateFormatStatic {
	getDateInstance(): string;
	getDateTimeInstance(): string;
	new(format: string, locale: string): qx_util_format_DateFormat;
	new(format: any, locale: string): qx_util_format_DateFormat;
}
interface qx_util_format_DateFormat extends qx_core_Object {
	__fillNumber(number: number, minSize: number): string;
	__getDayInYear(date: qx_lang_Date): number;
	__getMonthAndDayFromDayOfYear(dayOfYear: number, year: number): any;
	__getWeekInMonth(date: qx_lang_Date): number;
	__getWeekInYear(date: qx_lang_Date): number;
	__getWeekYear(date: qx_lang_Date): number;
	__getYearFromWeekYearAndMonth(weekYear: number, month: number, dayOfMonth: number): number;
	__initFormatTree(): void;
	__initParseFeed(): any;
	__initParseRules(): void;
	__isLeapYear(year: number): bool;
	__isRuleForWildcard(rule: any, wildcardChar: string, wildcardSize: number): bool;
	__thursdayOfSameWeek(date: qx_lang_Date): qx_lang_Date;
	_applyLocale(value: string, old: string): void;
	format(date: qx_lang_Date): string;
	getLocale(): any;
	initLocale(value: any): any;
	parse(dateStr: string): qx_lang_Date;
	resetLocale(): void;
	setLocale(value: any): any;
}
interface qx_util_format_IFormatStatic {
}
interface qx_util_format_IFormat {
	format(obj: any): string;
	parse(str: string): any;
}
interface qx_util_format_NumberFormatStatic {
	new(locale: string): qx_util_format_NumberFormat;
}
interface qx_util_format_NumberFormat extends qx_core_Object {
	format(num: number): string;
	getGroupingUsed(): any;
	getMaximumFractionDigits(): any;
	getMaximumIntegerDigits(): any;
	getMinimumFractionDigits(): any;
	getMinimumIntegerDigits(): any;
	getPostfix(): any;
	getPrefix(): any;
	initGroupingUsed(value: any): any;
	initMaximumFractionDigits(value: any): any;
	initMaximumIntegerDigits(value: any): any;
	initMinimumFractionDigits(value: any): any;
	initMinimumIntegerDigits(value: any): any;
	initPostfix(value: any): any;
	initPrefix(value: any): any;
	isGroupingUsed(): bool;
	parse(str: string): qx_ui_decoration_Double;
	resetGroupingUsed(): void;
	resetMaximumFractionDigits(): void;
	resetMaximumIntegerDigits(): void;
	resetMinimumFractionDigits(): void;
	resetMinimumIntegerDigits(): void;
	resetPostfix(): void;
	resetPrefix(): void;
	setGroupingUsed(value: any): any;
	setMaximumFractionDigits(value: any): any;
	setMaximumIntegerDigits(value: any): any;
	setMinimumFractionDigits(value: any): any;
	setMinimumIntegerDigits(value: any): any;
	setPostfix(value: any): any;
	setPrefix(value: any): any;
	toggleGroupingUsed(): bool;
}
interface qx_util_fsm_FiniteStateMachineStatic {
	new(machineName: string): qx_util_fsm_FiniteStateMachine;
}
interface qx_util_fsm_FiniteStateMachine extends qx_core_Object {
	__processEvents(): void;
	__run(event: qx_event_type_Event): bool;
	_getInternalData(): any;
	addObject(friendlyName: string, obj: any, groupNames: any[]): void;
	addState(state: qx_util_fsm_State): void;
	displayAllObjects(): void;
	enqueueEvent(event: qx_event_type_Event, bAddAtHead: bool): void;
	eventListener(event: qx_event_type_Event): void;
	fireImmediateEvent(type: string, target: qx_core_Object, data: any): void;
	getDebugFlags(): any;
	getFriendlyName(obj: any): string;
	getGroupObjects(groupName: string): any[];
	getMaxSavedStates(): any;
	getName(): any;
	getNextState(): any;
	getObject(friendlyName: string): any;
	getPreviousState(): any;
	getState(): any;
	initDebugFlags(value: any): any;
	initMaxSavedStates(value: any): any;
	initName(value: any): any;
	initNextState(value: any): any;
	initPreviousState(value: any): any;
	initState(value: any): any;
	popState(): string;
	postponeEvent(event: qx_event_type_Event): void;
	pushState(state: bool): void;
	pushState(state: string): void;
	removeObject(friendlyName: string): void;
	replaceState(state: qx_util_fsm_State, bDispose: bool): any;
	resetDebugFlags(): void;
	resetMaxSavedStates(): void;
	resetName(): void;
	resetNextState(): void;
	resetPreviousState(): void;
	resetState(): void;
	scheduleEvent(type: string, target: qx_core_Object, data: any, timeout: number): void;
	scheduleEvent(type: string, target: qx_core_Object, data: any, timeout: any): void;
	setDebugFlags(value: any): any;
	setMaxSavedStates(value: any): any;
	setName(value: any): any;
	setNextState(value: any): any;
	setPreviousState(value: any): any;
	setState(value: any): any;
	start(): void;
}
interface qx_util_fsm_StateStatic {
	_commonTransformAutoActions(actionType: string, value: any, context: any): qx_lang_Function;
	new(stateName: string, stateInfo: any): qx_util_fsm_State;
}
interface qx_util_fsm_State extends qx_core_Object {
	__bindIfFunction(f: qx_lang_Function, context: any): void;
	__bindIfFunction(f: any, context: any): void;
	__transformAutoActionsAfterOnentry(value: any): any;
	__transformAutoActionsAfterOnexit(value: any): any;
	__transformAutoActionsBeforeOnentry(value: any): any;
	__transformAutoActionsBeforeOnexit(value: any): any;
	__transformEvents(value: any): any;
	__transformName(value: any): any;
	__transformOnentry(value: any): any;
	__transformOnexit(value: any): any;
	addTransition(trans: qx_util_fsm_Transition): void;
	getAutoActionsAfterOnentry(): any;
	getAutoActionsAfterOnexit(): any;
	getAutoActionsBeforeOnentry(): any;
	getAutoActionsBeforeOnexit(): any;
	getEvents(): any;
	getName(): any;
	getOnentry(): any;
	getOnexit(): any;
	initAutoActionsAfterOnentry(value: any): any;
	initAutoActionsAfterOnexit(value: any): any;
	initAutoActionsBeforeOnentry(value: any): any;
	initAutoActionsBeforeOnexit(value: any): any;
	initEvents(value: any): any;
	initName(value: any): any;
	initOnentry(value: any): any;
	initOnexit(value: any): any;
	resetAutoActionsAfterOnentry(): void;
	resetAutoActionsAfterOnexit(): void;
	resetAutoActionsBeforeOnentry(): void;
	resetAutoActionsBeforeOnexit(): void;
	resetEvents(): void;
	resetName(): void;
	resetOnentry(): void;
	resetOnexit(): void;
	setAutoActionsAfterOnentry(value: any): any;
	setAutoActionsAfterOnexit(value: any): any;
	setAutoActionsBeforeOnentry(value: any): any;
	setAutoActionsBeforeOnexit(value: any): any;
	setEvents(value: any): any;
	setName(value: any): any;
	setOnentry(value: any): any;
	setOnexit(value: any): any;
}
interface qx_util_fsm_TransitionStatic {
	new(transitionName: string, transitionInfo: any): qx_util_fsm_Transition;
}
interface qx_util_fsm_Transition extends qx_core_Object {
	__bindIfFunction(f: qx_lang_Function, context: any): void;
	__bindIfFunction(f: any, context: any): void;
	__transformAutoActionsAfterOntransition(value: any): qx_lang_Function;
	__transformAutoActionsBeforeOntransition(value: any): qx_lang_Function;
	__transformNextState(value: any): qx_lang_Function;
	__transformOntransition(value: any): qx_lang_Function;
	__transformPredicate(value: any): qx_lang_Function;
	getAutoActionsAfterOntransition(): any;
	getAutoActionsBeforeOntransition(): any;
	getName(): any;
	getNextState(): any;
	getOntransition(): any;
	getPredicate(): any;
	initAutoActionsAfterOntransition(value: any): any;
	initAutoActionsBeforeOntransition(value: any): any;
	initName(value: any): any;
	initNextState(value: any): any;
	initOntransition(value: any): any;
	initPredicate(value: any): any;
	resetAutoActionsAfterOntransition(): void;
	resetAutoActionsBeforeOntransition(): void;
	resetName(): void;
	resetNextState(): void;
	resetOntransition(): void;
	resetPredicate(): void;
	setAutoActionsAfterOntransition(value: any): any;
	setAutoActionsBeforeOntransition(value: any): any;
	setName(value: any): any;
	setNextState(value: any): any;
	setOntransition(value: any): any;
	setPredicate(value: any): any;
}
interface qx_util_LibraryManagerStatic {
	getInstance(): qx_util_LibraryManager;
}
interface qx_util_LibraryManager extends qx_core_Object {
	get(namespace: string, key: string): any;
	has(namespace: string): bool;
	set(namespace: string, key: string, value: any): void;
}
interface qx_util_ObjectPoolStatic {
	new(size: number): qx_util_ObjectPool;
}
interface qx_util_ObjectPool extends qx_core_Object {
	getObject(clazz: qx_Class): any;
	getSize(): any;
	initSize(value: any): any;
	poolObject(obj: any): void;
	resetSize(): void;
	setSize(value: any): any;
}
interface qx_util_OOUtilStatic {
	classIsDefined(name: string): bool;
	getByInterface(clazz: qx_Class, iface: qx_Interface): qx_Class;
	getEventType(clazz: qx_Class, name: string): any;
	getMixins(clazz: qx_Class): qx_Mixin;
	getPropertyDefinition(clazz: qx_Class, name: string): any;
	hasInterface(clazz: qx_Class, iface: qx_Interface): bool;
	hasProperty(clazz: qx_Class, name: string): bool;
	supportsEvent(clazz: qx_Class, name: string): bool;
}
interface qx_util_OOUtil {
}
interface qx_util_PermutationStatic {
	permute(options: any, callback: qx_lang_Function, context: any): void;
}
interface qx_util_Permutation {
}
interface qx_util_placement_AbstractAxisStatic {
	_isInRange(start: number, size: number, areaSize: number): bool;
	_moveToEdgeAndAlign(size: number, target: any, offsets: any, position: string): number;
	computeStart(size: number, target: any, offsets: any, areaSize: number, position: string): number;
}
interface qx_util_placement_AbstractAxis {
}
interface qx_util_placement_BestFitAxisStatic {
	computeStart(size: number, target: any, offsets: any, areaSize: number, position: string): number;
}
interface qx_util_placement_BestFitAxis {
}
interface qx_util_placement_DirectAxisStatic {
	computeStart(size: number, target: any, offsets: any, areaSize: number, position: string): number;
}
interface qx_util_placement_DirectAxis {
}
interface qx_util_placement_KeepAlignAxisStatic {
	computeStart(size: number, target: any, offsets: any, areaSize: number, position: string): number;
}
interface qx_util_placement_KeepAlignAxis {
}
interface qx_util_placement_PlacementStatic {
	__getAxis(mode: string): qx_util_placement_AbstractAxis;
	compute(size: any, area: any, target: any, offsets: any, position: string, modeX: string, modeY: string): any;
	new(): qx_util_placement_Placement;
}
interface qx_util_placement_Placement extends qx_core_Object {
	__getPositionX(): string;
	__getPositionY(): string;
	compute(size: any, area: any, target: any, offsets: any): any;
	getAlign(): any;
	getAxisX(): any;
	getAxisY(): any;
	getEdge(): any;
	initAlign(value: any): any;
	initAxisX(value: any): any;
	initAxisY(value: any): any;
	initEdge(value: any): any;
	resetAlign(): void;
	resetAxisX(): void;
	resetAxisY(): void;
	resetEdge(): void;
	setAlign(value: any): any;
	setAxisX(value: any): any;
	setAxisY(value: any): any;
	setEdge(value: any): any;
}
interface qx_util_PropertyUtilStatic {
	deleteInitValue(object: any, propertyName: string): void;
	deleteThemeValue(object: any, propertyName: string): void;
	deleteUserValue(object: any, propertyName: string): void;
	getAllProperties(clazz: qx_Class): any;
	getInitValue(object: any, propertyName: string): any;
	getProperties(clazz: qx_Class): any;
	getThemeValue(object: any, propertyName: string): any;
	getUserValue(object: any, propertyName: string): any;
	resetThemed(object: any, propertyName: string): void;
	setInitValue(object: any, propertyName: string, value: any): void;
	setThemed(object: any, propertyName: string, value: any): void;
	setThemeValue(object: any, propertyName: string, value: any): void;
	setUserValue(object: any, propertyName: string, value: any): void;
}
interface qx_util_PropertyUtil {
}
interface qx_util_RequestStatic {
	isCrossDomain(url: string): bool;
	isSuccessful(status: number): bool;
	methodAllowsRequestBody(method: string): bool;
}
interface qx_util_Request {
}
interface qx_util_ResourceManagerStatic {
	getInstance(): qx_util_ResourceManager;
	new(): qx_util_ResourceManager;
}
interface qx_util_ResourceManager extends qx_core_Object {
	getCombinedFormat(id: string): string;
	getData(id: string): any[];
	getImageFormat(id: string): string;
	getImageHeight(id: string): number;
	getImageWidth(id: string): number;
	has(id: string): bool;
	toDataUri(resid: string): string;
	toUri(id: string): string;
}
interface qx_util_SerializerStatic {
	__toUriParameter(name: string, value: any, qxSerializer: qx_lang_Function): string;
	toJson(object: qx_core_Object, qxSerializer: qx_lang_Function, dateFormat: qx_util_format_DateFormat): string;
	toNativeObject(object: qx_core_Object, qxSerializer: qx_lang_Function, dateFormat: qx_util_format_DateFormat): string;
	toUriParameter(object: qx_core_Object, qxSerializer: qx_lang_Function, dateFormat: qx_util_format_DateFormat): string;
}
interface qx_util_Serializer {
}
interface qx_util_StringBuilderStatic {
	new(length_or_items: number): qx_util_StringBuilder;
	new(length_or_items: any): qx_util_StringBuilder;
}
interface qx_util_StringBuilder extends qx_type_BaseArray {
	add(varargs: string): void;
	clear(): void;
	get(): string;
	isEmpty(): bool;
	size(): number;
}
interface qx_util_StringEscapeStatic {
	escape(str: string, charCodeToEntities: any): string;
	unescape(str: string, entitiesToCharCode: any): string;
}
interface qx_util_StringEscape {
}
interface qx_util_StringSplitStatic {
	split(str: string, separator: RegExp, limit: number): string;
}
interface qx_util_StringSplit {
}
interface qx_util_TimerManagerStatic {
	getInstance(): qx_util_TimerManager;
}
interface qx_util_TimerManager extends qx_core_Object {
	__insertNewTimer(expireAt: number, timerId: number): void;
	__processQueue(): void;
	start(callback: qx_lang_Function, recurTime: number, context: qx_core_Object, userData: any, initialTime: number): number;
	start(callback: qx_lang_Function, recurTime: number, context: qx_core_Object, userData: any, initialTime: any): number;
	start(callback: qx_lang_Function, recurTime: number, context: any, userData: any, initialTime: number): number;
	start(callback: qx_lang_Function, recurTime: number, context: any, userData: any, initialTime: any): number;
	start(callback: qx_lang_Function, recurTime: any, context: qx_core_Object, userData: any, initialTime: number): number;
	start(callback: qx_lang_Function, recurTime: any, context: qx_core_Object, userData: any, initialTime: any): number;
	start(callback: qx_lang_Function, recurTime: any, context: any, userData: any, initialTime: number): number;
	start(callback: qx_lang_Function, recurTime: any, context: any, userData: any, initialTime: any): number;
	stop(timerId: number): bool;
}
interface qx_util_UriStatic {
	appendParamsToUrl(url: string, params: string): string;
	getAbsolute(uri: string): string;
	parseUri(str: string, strict: bool): any;
}
interface qx_util_Uri {
}
interface qx_util_ValidateStatic {
	checkColor(value: any, formItem: qx_ui_form_IForm, errorMessage: string): void;
	checkEmail(value: any, formItem: qx_ui_form_IForm, errorMessage: string): void;
	checkNumber(value: any, formItem: qx_ui_form_IForm, errorMessage: string): void;
	checkString(value: any, formItem: qx_ui_form_IForm, errorMessage: string): void;
	checkUrl(value: any, formItem: qx_ui_form_IForm, errorMessage: string): void;
	color(errorMessage: string): qx_lang_Function;
	email(errorMessage: string): qx_lang_Function;
	inArray(array: any[], errorMessage: string): qx_lang_Function;
	number(errorMessage: string): qx_lang_Function;
	range(from: number, to: number, errorMessage: string): qx_lang_Function;
	regExp(reg: RegExp, errorMessage: string): qx_lang_Function;
	string(errorMessage: string): qx_lang_Function;
	url(errorMessage: string): qx_lang_Function;
}
interface qx_util_Validate {
}
interface qx_util_ValueManagerStatic {
	new(): qx_util_ValueManager;
}
interface qx_util_ValueManager extends qx_core_Object {
	_getDynamic(): any;
	_setDynamic(value: any): void;
	isDynamic(value: string): bool;
	resolve(value: string): any;
	resolveDynamic(value: string): any;
}
interface qx_xml_DocumentStatic {
	create(namespaceUri: string, qualifiedName: string): qx_xml_Document;
	fromString(str: string): qx_xml_Document;
	isXmlDocument(elem: qx_xml_Document): bool;
	isXmlDocument(elem: Element): bool;
}
interface qx_xml_Document {
}
interface qx_xml_ElementStatic {
	createSubElementNS(document: qx_xml_Document, parent: Element, name: string, namespaceUri: string): Element;
	getAttributeNS(element: Element, namespaceUri: string, name: string): string;
	getElementsByTagNameNS(element: Element, namespaceURI: any, tagname: string): Element;
	getElementsByTagNameNS(element: qx_xml_Document, namespaceURI: any, tagname: string): Element;
	getSingleNodeText(element: Element, query: string): string;
	getSingleNodeText(element: qx_xml_Document, query: string): string;
	selectNodes(element: Element, query: string, namespaces: any): Element;
	selectNodes(element: qx_xml_Document, query: string, namespaces: any): Element;
	selectSingleNode(element: Element, query: string, namespaces: any): Element;
	selectSingleNode(element: qx_xml_Document, query: string, namespaces: any): Element;
	serialize(element: Element): string;
	serialize(element: qx_xml_Document): string;
	setAttributeNS(document: qx_xml_Document, element: Element, namespaceUri: string, name: string, value: string): void;
}
interface qx_xml_Element {
}
interface qx_xml_StringStatic {
	escape(str: string): string;
	unescape(str: string): string;
}
interface qx_xml_String {
}
declare var q: qStatic;
interface qx_applicationStatic {
	AbstractGui: qx_application_AbstractGuiStatic;
	Basic: qx_application_BasicStatic;
	IApplication: qx_application_IApplicationStatic;
	Inline: qx_application_InlineStatic;
	Mobile: qx_application_MobileStatic;
	Native: qx_application_NativeStatic;
	Routing: qx_application_RoutingStatic;
	Standalone: qx_application_StandaloneStatic;
}
interface qx_bom_clientStatic {
	Browser: qx_bom_client_BrowserStatic;
	Css: qx_bom_client_CssStatic;
	CssAnimation: qx_bom_client_CssAnimationStatic;
	CssTransform: qx_bom_client_CssTransformStatic;
	Device: qx_bom_client_DeviceStatic;
	EcmaScript: qx_bom_client_EcmaScriptStatic;
	Engine: qx_bom_client_EngineStatic;
	Event: qx_bom_client_EventStatic;
	Flash: qx_bom_client_FlashStatic;
	Html: qx_bom_client_HtmlStatic;
	Json: qx_bom_client_JsonStatic;
	Locale: qx_bom_client_LocaleStatic;
	OperatingSystem: qx_bom_client_OperatingSystemStatic;
	PhoneGap: qx_bom_client_PhoneGapStatic;
	Plugin: qx_bom_client_PluginStatic;
	Runtime: qx_bom_client_RuntimeStatic;
	Scroll: qx_bom_client_ScrollStatic;
	Stylesheet: qx_bom_client_StylesheetStatic;
	Transport: qx_bom_client_TransportStatic;
	Xml: qx_bom_client_XmlStatic;
}
interface qx_bom_elementStatic {
	Animation: qx_bom_element_AnimationStatic;
	AnimationCss: qx_bom_element_AnimationCssStatic;
	AnimationHandle: qx_bom_element_AnimationHandleStatic;
	AnimationJs: qx_bom_element_AnimationJsStatic;
	Attribute: qx_bom_element_AttributeStatic;
	Background: qx_bom_element_BackgroundStatic;
	BoxSizing: qx_bom_element_BoxSizingStatic;
	Class: qx_bom_element_ClassStatic;
	Clip: qx_bom_element_ClipStatic;
	Cursor: qx_bom_element_CursorStatic;
	Dataset: qx_bom_element_DatasetStatic;
	Decoration: qx_bom_element_DecorationStatic;
	Dimension: qx_bom_element_DimensionStatic;
	Location: qx_bom_element_LocationStatic;
	Opacity: qx_bom_element_OpacityStatic;
	Overflow: qx_bom_element_OverflowStatic;
	Scroll: qx_bom_element_ScrollStatic;
	Style: qx_bom_element_StyleStatic;
	Transform: qx_bom_element_TransformStatic;
}
interface qx_bom_htmlarea_managerStatic {
	Command: qx_bom_htmlarea_manager_CommandStatic;
	UndoRedo: qx_bom_htmlarea_manager_UndoRedoStatic;
}
interface qx_bom_htmlareaStatic {
	HtmlArea: qx_bom_htmlarea_HtmlAreaStatic;
	manager: qx_bom_htmlarea_managerStatic;
}
interface qx_bom_mediaStatic {
	Abstract: qx_bom_media_AbstractStatic;
	Audio: qx_bom_media_AudioStatic;
	Video: qx_bom_media_VideoStatic;
}
interface qx_bom_requestStatic {
	IRequest: qx_bom_request_IRequestStatic;
	Jsonp: qx_bom_request_JsonpStatic;
	Script: qx_bom_request_ScriptStatic;
	Xhr: qx_bom_request_XhrStatic;
}
interface qx_bom_storageStatic {
	Memory: qx_bom_storage_MemoryStatic;
	UserData: qx_bom_storage_UserDataStatic;
	Web: qx_bom_storage_WebStatic;
}
interface qx_bom_webfontsStatic {
	Manager: qx_bom_webfonts_ManagerStatic;
	Validator: qx_bom_webfonts_ValidatorStatic;
	WebFont: qx_bom_webfonts_WebFontStatic;
}
interface qx_bomStatic {
	Blocker: qx_bom_BlockerStatic;
	client: qx_bom_clientStatic;
	Collection: qx_bom_CollectionStatic;
	Cookie: qx_bom_CookieStatic;
	Document: qx_bom_DocumentStatic;
	element: qx_bom_elementStatic;
	Element: qx_bom_ElementStatic;
	Event: qx_bom_EventStatic;
	FileReader: qx_bom_FileReaderStatic;
	Flash: qx_bom_FlashStatic;
	Font: qx_bom_FontStatic;
	GeoLocation: qx_bom_GeoLocationStatic;
	HashHistory: qx_bom_HashHistoryStatic;
	History: qx_bom_HistoryStatic;
	Html: qx_bom_HtmlStatic;
	htmlarea: qx_bom_htmlareaStatic;
	Iframe: qx_bom_IframeStatic;
	IframeHistory: qx_bom_IframeHistoryStatic;
	Input: qx_bom_InputStatic;
	Label: qx_bom_LabelStatic;
	Lifecycle: qx_bom_LifecycleStatic;
	media: qx_bom_mediaStatic;
	NativeHistory: qx_bom_NativeHistoryStatic;
	Range: qx_bom_RangeStatic;
	request: qx_bom_requestStatic;
	Selection: qx_bom_SelectionStatic;
	Selector: qx_bom_SelectorStatic;
	Shortcut: qx_bom_ShortcutStatic;
	Storage: qx_bom_StorageStatic;
	storage: qx_bom_storageStatic;
	String: qx_bom_StringStatic;
	Style: qx_bom_StyleStatic;
	Stylesheet: qx_bom_StylesheetStatic;
	Template: qx_bom_TemplateStatic;
	Viewport: qx_bom_ViewportStatic;
	Vml: qx_bom_VmlStatic;
	webfonts: qx_bom_webfontsStatic;
	WebWorker: qx_bom_WebWorkerStatic;
	Window: qx_bom_WindowStatic;
}
interface qx_coreStatic {
	Aspect: qx_core_AspectStatic;
	Assert: qx_core_AssertStatic;
	AssertionError: qx_core_AssertionErrorStatic;
	BaseInit: qx_core_BaseInitStatic;
	Environment: qx_core_EnvironmentStatic;
	GlobalError: qx_core_GlobalErrorStatic;
	Init: qx_core_InitStatic;
	MAssert: qx_core_MAssertStatic;
	MBindTo: qx_core_MBindToStatic;
	MEvents: qx_core_MEventsStatic;
	MLogging: qx_core_MLoggingStatic;
	MProperty: qx_core_MPropertyStatic;
	Object: qx_core_ObjectStatic;
	ObjectRegistry: qx_core_ObjectRegistryStatic;
	Property: qx_core_PropertyStatic;
	ValidationError: qx_core_ValidationErrorStatic;
	WindowError: qx_core_WindowErrorStatic;
}
interface qx_data_controller_websiteStatic {
	List: qx_data_controller_website_ListStatic;
}
interface qx_data_controllerStatic {
	Form: qx_data_controller_FormStatic;
	IControllerDelegate: qx_data_controller_IControllerDelegateStatic;
	ISelection: qx_data_controller_ISelectionStatic;
	List: qx_data_controller_ListStatic;
	MSelection: qx_data_controller_MSelectionStatic;
	Object: qx_data_controller_ObjectStatic;
	Tree: qx_data_controller_TreeStatic;
	website: qx_data_controller_websiteStatic;
}
interface qx_data_marshalStatic {
	IMarshaler: qx_data_marshal_IMarshalerStatic;
	IMarshalerDelegate: qx_data_marshal_IMarshalerDelegateStatic;
	Json: qx_data_marshal_JsonStatic;
	MEventBubbling: qx_data_marshal_MEventBubblingStatic;
}
interface qx_data_storeStatic {
	IStoreDelegate: qx_data_store_IStoreDelegateStatic;
	Json: qx_data_store_JsonStatic;
	Jsonp: qx_data_store_JsonpStatic;
	Offline: qx_data_store_OfflineStatic;
	Rest: qx_data_store_RestStatic;
	Yql: qx_data_store_YqlStatic;
}
interface qx_dataStatic {
	Array: qx_data_ArrayStatic;
	controller: qx_data_controllerStatic;
	Conversion: qx_data_ConversionStatic;
	IListData: qx_data_IListDataStatic;
	marshal: qx_data_marshalStatic;
	MBinding: qx_data_MBindingStatic;
	SingleValueBinding: qx_data_SingleValueBindingStatic;
	store: qx_data_storeStatic;
}
interface qx_dev_unitStatic {
	AbstractTestSuite: qx_dev_unit_AbstractTestSuiteStatic;
	AsyncWrapper: qx_dev_unit_AsyncWrapperStatic;
	JsUnitTestResult: qx_dev_unit_JsUnitTestResultStatic;
	MeasurementResult: qx_dev_unit_MeasurementResultStatic;
	MMeasure: qx_dev_unit_MMeasureStatic;
	MMock: qx_dev_unit_MMockStatic;
	MRequirements: qx_dev_unit_MRequirementsStatic;
	MTestLoader: qx_dev_unit_MTestLoaderStatic;
	RequirementError: qx_dev_unit_RequirementErrorStatic;
	Sinon: qx_dev_unit_SinonStatic;
	TestCase: qx_dev_unit_TestCaseStatic;
	TestClass: qx_dev_unit_TestClassStatic;
	TestFunction: qx_dev_unit_TestFunctionStatic;
	TestLoader: qx_dev_unit_TestLoaderStatic;
	TestLoaderBasic: qx_dev_unit_TestLoaderBasicStatic;
	TestLoaderInline: qx_dev_unit_TestLoaderInlineStatic;
	TestLoaderNative: qx_dev_unit_TestLoaderNativeStatic;
	TestResult: qx_dev_unit_TestResultStatic;
	TestSuite: qx_dev_unit_TestSuiteStatic;
}
interface qx_devStatic {
	Debug: qx_dev_DebugStatic;
	ObjectSummary: qx_dev_ObjectSummaryStatic;
	Profile: qx_dev_ProfileStatic;
	StackTrace: qx_dev_StackTraceStatic;
	Tokenizer: qx_dev_TokenizerStatic;
	unit: qx_dev_unitStatic;
}
interface qx_domStatic {
	Element: qx_dom_ElementStatic;
	Hierarchy: qx_dom_HierarchyStatic;
	Node: qx_dom_NodeStatic;
}
interface qx_event_dispatchStatic {
	AbstractBubbling: qx_event_dispatch_AbstractBubblingStatic;
	Direct: qx_event_dispatch_DirectStatic;
	DomBubbling: qx_event_dispatch_DomBubblingStatic;
	MouseCapture: qx_event_dispatch_MouseCaptureStatic;
}
interface qx_event_handlerStatic {
	Appear: qx_event_handler_AppearStatic;
	Application: qx_event_handler_ApplicationStatic;
	Capture: qx_event_handler_CaptureStatic;
	DragDrop: qx_event_handler_DragDropStatic;
	Element: qx_event_handler_ElementStatic;
	ElementResize: qx_event_handler_ElementResizeStatic;
	Focus: qx_event_handler_FocusStatic;
	Iframe: qx_event_handler_IframeStatic;
	Input: qx_event_handler_InputStatic;
	Keyboard: qx_event_handler_KeyboardStatic;
	Mouse: qx_event_handler_MouseStatic;
	Object: qx_event_handler_ObjectStatic;
	Offline: qx_event_handler_OfflineStatic;
	Orientation: qx_event_handler_OrientationStatic;
	OrientationCore: qx_event_handler_OrientationCoreStatic;
	Touch: qx_event_handler_TouchStatic;
	TouchCore: qx_event_handler_TouchCoreStatic;
	Transition: qx_event_handler_TransitionStatic;
	UserAction: qx_event_handler_UserActionStatic;
	Window: qx_event_handler_WindowStatic;
}
interface qx_event_messageStatic {
	Bus: qx_event_message_BusStatic;
	Message: qx_event_message_MessageStatic;
}
interface qx_event_typeStatic {
	Data: qx_event_type_DataStatic;
	Dom: qx_event_type_DomStatic;
	Drag: qx_event_type_DragStatic;
	Event: qx_event_type_EventStatic;
	Focus: qx_event_type_FocusStatic;
	GeoPosition: qx_event_type_GeoPositionStatic;
	KeyInput: qx_event_type_KeyInputStatic;
	KeySequence: qx_event_type_KeySequenceStatic;
	Mouse: qx_event_type_MouseStatic;
	MouseWheel: qx_event_type_MouseWheelStatic;
	Native: qx_event_type_NativeStatic;
	Orientation: qx_event_type_OrientationStatic;
	Rest: qx_event_type_RestStatic;
	Swipe: qx_event_type_SwipeStatic;
	Tap: qx_event_type_TapStatic;
	Touch: qx_event_type_TouchStatic;
}
interface qx_event_utilStatic {
	Keyboard: qx_event_util_KeyboardStatic;
}
interface qx_eventStatic {
	AcceleratingTimer: qx_event_AcceleratingTimerStatic;
	dispatch: qx_event_dispatchStatic;
	Emitter: qx_event_EmitterStatic;
	GlobalError: qx_event_GlobalErrorStatic;
	handler: qx_event_handlerStatic;
	Idle: qx_event_IdleStatic;
	IEventDispatcher: qx_event_IEventDispatcherStatic;
	IEventHandler: qx_event_IEventHandlerStatic;
	Manager: qx_event_ManagerStatic;
	message: qx_event_messageStatic;
	Messaging: qx_event_MessagingStatic;
	Pool: qx_event_PoolStatic;
	Registration: qx_event_RegistrationStatic;
	Timer: qx_event_TimerStatic;
	type: qx_event_typeStatic;
	util: qx_event_utilStatic;
}
interface qx_fx_effect_combinationStatic {
	ColorFlow: qx_fx_effect_combination_ColorFlowStatic;
	Drop: qx_fx_effect_combination_DropStatic;
	Fold: qx_fx_effect_combination_FoldStatic;
	Grow: qx_fx_effect_combination_GrowStatic;
	Puff: qx_fx_effect_combination_PuffStatic;
	Pulsate: qx_fx_effect_combination_PulsateStatic;
	Shake: qx_fx_effect_combination_ShakeStatic;
	Shrink: qx_fx_effect_combination_ShrinkStatic;
	Switch: qx_fx_effect_combination_SwitchStatic;
}
interface qx_fx_effect_coreStatic {
	Consecutive: qx_fx_effect_core_ConsecutiveStatic;
	Custom: qx_fx_effect_core_CustomStatic;
	Fade: qx_fx_effect_core_FadeStatic;
	Highlight: qx_fx_effect_core_HighlightStatic;
	Move: qx_fx_effect_core_MoveStatic;
	Parallel: qx_fx_effect_core_ParallelStatic;
	Property: qx_fx_effect_core_PropertyStatic;
	Scale: qx_fx_effect_core_ScaleStatic;
	Scroll: qx_fx_effect_core_ScrollStatic;
	Style: qx_fx_effect_core_StyleStatic;
}
interface qx_fx_effectStatic {
	combination: qx_fx_effect_combinationStatic;
	core: qx_fx_effect_coreStatic;
}
interface qx_fx_queueStatic {
	Manager: qx_fx_queue_ManagerStatic;
	Queue: qx_fx_queue_QueueStatic;
}
interface qx_fxStatic {
	Base: qx_fx_BaseStatic;
	effect: qx_fx_effectStatic;
	queue: qx_fx_queueStatic;
	Transition: qx_fx_TransitionStatic;
}
interface qx_htmlStatic {
	Blocker: qx_html_BlockerStatic;
	Canvas: qx_html_CanvasStatic;
	Decorator: qx_html_DecoratorStatic;
	Element: qx_html_ElementStatic;
	Flash: qx_html_FlashStatic;
	Iframe: qx_html_IframeStatic;
	Image: qx_html_ImageStatic;
	Input: qx_html_InputStatic;
	Label: qx_html_LabelStatic;
	Root: qx_html_RootStatic;
}
interface qx_io_partStatic {
	ClosurePart: qx_io_part_ClosurePartStatic;
	Package: qx_io_part_PackageStatic;
	Part: qx_io_part_PartStatic;
}
interface qx_io_remote_transportStatic {
	Abstract: qx_io_remote_transport_AbstractStatic;
	Iframe: qx_io_remote_transport_IframeStatic;
	Script: qx_io_remote_transport_ScriptStatic;
	XmlHttp: qx_io_remote_transport_XmlHttpStatic;
}
interface qx_io_remoteStatic {
	Exchange: qx_io_remote_ExchangeStatic;
	Request: qx_io_remote_RequestStatic;
	RequestQueue: qx_io_remote_RequestQueueStatic;
	Response: qx_io_remote_ResponseStatic;
	Rpc: qx_io_remote_RpcStatic;
	RpcError: qx_io_remote_RpcErrorStatic;
	transport: qx_io_remote_transportStatic;
}
interface qx_io_request_authenticationStatic {
	Basic: qx_io_request_authentication_BasicStatic;
	IAuthentication: qx_io_request_authentication_IAuthenticationStatic;
}
interface qx_io_requestStatic {
	AbstractRequest: qx_io_request_AbstractRequestStatic;
	authentication: qx_io_request_authenticationStatic;
	Jsonp: qx_io_request_JsonpStatic;
	Xhr: qx_io_request_XhrStatic;
}
interface qx_io_restStatic {
	Resource: qx_io_rest_ResourceStatic;
}
interface qx_ioStatic {
	ImageLoader: qx_io_ImageLoaderStatic;
	part: qx_io_partStatic;
	PartLoader: qx_io_PartLoaderStatic;
	remote: qx_io_remoteStatic;
	request: qx_io_requestStatic;
	rest: qx_io_restStatic;
	ScriptLoader: qx_io_ScriptLoaderStatic;
}
interface qx_langStatic {
	Array: qx_lang_ArrayStatic;
	Core: qx_lang_CoreStatic;
	Date: qx_lang_DateStatic;
	Function: qx_lang_FunctionStatic;
	Generics: qx_lang_GenericsStatic;
	Json: qx_lang_JsonStatic;
	JsonImpl: qx_lang_JsonImplStatic;
	Number: qx_lang_NumberStatic;
	Object: qx_lang_ObjectStatic;
	RingBuffer: qx_lang_RingBufferStatic;
	String: qx_lang_StringStatic;
	Type: qx_lang_TypeStatic;
}
interface qx_localeStatic {
	Date: qx_locale_DateStatic;
	Key: qx_locale_KeyStatic;
	LocalizedString: qx_locale_LocalizedStringStatic;
	Manager: qx_locale_ManagerStatic;
	MTranslation: qx_locale_MTranslationStatic;
	Number: qx_locale_NumberStatic;
	String: qx_locale_StringStatic;
}
interface qx_log_appenderStatic {
	Console: qx_log_appender_ConsoleStatic;
	Element: qx_log_appender_ElementStatic;
	Native: qx_log_appender_NativeStatic;
	NodeConsole: qx_log_appender_NodeConsoleStatic;
	PhoneGap: qx_log_appender_PhoneGapStatic;
	RhinoConsole: qx_log_appender_RhinoConsoleStatic;
	RhinoFile: qx_log_appender_RhinoFileStatic;
	RingBuffer: qx_log_appender_RingBufferStatic;
	Util: qx_log_appender_UtilStatic;
}
interface qx_logStatic {
	appender: qx_log_appenderStatic;
	Logger: qx_log_LoggerStatic;
}
interface qx_module_eventStatic {
	Keyboard: qx_module_event_KeyboardStatic;
	Mouse: qx_module_event_MouseStatic;
	Native: qx_module_event_NativeStatic;
	Orientation: qx_module_event_OrientationStatic;
	OrientationHandler: qx_module_event_OrientationHandlerStatic;
	Touch: qx_module_event_TouchStatic;
	TouchHandler: qx_module_event_TouchHandlerStatic;
}
interface qx_module_utilStatic {
	Array: qx_module_util_ArrayStatic;
	String: qx_module_util_StringStatic;
	Type: qx_module_util_TypeStatic;
}
interface qx_moduleStatic {
	Animation: qx_module_AnimationStatic;
	Attribute: qx_module_AttributeStatic;
	Blocker: qx_module_BlockerStatic;
	Cookie: qx_module_CookieStatic;
	Css: qx_module_CssStatic;
	Environment: qx_module_EnvironmentStatic;
	Event: qx_module_EventStatic;
	event: qx_module_eventStatic;
	Io: qx_module_IoStatic;
	Manipulating: qx_module_ManipulatingStatic;
	Placement: qx_module_PlacementStatic;
	Polyfill: qx_module_PolyfillStatic;
	Template: qx_module_TemplateStatic;
	Transform: qx_module_TransformStatic;
	Traversing: qx_module_TraversingStatic;
	util: qx_module_utilStatic;
}
interface qx_theme_classicStatic {
	Appearance: qx_theme_classic_AppearanceStatic;
	Color: qx_theme_classic_ColorStatic;
	Decoration: qx_theme_classic_DecorationStatic;
	Font: qx_theme_classic_FontStatic;
}
interface qx_theme_iconStatic {
	Oxygen: qx_theme_icon_OxygenStatic;
	Tango: qx_theme_icon_TangoStatic;
}
interface qx_theme_indigoStatic {
	Appearance: qx_theme_indigo_AppearanceStatic;
	Color: qx_theme_indigo_ColorStatic;
	Decoration: qx_theme_indigo_DecorationStatic;
	Font: qx_theme_indigo_FontStatic;
}
interface qx_theme_managerStatic {
	Appearance: qx_theme_manager_AppearanceStatic;
	Color: qx_theme_manager_ColorStatic;
	Decoration: qx_theme_manager_DecorationStatic;
	Font: qx_theme_manager_FontStatic;
	Icon: qx_theme_manager_IconStatic;
	Meta: qx_theme_manager_MetaStatic;
}
interface qx_theme_modernStatic {
	Appearance: qx_theme_modern_AppearanceStatic;
	Color: qx_theme_modern_ColorStatic;
	Decoration: qx_theme_modern_DecorationStatic;
	Font: qx_theme_modern_FontStatic;
}
interface qx_theme_simpleStatic {
	Appearance: qx_theme_simple_AppearanceStatic;
	Color: qx_theme_simple_ColorStatic;
	Decoration: qx_theme_simple_DecorationStatic;
	Font: qx_theme_simple_FontStatic;
	Image: qx_theme_simple_ImageStatic;
}
interface qx_themeStatic {
	classic: qx_theme_classicStatic;
	Classic: qx_theme_ClassicStatic;
	icon: qx_theme_iconStatic;
	indigo: qx_theme_indigoStatic;
	Indigo: qx_theme_IndigoStatic;
	manager: qx_theme_managerStatic;
	modern: qx_theme_modernStatic;
	Modern: qx_theme_ModernStatic;
	simple: qx_theme_simpleStatic;
	Simple: qx_theme_SimpleStatic;
}
interface qx_typeStatic {
	Array: qx_type_ArrayStatic;
	BaseArray: qx_type_BaseArrayStatic;
	BaseError: qx_type_BaseErrorStatic;
	BaseString: qx_type_BaseStringStatic;
}
interface qx_ui_basicStatic {
	Atom: qx_ui_basic_AtomStatic;
	Image: qx_ui_basic_ImageStatic;
	Label: qx_ui_basic_LabelStatic;
}
interface qx_ui_containerStatic {
	Composite: qx_ui_container_CompositeStatic;
	Resizer: qx_ui_container_ResizerStatic;
	Scroll: qx_ui_container_ScrollStatic;
	SlideBar: qx_ui_container_SlideBarStatic;
	Stack: qx_ui_container_StackStatic;
}
interface qx_ui_controlStatic {
	ColorPopup: qx_ui_control_ColorPopupStatic;
	ColorSelector: qx_ui_control_ColorSelectorStatic;
	DateChooser: qx_ui_control_DateChooserStatic;
}
interface qx_ui_core_queueStatic {
	Appearance: qx_ui_core_queue_AppearanceStatic;
	Dispose: qx_ui_core_queue_DisposeStatic;
	Layout: qx_ui_core_queue_LayoutStatic;
	Manager: qx_ui_core_queue_ManagerStatic;
	Visibility: qx_ui_core_queue_VisibilityStatic;
	Widget: qx_ui_core_queue_WidgetStatic;
}
interface qx_ui_core_scrollStatic {
	AbstractScrollArea: qx_ui_core_scroll_AbstractScrollAreaStatic;
	IScrollBar: qx_ui_core_scroll_IScrollBarStatic;
	MScrollBarFactory: qx_ui_core_scroll_MScrollBarFactoryStatic;
	MTouchScroll: qx_ui_core_scroll_MTouchScrollStatic;
	MWheelHandling: qx_ui_core_scroll_MWheelHandlingStatic;
	NativeScrollBar: qx_ui_core_scroll_NativeScrollBarStatic;
	ScrollBar: qx_ui_core_scroll_ScrollBarStatic;
	ScrollPane: qx_ui_core_scroll_ScrollPaneStatic;
	ScrollSlider: qx_ui_core_scroll_ScrollSliderStatic;
}
interface qx_ui_core_selectionStatic {
	Abstract: qx_ui_core_selection_AbstractStatic;
	ScrollArea: qx_ui_core_selection_ScrollAreaStatic;
	Widget: qx_ui_core_selection_WidgetStatic;
}
interface qx_ui_coreStatic {
	Blocker: qx_ui_core_BlockerStatic;
	ColumnData: qx_ui_core_ColumnDataStatic;
	Command: qx_ui_core_CommandStatic;
	DecoratorFactory: qx_ui_core_DecoratorFactoryStatic;
	DragDropCursor: qx_ui_core_DragDropCursorStatic;
	EventHandler: qx_ui_core_EventHandlerStatic;
	FocusHandler: qx_ui_core_FocusHandlerStatic;
	IMultiSelection: qx_ui_core_IMultiSelectionStatic;
	ISingleSelection: qx_ui_core_ISingleSelectionStatic;
	ISingleSelectionProvider: qx_ui_core_ISingleSelectionProviderStatic;
	LayoutItem: qx_ui_core_LayoutItemStatic;
	MBlocker: qx_ui_core_MBlockerStatic;
	MChildrenHandling: qx_ui_core_MChildrenHandlingStatic;
	MContentPadding: qx_ui_core_MContentPaddingStatic;
	MExecutable: qx_ui_core_MExecutableStatic;
	MLayoutHandling: qx_ui_core_MLayoutHandlingStatic;
	MMovable: qx_ui_core_MMovableStatic;
	MMultiSelectionHandling: qx_ui_core_MMultiSelectionHandlingStatic;
	MNativeOverflow: qx_ui_core_MNativeOverflowStatic;
	MPlacement: qx_ui_core_MPlacementStatic;
	MRemoteChildrenHandling: qx_ui_core_MRemoteChildrenHandlingStatic;
	MRemoteLayoutHandling: qx_ui_core_MRemoteLayoutHandlingStatic;
	MResizable: qx_ui_core_MResizableStatic;
	MSingleSelectionHandling: qx_ui_core_MSingleSelectionHandlingStatic;
	queue: qx_ui_core_queueStatic;
	scroll: qx_ui_core_scrollStatic;
	selection: qx_ui_core_selectionStatic;
	SingleSelectionManager: qx_ui_core_SingleSelectionManagerStatic;
	Spacer: qx_ui_core_SpacerStatic;
	Widget: qx_ui_core_WidgetStatic;
}
interface qx_ui_decoration_css3Static {
	BorderImage: qx_ui_decoration_css3_BorderImageStatic;
}
interface qx_ui_decorationStatic {
	Abstract: qx_ui_decoration_AbstractStatic;
	AbstractBox: qx_ui_decoration_AbstractBoxStatic;
	Background: qx_ui_decoration_BackgroundStatic;
	Beveled: qx_ui_decoration_BeveledStatic;
	BoxDiv: qx_ui_decoration_BoxDivStatic;
	css3: qx_ui_decoration_css3Static;
	Double: qx_ui_decoration_DoubleStatic;
	DynamicDecorator: qx_ui_decoration_DynamicDecoratorStatic;
	Grid: qx_ui_decoration_GridStatic;
	GridDiv: qx_ui_decoration_GridDivStatic;
	HBox: qx_ui_decoration_HBoxStatic;
	IDecorator: qx_ui_decoration_IDecoratorStatic;
	MBackgroundColor: qx_ui_decoration_MBackgroundColorStatic;
	MBackgroundImage: qx_ui_decoration_MBackgroundImageStatic;
	MBorderRadius: qx_ui_decoration_MBorderRadiusStatic;
	MBoxShadow: qx_ui_decoration_MBoxShadowStatic;
	MDoubleBorder: qx_ui_decoration_MDoubleBorderStatic;
	MLinearBackgroundGradient: qx_ui_decoration_MLinearBackgroundGradientStatic;
	MSingleBorder: qx_ui_decoration_MSingleBorderStatic;
	Single: qx_ui_decoration_SingleStatic;
	Uniform: qx_ui_decoration_UniformStatic;
	VBox: qx_ui_decoration_VBoxStatic;
}
interface qx_ui_embedStatic {
	AbstractIframe: qx_ui_embed_AbstractIframeStatic;
	Canvas: qx_ui_embed_CanvasStatic;
	Flash: qx_ui_embed_FlashStatic;
	Html: qx_ui_embed_HtmlStatic;
	HtmlArea: qx_ui_embed_HtmlAreaStatic;
	Iframe: qx_ui_embed_IframeStatic;
	ThemedIframe: qx_ui_embed_ThemedIframeStatic;
}
interface qx_ui_form_coreStatic {
	AbstractVirtualBox: qx_ui_form_core_AbstractVirtualBoxStatic;
	VirtualDropDownList: qx_ui_form_core_VirtualDropDownListStatic;
}
interface qx_ui_form_rendererStatic {
	AbstractRenderer: qx_ui_form_renderer_AbstractRendererStatic;
	Double: qx_ui_form_renderer_DoubleStatic;
	IFormRenderer: qx_ui_form_renderer_IFormRendererStatic;
	Single: qx_ui_form_renderer_SingleStatic;
	SinglePlaceholder: qx_ui_form_renderer_SinglePlaceholderStatic;
}
interface qx_ui_form_validationStatic {
	AsyncValidator: qx_ui_form_validation_AsyncValidatorStatic;
	Manager: qx_ui_form_validation_ManagerStatic;
}
interface qx_ui_formStatic {
	AbstractField: qx_ui_form_AbstractFieldStatic;
	AbstractSelectBox: qx_ui_form_AbstractSelectBoxStatic;
	Button: qx_ui_form_ButtonStatic;
	CheckBox: qx_ui_form_CheckBoxStatic;
	ComboBox: qx_ui_form_ComboBoxStatic;
	core: qx_ui_form_coreStatic;
	DateField: qx_ui_form_DateFieldStatic;
	Form: qx_ui_form_FormStatic;
	HoverButton: qx_ui_form_HoverButtonStatic;
	IBooleanForm: qx_ui_form_IBooleanFormStatic;
	IColorForm: qx_ui_form_IColorFormStatic;
	IDateForm: qx_ui_form_IDateFormStatic;
	IExecutable: qx_ui_form_IExecutableStatic;
	IForm: qx_ui_form_IFormStatic;
	IModel: qx_ui_form_IModelStatic;
	IModelSelection: qx_ui_form_IModelSelectionStatic;
	INumberForm: qx_ui_form_INumberFormStatic;
	IRadioItem: qx_ui_form_IRadioItemStatic;
	IRange: qx_ui_form_IRangeStatic;
	IStringForm: qx_ui_form_IStringFormStatic;
	List: qx_ui_form_ListStatic;
	ListItem: qx_ui_form_ListItemStatic;
	MenuButton: qx_ui_form_MenuButtonStatic;
	MForm: qx_ui_form_MFormStatic;
	MModelProperty: qx_ui_form_MModelPropertyStatic;
	MModelSelection: qx_ui_form_MModelSelectionStatic;
	PasswordField: qx_ui_form_PasswordFieldStatic;
	RadioButton: qx_ui_form_RadioButtonStatic;
	RadioButtonGroup: qx_ui_form_RadioButtonGroupStatic;
	RadioGroup: qx_ui_form_RadioGroupStatic;
	renderer: qx_ui_form_rendererStatic;
	RepeatButton: qx_ui_form_RepeatButtonStatic;
	Resetter: qx_ui_form_ResetterStatic;
	SelectBox: qx_ui_form_SelectBoxStatic;
	Slider: qx_ui_form_SliderStatic;
	Spinner: qx_ui_form_SpinnerStatic;
	SplitButton: qx_ui_form_SplitButtonStatic;
	TextArea: qx_ui_form_TextAreaStatic;
	TextField: qx_ui_form_TextFieldStatic;
	ToggleButton: qx_ui_form_ToggleButtonStatic;
	validation: qx_ui_form_validationStatic;
	VirtualComboBox: qx_ui_form_VirtualComboBoxStatic;
	VirtualSelectBox: qx_ui_form_VirtualSelectBoxStatic;
}
interface qx_ui_groupboxStatic {
	CheckGroupBox: qx_ui_groupbox_CheckGroupBoxStatic;
	GroupBox: qx_ui_groupbox_GroupBoxStatic;
	RadioGroupBox: qx_ui_groupbox_RadioGroupBoxStatic;
}
interface qx_ui_indicatorStatic {
	ProgressBar: qx_ui_indicator_ProgressBarStatic;
}
interface qx_ui_layoutStatic {
	Abstract: qx_ui_layout_AbstractStatic;
	Atom: qx_ui_layout_AtomStatic;
	Basic: qx_ui_layout_BasicStatic;
	Canvas: qx_ui_layout_CanvasStatic;
	Dock: qx_ui_layout_DockStatic;
	Flow: qx_ui_layout_FlowStatic;
	Grid: qx_ui_layout_GridStatic;
	Grow: qx_ui_layout_GrowStatic;
	HBox: qx_ui_layout_HBoxStatic;
	LineSizeIterator: qx_ui_layout_LineSizeIteratorStatic;
	Util: qx_ui_layout_UtilStatic;
	VBox: qx_ui_layout_VBoxStatic;
}
interface qx_ui_list_coreStatic {
	IListDelegate: qx_ui_list_core_IListDelegateStatic;
	MWidgetController: qx_ui_list_core_MWidgetControllerStatic;
}
interface qx_ui_list_providerStatic {
	IListProvider: qx_ui_list_provider_IListProviderStatic;
	WidgetProvider: qx_ui_list_provider_WidgetProviderStatic;
}
interface qx_ui_listStatic {
	core: qx_ui_list_coreStatic;
	List: qx_ui_list_ListStatic;
	provider: qx_ui_list_providerStatic;
}
interface qx_ui_menuStatic {
	AbstractButton: qx_ui_menu_AbstractButtonStatic;
	Button: qx_ui_menu_ButtonStatic;
	ButtonLayout: qx_ui_menu_ButtonLayoutStatic;
	CheckBox: qx_ui_menu_CheckBoxStatic;
	Layout: qx_ui_menu_LayoutStatic;
	Manager: qx_ui_menu_ManagerStatic;
	Menu: qx_ui_menu_MenuStatic;
	MenuSlideBar: qx_ui_menu_MenuSlideBarStatic;
	RadioButton: qx_ui_menu_RadioButtonStatic;
	Separator: qx_ui_menu_SeparatorStatic;
}
interface qx_ui_menubarStatic {
	Button: qx_ui_menubar_ButtonStatic;
	MenuBar: qx_ui_menubar_MenuBarStatic;
}
interface qx_ui_mobile_basicStatic {
	Atom: qx_ui_mobile_basic_AtomStatic;
	Image: qx_ui_mobile_basic_ImageStatic;
	Label: qx_ui_mobile_basic_LabelStatic;
}
interface qx_ui_mobile_containerStatic {
	Composite: qx_ui_mobile_container_CompositeStatic;
	INavigation: qx_ui_mobile_container_INavigationStatic;
	MasterDetail: qx_ui_mobile_container_MasterDetailStatic;
	MIScroll: qx_ui_mobile_container_MIScrollStatic;
	MNativeScroll: qx_ui_mobile_container_MNativeScrollStatic;
	Navigation: qx_ui_mobile_container_NavigationStatic;
	Scroll: qx_ui_mobile_container_ScrollStatic;
}
interface qx_ui_mobile_coreStatic {
	Blocker: qx_ui_mobile_core_BlockerStatic;
	DomUpdatedHandler: qx_ui_mobile_core_DomUpdatedHandlerStatic;
	EventHandler: qx_ui_mobile_core_EventHandlerStatic;
	MChildrenHandling: qx_ui_mobile_core_MChildrenHandlingStatic;
	MLayoutHandling: qx_ui_mobile_core_MLayoutHandlingStatic;
	MResize: qx_ui_mobile_core_MResizeStatic;
	Root: qx_ui_mobile_core_RootStatic;
	Widget: qx_ui_mobile_core_WidgetStatic;
}
interface qx_ui_mobile_dialogStatic {
	BusyIndicator: qx_ui_mobile_dialog_BusyIndicatorStatic;
	Dialog: qx_ui_mobile_dialog_DialogStatic;
	Manager: qx_ui_mobile_dialog_ManagerStatic;
	Menu: qx_ui_mobile_dialog_MenuStatic;
	Popup: qx_ui_mobile_dialog_PopupStatic;
}
interface qx_ui_mobile_embedStatic {
	Html: qx_ui_mobile_embed_HtmlStatic;
}
interface qx_ui_mobile_form_rendererStatic {
	AbstractRenderer: qx_ui_mobile_form_renderer_AbstractRendererStatic;
	Single: qx_ui_mobile_form_renderer_SingleStatic;
	SinglePlaceholder: qx_ui_mobile_form_renderer_SinglePlaceholderStatic;
}
interface qx_ui_mobile_formStatic {
	Button: qx_ui_mobile_form_ButtonStatic;
	CheckBox: qx_ui_mobile_form_CheckBoxStatic;
	Form: qx_ui_mobile_form_FormStatic;
	Group: qx_ui_mobile_form_GroupStatic;
	Input: qx_ui_mobile_form_InputStatic;
	MState: qx_ui_mobile_form_MStateStatic;
	MText: qx_ui_mobile_form_MTextStatic;
	MValue: qx_ui_mobile_form_MValueStatic;
	NumberField: qx_ui_mobile_form_NumberFieldStatic;
	PasswordField: qx_ui_mobile_form_PasswordFieldStatic;
	RadioButton: qx_ui_mobile_form_RadioButtonStatic;
	RadioGroup: qx_ui_mobile_form_RadioGroupStatic;
	renderer: qx_ui_mobile_form_rendererStatic;
	Resetter: qx_ui_mobile_form_ResetterStatic;
	Row: qx_ui_mobile_form_RowStatic;
	SelectBox: qx_ui_mobile_form_SelectBoxStatic;
	Slider: qx_ui_mobile_form_SliderStatic;
	TextArea: qx_ui_mobile_form_TextAreaStatic;
	TextField: qx_ui_mobile_form_TextFieldStatic;
	Title: qx_ui_mobile_form_TitleStatic;
	ToggleButton: qx_ui_mobile_form_ToggleButtonStatic;
}
interface qx_ui_mobile_layoutStatic {
	Abstract: qx_ui_mobile_layout_AbstractStatic;
	AbstractBox: qx_ui_mobile_layout_AbstractBoxStatic;
	Card: qx_ui_mobile_layout_CardStatic;
	HBox: qx_ui_mobile_layout_HBoxStatic;
	VBox: qx_ui_mobile_layout_VBoxStatic;
}
interface qx_ui_mobile_list_providerStatic {
	Provider: qx_ui_mobile_list_provider_ProviderStatic;
}
interface qx_ui_mobile_list_rendererStatic {
	Abstract: qx_ui_mobile_list_renderer_AbstractStatic;
	Default: qx_ui_mobile_list_renderer_DefaultStatic;
}
interface qx_ui_mobile_listStatic {
	IListDelegate: qx_ui_mobile_list_IListDelegateStatic;
	List: qx_ui_mobile_list_ListStatic;
	provider: qx_ui_mobile_list_providerStatic;
	renderer: qx_ui_mobile_list_rendererStatic;
}
interface qx_ui_mobile_navigationStatic {
	Manager: qx_ui_mobile_navigation_ManagerStatic;
}
interface qx_ui_mobile_navigationbarStatic {
	BackButton: qx_ui_mobile_navigationbar_BackButtonStatic;
	Button: qx_ui_mobile_navigationbar_ButtonStatic;
	NavigationBar: qx_ui_mobile_navigationbar_NavigationBarStatic;
	Title: qx_ui_mobile_navigationbar_TitleStatic;
}
interface qx_ui_mobile_pageStatic {
	Manager: qx_ui_mobile_page_ManagerStatic;
	NavigationPage: qx_ui_mobile_page_NavigationPageStatic;
	Page: qx_ui_mobile_page_PageStatic;
}
interface qx_ui_mobile_tabbarStatic {
	TabBar: qx_ui_mobile_tabbar_TabBarStatic;
	TabButton: qx_ui_mobile_tabbar_TabButtonStatic;
}
interface qx_ui_mobile_toolbarStatic {
	Button: qx_ui_mobile_toolbar_ButtonStatic;
	Separator: qx_ui_mobile_toolbar_SeparatorStatic;
	ToolBar: qx_ui_mobile_toolbar_ToolBarStatic;
}
interface qx_ui_mobileStatic {
	basic: qx_ui_mobile_basicStatic;
	container: qx_ui_mobile_containerStatic;
	core: qx_ui_mobile_coreStatic;
	dialog: qx_ui_mobile_dialogStatic;
	embed: qx_ui_mobile_embedStatic;
	form: qx_ui_mobile_formStatic;
	layout: qx_ui_mobile_layoutStatic;
	list: qx_ui_mobile_listStatic;
	navigation: qx_ui_mobile_navigationStatic;
	navigationbar: qx_ui_mobile_navigationbarStatic;
	page: qx_ui_mobile_pageStatic;
	tabbar: qx_ui_mobile_tabbarStatic;
	toolbar: qx_ui_mobile_toolbarStatic;
}
interface qx_ui_popupStatic {
	Manager: qx_ui_popup_ManagerStatic;
	Popup: qx_ui_popup_PopupStatic;
}
interface qx_ui_progressive_headfootStatic {
	Abstract: qx_ui_progressive_headfoot_AbstractStatic;
	Null: qx_ui_progressive_headfoot_NullStatic;
	Progress: qx_ui_progressive_headfoot_ProgressStatic;
	TableHeading: qx_ui_progressive_headfoot_TableHeadingStatic;
}
interface qx_ui_progressive_modelStatic {
	Abstract: qx_ui_progressive_model_AbstractStatic;
	Default: qx_ui_progressive_model_DefaultStatic;
}
interface qx_ui_progressive_renderer_table_cellStatic {
	Abstract: qx_ui_progressive_renderer_table_cell_AbstractStatic;
	Boolean: qx_ui_progressive_renderer_table_cell_BooleanStatic;
	Conditional: qx_ui_progressive_renderer_table_cell_ConditionalStatic;
	Default: qx_ui_progressive_renderer_table_cell_DefaultStatic;
	Html: qx_ui_progressive_renderer_table_cell_HtmlStatic;
	Icon: qx_ui_progressive_renderer_table_cell_IconStatic;
	Image: qx_ui_progressive_renderer_table_cell_ImageStatic;
	String: qx_ui_progressive_renderer_table_cell_StringStatic;
}
interface qx_ui_progressive_renderer_tableStatic {
	cell: qx_ui_progressive_renderer_table_cellStatic;
	Row: qx_ui_progressive_renderer_table_RowStatic;
	Widths: qx_ui_progressive_renderer_table_WidthsStatic;
}
interface qx_ui_progressive_rendererStatic {
	Abstract: qx_ui_progressive_renderer_AbstractStatic;
	FunctionCaller: qx_ui_progressive_renderer_FunctionCallerStatic;
	table: qx_ui_progressive_renderer_tableStatic;
}
interface qx_ui_progressive_structureStatic {
	Abstract: qx_ui_progressive_structure_AbstractStatic;
	Default: qx_ui_progressive_structure_DefaultStatic;
}
interface qx_ui_progressiveStatic {
	headfoot: qx_ui_progressive_headfootStatic;
	model: qx_ui_progressive_modelStatic;
	Progressive: qx_ui_progressive_ProgressiveStatic;
	renderer: qx_ui_progressive_rendererStatic;
	State: qx_ui_progressive_StateStatic;
	structure: qx_ui_progressive_structureStatic;
}
interface qx_ui_rootStatic {
	Abstract: qx_ui_root_AbstractStatic;
	Application: qx_ui_root_ApplicationStatic;
	Inline: qx_ui_root_InlineStatic;
	Page: qx_ui_root_PageStatic;
}
interface qx_ui_splitpaneStatic {
	Blocker: qx_ui_splitpane_BlockerStatic;
	HLayout: qx_ui_splitpane_HLayoutStatic;
	Pane: qx_ui_splitpane_PaneStatic;
	Slider: qx_ui_splitpane_SliderStatic;
	Splitter: qx_ui_splitpane_SplitterStatic;
	VLayout: qx_ui_splitpane_VLayoutStatic;
}
interface qx_ui_table_celleditorStatic {
	AbstractField: qx_ui_table_celleditor_AbstractFieldStatic;
	CheckBox: qx_ui_table_celleditor_CheckBoxStatic;
	ComboBox: qx_ui_table_celleditor_ComboBoxStatic;
	Dynamic: qx_ui_table_celleditor_DynamicStatic;
	PasswordField: qx_ui_table_celleditor_PasswordFieldStatic;
	SelectBox: qx_ui_table_celleditor_SelectBoxStatic;
	TextField: qx_ui_table_celleditor_TextFieldStatic;
}
interface qx_ui_table_cellrendererStatic {
	Abstract: qx_ui_table_cellrenderer_AbstractStatic;
	AbstractImage: qx_ui_table_cellrenderer_AbstractImageStatic;
	Boolean: qx_ui_table_cellrenderer_BooleanStatic;
	Conditional: qx_ui_table_cellrenderer_ConditionalStatic;
	Date: qx_ui_table_cellrenderer_DateStatic;
	Debug: qx_ui_table_cellrenderer_DebugStatic;
	Default: qx_ui_table_cellrenderer_DefaultStatic;
	Dynamic: qx_ui_table_cellrenderer_DynamicStatic;
	Html: qx_ui_table_cellrenderer_HtmlStatic;
	Image: qx_ui_table_cellrenderer_ImageStatic;
	Number: qx_ui_table_cellrenderer_NumberStatic;
	Password: qx_ui_table_cellrenderer_PasswordStatic;
	Replace: qx_ui_table_cellrenderer_ReplaceStatic;
	String: qx_ui_table_cellrenderer_StringStatic;
}
interface qx_ui_table_columnmenuStatic {
	Button: qx_ui_table_columnmenu_ButtonStatic;
	MenuItem: qx_ui_table_columnmenu_MenuItemStatic;
}
interface qx_ui_table_columnmodel_resizebehaviorStatic {
	Abstract: qx_ui_table_columnmodel_resizebehavior_AbstractStatic;
	Default: qx_ui_table_columnmodel_resizebehavior_DefaultStatic;
}
interface qx_ui_table_columnmodelStatic {
	Basic: qx_ui_table_columnmodel_BasicStatic;
	Resize: qx_ui_table_columnmodel_ResizeStatic;
	resizebehavior: qx_ui_table_columnmodel_resizebehaviorStatic;
}
interface qx_ui_table_headerrendererStatic {
	Default: qx_ui_table_headerrenderer_DefaultStatic;
	HeaderCell: qx_ui_table_headerrenderer_HeaderCellStatic;
	Icon: qx_ui_table_headerrenderer_IconStatic;
}
interface qx_ui_table_modelStatic {
	Abstract: qx_ui_table_model_AbstractStatic;
	Filtered: qx_ui_table_model_FilteredStatic;
	Remote: qx_ui_table_model_RemoteStatic;
	Simple: qx_ui_table_model_SimpleStatic;
}
interface qx_ui_table_paneStatic {
	CellEvent: qx_ui_table_pane_CellEventStatic;
	Clipper: qx_ui_table_pane_ClipperStatic;
	FocusIndicator: qx_ui_table_pane_FocusIndicatorStatic;
	Header: qx_ui_table_pane_HeaderStatic;
	Model: qx_ui_table_pane_ModelStatic;
	Pane: qx_ui_table_pane_PaneStatic;
	Scroller: qx_ui_table_pane_ScrollerStatic;
}
interface qx_ui_table_rowrendererStatic {
	Default: qx_ui_table_rowrenderer_DefaultStatic;
}
interface qx_ui_table_selectionStatic {
	Manager: qx_ui_table_selection_ManagerStatic;
	Model: qx_ui_table_selection_ModelStatic;
}
interface qx_ui_tableStatic {
	celleditor: qx_ui_table_celleditorStatic;
	cellrenderer: qx_ui_table_cellrendererStatic;
	columnmenu: qx_ui_table_columnmenuStatic;
	columnmodel: qx_ui_table_columnmodelStatic;
	headerrenderer: qx_ui_table_headerrendererStatic;
	ICellEditorFactory: qx_ui_table_ICellEditorFactoryStatic;
	ICellRenderer: qx_ui_table_ICellRendererStatic;
	IColumnMenuButton: qx_ui_table_IColumnMenuButtonStatic;
	IColumnMenuItem: qx_ui_table_IColumnMenuItemStatic;
	IHeaderRenderer: qx_ui_table_IHeaderRendererStatic;
	IRowRenderer: qx_ui_table_IRowRendererStatic;
	ITableModel: qx_ui_table_ITableModelStatic;
	model: qx_ui_table_modelStatic;
	MTableContextMenu: qx_ui_table_MTableContextMenuStatic;
	pane: qx_ui_table_paneStatic;
	rowrenderer: qx_ui_table_rowrendererStatic;
	selection: qx_ui_table_selectionStatic;
	Table: qx_ui_table_TableStatic;
}
interface qx_ui_tabviewStatic {
	Page: qx_ui_tabview_PageStatic;
	TabButton: qx_ui_tabview_TabButtonStatic;
	TabView: qx_ui_tabview_TabViewStatic;
}
interface qx_ui_toolbarStatic {
	Button: qx_ui_toolbar_ButtonStatic;
	CheckBox: qx_ui_toolbar_CheckBoxStatic;
	MenuButton: qx_ui_toolbar_MenuButtonStatic;
	Part: qx_ui_toolbar_PartStatic;
	PartContainer: qx_ui_toolbar_PartContainerStatic;
	RadioButton: qx_ui_toolbar_RadioButtonStatic;
	Separator: qx_ui_toolbar_SeparatorStatic;
	SplitButton: qx_ui_toolbar_SplitButtonStatic;
	ToolBar: qx_ui_toolbar_ToolBarStatic;
}
interface qx_ui_tooltipStatic {
	Manager: qx_ui_tooltip_ManagerStatic;
	ToolTip: qx_ui_tooltip_ToolTipStatic;
}
interface qx_ui_tree_coreStatic {
	AbstractItem: qx_ui_tree_core_AbstractItemStatic;
	AbstractTreeItem: qx_ui_tree_core_AbstractTreeItemStatic;
	FolderOpenButton: qx_ui_tree_core_FolderOpenButtonStatic;
	IVirtualTree: qx_ui_tree_core_IVirtualTreeStatic;
	IVirtualTreeDelegate: qx_ui_tree_core_IVirtualTreeDelegateStatic;
	MWidgetController: qx_ui_tree_core_MWidgetControllerStatic;
}
interface qx_ui_tree_providerStatic {
	IVirtualTreeProvider: qx_ui_tree_provider_IVirtualTreeProviderStatic;
	WidgetProvider: qx_ui_tree_provider_WidgetProviderStatic;
}
interface qx_ui_tree_selectionStatic {
	SelectionManager: qx_ui_tree_selection_SelectionManagerStatic;
}
interface qx_ui_treeStatic {
	core: qx_ui_tree_coreStatic;
	provider: qx_ui_tree_providerStatic;
	selection: qx_ui_tree_selectionStatic;
	Tree: qx_ui_tree_TreeStatic;
	TreeFile: qx_ui_tree_TreeFileStatic;
	TreeFolder: qx_ui_tree_TreeFolderStatic;
	VirtualTree: qx_ui_tree_VirtualTreeStatic;
	VirtualTreeItem: qx_ui_tree_VirtualTreeItemStatic;
}
interface qx_ui_treevirtualStatic {
	DefaultDataCellRenderer: qx_ui_treevirtual_DefaultDataCellRendererStatic;
	MFamily: qx_ui_treevirtual_MFamilyStatic;
	MNode: qx_ui_treevirtual_MNodeStatic;
	MTreePrimitive: qx_ui_treevirtual_MTreePrimitiveStatic;
	SelectionManager: qx_ui_treevirtual_SelectionManagerStatic;
	SimpleTreeDataCellRenderer: qx_ui_treevirtual_SimpleTreeDataCellRendererStatic;
	SimpleTreeDataModel: qx_ui_treevirtual_SimpleTreeDataModelStatic;
	SimpleTreeDataRowRenderer: qx_ui_treevirtual_SimpleTreeDataRowRendererStatic;
	TreeVirtual: qx_ui_treevirtual_TreeVirtualStatic;
}
interface qx_ui_virtual_behaviorStatic {
	Prefetch: qx_ui_virtual_behavior_PrefetchStatic;
}
interface qx_ui_virtual_cellStatic {
	Abstract: qx_ui_virtual_cell_AbstractStatic;
	AbstractImage: qx_ui_virtual_cell_AbstractImageStatic;
	AbstractWidget: qx_ui_virtual_cell_AbstractWidgetStatic;
	Boolean: qx_ui_virtual_cell_BooleanStatic;
	Cell: qx_ui_virtual_cell_CellStatic;
	CellStylesheet: qx_ui_virtual_cell_CellStylesheetStatic;
	Date: qx_ui_virtual_cell_DateStatic;
	Html: qx_ui_virtual_cell_HtmlStatic;
	ICell: qx_ui_virtual_cell_ICellStatic;
	Image: qx_ui_virtual_cell_ImageStatic;
	IWidgetCell: qx_ui_virtual_cell_IWidgetCellStatic;
	IWidgetCellDelegate: qx_ui_virtual_cell_IWidgetCellDelegateStatic;
	Number: qx_ui_virtual_cell_NumberStatic;
	String: qx_ui_virtual_cell_StringStatic;
	WidgetCell: qx_ui_virtual_cell_WidgetCellStatic;
}
interface qx_ui_virtual_coreStatic {
	Axis: qx_ui_virtual_core_AxisStatic;
	CellEvent: qx_ui_virtual_core_CellEventStatic;
	IHtmlCellProvider: qx_ui_virtual_core_IHtmlCellProviderStatic;
	ILayer: qx_ui_virtual_core_ILayerStatic;
	IWidgetCellProvider: qx_ui_virtual_core_IWidgetCellProviderStatic;
	Pane: qx_ui_virtual_core_PaneStatic;
	Scroller: qx_ui_virtual_core_ScrollerStatic;
}
interface qx_ui_virtual_formStatic {
	IListDelegate: qx_ui_virtual_form_IListDelegateStatic;
	List: qx_ui_virtual_form_ListStatic;
	ListController: qx_ui_virtual_form_ListControllerStatic;
	ListItemCell: qx_ui_virtual_form_ListItemCellStatic;
}
interface qx_ui_virtual_layerStatic {
	Abstract: qx_ui_virtual_layer_AbstractStatic;
	AbstractBackground: qx_ui_virtual_layer_AbstractBackgroundStatic;
	CellSpanManager: qx_ui_virtual_layer_CellSpanManagerStatic;
	Column: qx_ui_virtual_layer_ColumnStatic;
	GridLines: qx_ui_virtual_layer_GridLinesStatic;
	HtmlCell: qx_ui_virtual_layer_HtmlCellStatic;
	HtmlCellSpan: qx_ui_virtual_layer_HtmlCellSpanStatic;
	Row: qx_ui_virtual_layer_RowStatic;
	WidgetCell: qx_ui_virtual_layer_WidgetCellStatic;
	WidgetCellSpan: qx_ui_virtual_layer_WidgetCellSpanStatic;
}
interface qx_ui_virtual_selectionStatic {
	Abstract: qx_ui_virtual_selection_AbstractStatic;
	CellLines: qx_ui_virtual_selection_CellLinesStatic;
	CellRectangle: qx_ui_virtual_selection_CellRectangleStatic;
	Column: qx_ui_virtual_selection_ColumnStatic;
	ISelectionDelegate: qx_ui_virtual_selection_ISelectionDelegateStatic;
	MModel: qx_ui_virtual_selection_MModelStatic;
	Row: qx_ui_virtual_selection_RowStatic;
}
interface qx_ui_virtualStatic {
	behavior: qx_ui_virtual_behaviorStatic;
	cell: qx_ui_virtual_cellStatic;
	core: qx_ui_virtual_coreStatic;
	form: qx_ui_virtual_formStatic;
	layer: qx_ui_virtual_layerStatic;
	selection: qx_ui_virtual_selectionStatic;
}
interface qx_ui_windowStatic {
	Desktop: qx_ui_window_DesktopStatic;
	IDesktop: qx_ui_window_IDesktopStatic;
	IWindowManager: qx_ui_window_IWindowManagerStatic;
	Manager: qx_ui_window_ManagerStatic;
	MDesktop: qx_ui_window_MDesktopStatic;
	Window: qx_ui_window_WindowStatic;
}
interface qx_uiStatic {
	basic: qx_ui_basicStatic;
	container: qx_ui_containerStatic;
	control: qx_ui_controlStatic;
	core: qx_ui_coreStatic;
	decoration: qx_ui_decorationStatic;
	embed: qx_ui_embedStatic;
	form: qx_ui_formStatic;
	groupbox: qx_ui_groupboxStatic;
	indicator: qx_ui_indicatorStatic;
	layout: qx_ui_layoutStatic;
	list: qx_ui_listStatic;
	menu: qx_ui_menuStatic;
	menubar: qx_ui_menubarStatic;
	mobile: qx_ui_mobileStatic;
	popup: qx_ui_popupStatic;
	progressive: qx_ui_progressiveStatic;
	root: qx_ui_rootStatic;
	splitpane: qx_ui_splitpaneStatic;
	table: qx_ui_tableStatic;
	tabview: qx_ui_tabviewStatic;
	toolbar: qx_ui_toolbarStatic;
	tooltip: qx_ui_tooltipStatic;
	tree: qx_ui_treeStatic;
	treevirtual: qx_ui_treevirtualStatic;
	virtual: qx_ui_virtualStatic;
	window: qx_ui_windowStatic;
}
interface qx_util_formatStatic {
	DateFormat: qx_util_format_DateFormatStatic;
	IFormat: qx_util_format_IFormatStatic;
	NumberFormat: qx_util_format_NumberFormatStatic;
}
interface qx_util_fsmStatic {
	FiniteStateMachine: qx_util_fsm_FiniteStateMachineStatic;
	State: qx_util_fsm_StateStatic;
	Transition: qx_util_fsm_TransitionStatic;
}
interface qx_util_placementStatic {
	AbstractAxis: qx_util_placement_AbstractAxisStatic;
	BestFitAxis: qx_util_placement_BestFitAxisStatic;
	DirectAxis: qx_util_placement_DirectAxisStatic;
	KeepAlignAxis: qx_util_placement_KeepAlignAxisStatic;
	Placement: qx_util_placement_PlacementStatic;
}
interface qx_utilStatic {
	AliasManager: qx_util_AliasManagerStatic;
	Base64: qx_util_Base64Static;
	ColorUtil: qx_util_ColorUtilStatic;
	DeferredCall: qx_util_DeferredCallStatic;
	DeferredCallManager: qx_util_DeferredCallManagerStatic;
	Delegate: qx_util_DelegateStatic;
	DisposeUtil: qx_util_DisposeUtilStatic;
	EditDistance: qx_util_EditDistanceStatic;
	ExtendedColor: qx_util_ExtendedColorStatic;
	format: qx_util_formatStatic;
	fsm: qx_util_fsmStatic;
	LibraryManager: qx_util_LibraryManagerStatic;
	ObjectPool: qx_util_ObjectPoolStatic;
	OOUtil: qx_util_OOUtilStatic;
	Permutation: qx_util_PermutationStatic;
	placement: qx_util_placementStatic;
	PropertyUtil: qx_util_PropertyUtilStatic;
	Request: qx_util_RequestStatic;
	ResourceManager: qx_util_ResourceManagerStatic;
	Serializer: qx_util_SerializerStatic;
	StringBuilder: qx_util_StringBuilderStatic;
	StringEscape: qx_util_StringEscapeStatic;
	StringSplit: qx_util_StringSplitStatic;
	TimerManager: qx_util_TimerManagerStatic;
	Uri: qx_util_UriStatic;
	Validate: qx_util_ValidateStatic;
	ValueManager: qx_util_ValueManagerStatic;
}
interface qx_xmlStatic {
	Document: qx_xml_DocumentStatic;
	Element: qx_xml_ElementStatic;
	String: qx_xml_StringStatic;
}
interface qxStatic {
	application: qx_applicationStatic;
	bom: qx_bomStatic;
	Bootstrap: qx_BootstrapStatic;
	Class: qx_ClassStatic;
	core: qx_coreStatic;
	data: qx_dataStatic;
	dev: qx_devStatic;
	dom: qx_domStatic;
	event: qx_eventStatic;
	fx: qx_fxStatic;
	html: qx_htmlStatic;
	Interface: qx_InterfaceStatic;
	io: qx_ioStatic;
	lang: qx_langStatic;
	locale: qx_localeStatic;
	log: qx_logStatic;
	Mixin: qx_MixinStatic;
	module: qx_moduleStatic;
	Part: qx_PartStatic;
	theme: qx_themeStatic;
	Theme: qx_ThemeStatic;
	type: qx_typeStatic;
	ui: qx_uiStatic;
	util: qx_utilStatic;
	xml: qx_xmlStatic;
}
declare var qx: qxStatic;
