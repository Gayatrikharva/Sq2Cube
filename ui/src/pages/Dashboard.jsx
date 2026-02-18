function Dashboard() {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <p className="subtitle">Upload & Visualize enhanced 3D model here.</p>

            <div className="top-grid">
                <div className="card upload-card">
                    <h3>Upload image</h3>
                    <input type ="file" />
                    <button className="primary-btn">Enhance</button>
                </div>

                <div className="card viewer-card">
                    <h3>3D Viewer</h3>
                    <div className="viewer-placeholder">3D Model Preview</div>
                </div>
            </div>

            <div className="metrics-grid">

                <div className="card metric">
                    <h4>PSNR</h4>
                    <p className="metric-value">--</p>
                </div>

                <div className="card metric">
                    <h4>SSIM</h4>
                    <p className="metric-value">--</p>
                </div>

                <div className="card metric">
                    <h4>Status</h4>
                    <p className="metric-value">Waiting</p>
                </div>
            </div>

            <div className="card warning-card">
                <h3>AI Warning</h3>
                <p>No hallucination detected yet.</p>
            </div>
        </div>
    );
}

export default Dashboard;
