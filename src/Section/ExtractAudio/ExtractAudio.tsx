const ExtractAudio = (): JSX.Element => {
  return (
    <form>
      <div>
        <label htmlFor="source-file">
          <span>Source video file</span>
          <input id="source-file" type="file" />
        </label>
      </div>
      <div>
        <label htmlFor="output-directory">
          <span>Output directory</span>
          <input id="output-directory" type="file" />
        </label>
      </div>
      <button type="submit">Convert</button>
    </form>
  );
};

export default ExtractAudio;
